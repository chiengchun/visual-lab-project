'use client'
import { useState, useEffect } from 'react'
import { createClient } from '@/lib/supabase'
import { useRouter } from 'next/navigation'

const CATEGORIES = ['Premiere Pro', 'DaVinci Resolve', 'After Effects', 'CapCut', 'Final Cut', 'อื่นๆ']

export default function Home() {
  const supabase = createClient()
  const router = useRouter()
  const [user, setUser] = useState(null)
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [showForm, setShowForm] = useState(false)
  const [selectedPost, setSelectedPost] = useState(null)
  const [comments, setComments] = useState([])
  const [newComment, setNewComment] = useState('')
  const [form, setForm] = useState({ title: '', content: '', platform: 'Premiere Pro', youtube_url: '' })
  const [filter, setFilter] = useState('ทั้งหมด')
  const [submitting, setSubmitting] = useState(false)

  useEffect(() => {
    supabase.auth.getUser().then(({ data: { user } }) => {
      if (!user) { router.push('/login'); return }
      setUser(user)
      loadPosts()
    })
  }, [])

  async function loadPosts() {
    const { data } = await supabase.from('posts').select('*').order('created_at', { ascending: false })
    setPosts(data || [])
    setLoading(false)
  }

  async function loadComments(postId) {
    const { data } = await supabase.from('comments').select('*').eq('post_id', postId).order('created_at', { ascending: true })
    setComments(data || [])
  }

  async function signOut() {
    await supabase.auth.signOut()
    router.push('/login')
  }

  async function addPost(e) {
    e.preventDefault()
    if (!form.title.trim() || !form.content.trim()) return
    setSubmitting(true)
    await supabase.from('posts').insert({
      title: form.title,
      content: form.content,
      platform: form.platform,
      youtube_url: form.youtube_url,
      added_by_name: user.user_metadata?.full_name || user.email,
      added_by_email: user.email,
      added_by_avatar: user.user_metadata?.avatar_url || '',
      category: form.platform,
    })
    setForm({ title: '', content: '', platform: 'Premiere Pro', youtube_url: '' })
    setShowForm(false)
    setSubmitting(false)
    loadPosts()
  }

  async function addComment(e) {
    e.preventDefault()
    if (!newComment.trim()) return
    await supabase.from('comments').insert({
      post_id: selectedPost.id,
      author_name: user.user_metadata?.full_name || user.email,
      author_email: user.email,
      author_avatar: user.user_metadata?.avatar_url || '',
      content: newComment,
    })
    setNewComment('')
    loadComments(selectedPost.id)
  }

  function openPost(post) {
    setSelectedPost(post)
    loadComments(post.id)
  }

  const filtered = filter === 'ทั้งหมด' ? posts : posts.filter(p => p.platform === filter)

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-gray-400 text-lg">กำลังโหลด...</div>
    </div>
  )

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-gray-900 text-white px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-2xl">🎬</span>
          <span className="font-bold text-lg">Visual Lab</span>
        </div>
        <div className="flex items-center gap-3">
          {user?.user_metadata?.avatar_url && (
            <img src={user.user_metadata.avatar_url} className="w-8 h-8 rounded-full" alt="avatar" />
          )}
          <span className="text-sm text-gray-300">{user?.user_metadata?.full_name || user?.email}</span>
          <button onClick={signOut} className="text-sm text-gray-400 hover:text-white transition-colors ml-2">
            ออกจากระบบ
          </button>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Visual Technic</h1>
            <p className="text-gray-500 text-sm mt-1">{posts.length} เทคนิคทั้งหมด</p>
          </div>
          <button
            onClick={() => setShowForm(!showForm)}
            className="bg-blue-600 text-white px-5 py-2.5 rounded-xl font-medium hover:bg-blue-700 transition-colors flex items-center gap-2"
          >
            <span>+</span> เพิ่มเทคนิค
          </button>
        </div>

        {showForm && (
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-6">
            <h2 className="font-semibold text-gray-800 mb-4">เพิ่มเทคนิคใหม่</h2>
            <form onSubmit={addPost} className="space-y-4">
              <input
                type="text"
                placeholder="ชื่อเทคนิค เช่น วิธีทำ Color Grade สไตล์ Cinema"
                value={form.title}
                onChange={e => setForm({ ...form, title: e.target.value })}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-400"
                required
              />
              <textarea
                placeholder="อธิบายขั้นตอน วิธีใช้ หรือ tips ที่มีประโยชน์..."
                value={form.content}
                onChange={e => setForm({ ...form, content: e.target.value })}
                rows={4}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-400 resize-none"
                required
              />
              <div className="flex gap-3">
                <select
                  value={form.platform}
                  onChange={e => setForm({ ...form, platform: e.target.value })}
                  className="flex-1 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-400 bg-white"
                >
                  {CATEGORIES.map(c => <option key={c}>{c}</option>)}
                </select>
                <input
                  type="url"
                  placeholder="YouTube URL (ถ้ามี)"
                  value={form.youtube_url}
                  onChange={e => setForm({ ...form, youtube_url: e.target.value })}
                  className="flex-2 w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-400"
                />
              </div>
              <div className="flex gap-3 pt-1">
                <button type="submit" disabled={submitting} className="bg-blue-600 text-white px-6 py-2.5 rounded-xl font-medium hover:bg-blue-700 transition-colors disabled:opacity-50">
                  {submitting ? 'กำลังบันทึก...' : 'บันทึก'}
                </button>
                <button type="button" onClick={() => setShowForm(false)} className="text-gray-500 px-6 py-2.5 rounded-xl hover:bg-gray-100 transition-colors">
                  ยกเลิก
                </button>
              </div>
            </form>
          </div>
        )}

        <div className="flex gap-2 mb-5 flex-wrap">
          {['ทั้งหมด', ...CATEGORIES].map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                filter === cat ? 'bg-blue-600 text-white' : 'bg-white text-gray-600 border border-gray-200 hover:border-blue-300'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {filtered.length === 0 ? (
          <div className="text-center py-16 text-gray-400">
            <div className="text-5xl mb-3">📭</div>
            <p>ยังไม่มีเทคนิคในหมวดนี้ เพิ่มอันแรกได้เลย!</p>
          </div>
        ) : (
          <div className="grid gap-4">
            {filtered.map(post => (
              <div
                key={post.id}
                onClick={() => openPost(post)}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 cursor-pointer hover:shadow-md hover:border-blue-200 transition-all"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-medium bg-blue-50 text-blue-600 px-2.5 py-1 rounded-full">{post.platform}</span>
                    </div>
                    <h2 className="font-semibold text-gray-800 text-base leading-snug">{post.title}</h2>
                    <p className="text-gray-500 text-sm mt-2 line-clamp-2">{post.content}</p>
                  </div>
                  {post.added_by_avatar && (
                    <img src={post.added_by_avatar} className="w-9 h-9 rounded-full flex-shrink-0" alt="" />
                  )}
                </div>
                <div className="flex items-center justify-between mt-4 pt-3 border-t border-gray-50">
                  <span className="text-xs text-gray-400">โดย {post.added_by_name}</span>
                  <span className="text-xs text-gray-400">{new Date(post.created_at).toLocaleDateString('th-TH')}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {selectedPost && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-end md:items-center justify-center p-4" onClick={() => setSelectedPost(null)}>
          <div className="bg-white rounded-2xl w-full max-w-2xl max-h-[85vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
            <div className="p-6 border-b border-gray-100">
              <div className="flex justify-between items-start">
                <span className="text-xs font-medium bg-blue-50 text-blue-600 px-2.5 py-1 rounded-full">{selectedPost.platform}</span>
                <button onClick={() => setSelectedPost(null)} className="text-gray-400 hover:text-gray-600 text-xl leading-none">×</button>
              </div>
              <h2 className="text-xl font-bold text-gray-800 mt-3">{selectedPost.title}</h2>
              <p className="text-gray-600 mt-3 leading-relaxed whitespace-pre-wrap">{selectedPost.content}</p>
              {selectedPost.youtube_url && (
                <a href={selectedPost.youtube_url} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-4 text-red-600 text-sm font-medium hover:underline">
                  ▶ ดูวิดีโอ YouTube
                </a>
              )}
              <div className="flex items-center gap-2 mt-4 pt-4 border-t border-gray-100">
                {selectedPost.added_by_avatar && (
                  <img src={selectedPost.added_by_avatar} className="w-7 h-7 rounded-full" alt="" />
                )}
                <span className="text-sm text-gray-500">เพิ่มโดย {selectedPost.added_by_name}</span>
                <span className="text-sm text-gray-400 ml-auto">{new Date(selectedPost.created_at).toLocaleDateString('th-TH')}</span>
              </div>
            </div>

            <div className="p-6">
              <h3 className="font-semibold text-gray-700 mb-4">💬 ความคิดเห็น ({comments.length})</h3>
              <div className="space-y-3 mb-5">
                {comments.map(c => (
                  <div key={c.id} className="flex gap-3">
                    {c.author_avatar && <img src={c.author_avatar} className="w-7 h-7 rounded-full flex-shrink-0 mt-0.5" alt="" />}
                    <div className="bg-gray-50 rounded-xl px-4 py-3 flex-1">
                      <span className="text-xs font-medium text-gray-700">{c.author_name}</span>
                      <p className="text-sm text-gray-600 mt-1">{c.content}</p>
                    </div>
                  </div>
                ))}
              </div>
              <form onSubmit={addComment} className="flex gap-2">
                <input
                  type="text"
                  placeholder="เขียนความคิดเห็น..."
                  value={newComment}
                  onChange={e => setNewComment(e.target.value)}
                  className="flex-1 border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-blue-400"
                />
                <button type="submit" className="bg-blue-600 text-white px-5 py-2.5 rounded-xl text-sm font-medium hover:bg-blue-700 transition-colors">
                  ส่ง
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}