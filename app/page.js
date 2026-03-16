'use client'
import { useState, useEffect } from 'react'
import { createClient } from '@/lib/supabase'

const CATEGORIES = ['Ai Visual', 'Editting & Visual FX', 'Color Granding', 'Shooting Production', 'Etc']
const ADMIN_EMAIL = 'chiengdirector@gmail.com'

function getYouTubeId(url) {
  if (!url) return null
  try {
    const u = new URL(url)
    return u.searchParams.get('v') || u.pathname.split('/').pop()
  } catch { return null }
}

export default function Home() {
  const supabase = createClient()
  const [user, setUser] = useState(null)
  const [posts, setPosts] = useState([])
  const [activeCategory, setActiveCategory] = useState('All')
  const [showForm, setShowForm] = useState(false)
  const [selectedPost, setSelectedPost] = useState(null)
  const [comments, setComments] = useState([])
  const [newComment, setNewComment] = useState('')
  const [loading, setLoading] = useState(true)
  const [form, setForm] = useState({ title: '', description: '', platform: '', url: '', category: CATEGORIES[0] })

  const isAdmin = user?.email === ADMIN_EMAIL

  useEffect(() => {
    supabase.auth.getUser().then(({ data: { user } }) => setUser(user))
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_, session) => {
      setUser(session?.user ?? null)
    })
    fetchPosts()
    return () => subscription.unsubscribe()
  }, [])

  async function fetchPosts() {
    setLoading(true)
    const { data } = await supabase.from('posts').select('*').order('created_at', { ascending: false })
    setPosts(data || [])
    setLoading(false)
  }

  async function fetchComments(postId) {
    const { data } = await supabase.from('comments').select('*').eq('post_id', postId).order('created_at', { ascending: true })
    setComments(data || [])
  }

  async function addComment() {
    if (!newComment.trim() || !user) return
    await supabase.from('comments').insert({
      post_id: selectedPost.id,
      author_name: user.user_metadata?.full_name,
      author_email: user.email,
      author_avatar: user.user_metadata?.avatar_url,
      content: newComment
    })
    setNewComment('')
    fetchComments(selectedPost.id)
  }

  async function addPost(e) {
    e.preventDefault()
    if (!isAdmin) return
    await supabase.from('posts').insert({
      ...form,
      added_by_name: user.user_metadata?.full_name,
      added_by_email: user.email,
      added_by_avatar: user.user_metadata?.avatar_url,
      image_urls: []
    })
    setForm({ title: '', description: '', platform: '', url: '', category: CATEGORIES[0] })
    setShowForm(false)
    fetchPosts()
  }

  function openPost(post) {
    setSelectedPost(post)
    fetchComments(post.id)
  }

  const filteredPosts = activeCategory === 'All' ? posts : posts.filter(p => p.category === activeCategory)

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-gray-900 text-white px-6 py-4 flex items-center justify-between sticky top-0 z-10">
        <div className="flex items-center gap-2">
          <span>🎬</span>
          <span className="font-bold text-lg">Visual Lab</span>
        </div>
        {user ? (
          <div className="flex items-center gap-3">
            <img src={user.user_metadata?.avatar_url} alt="" className="w-8 h-8 rounded-full" />
            <span className="text-sm hidden sm:block">{user.user_metadata?.full_name}</span>
            <button onClick={() => supabase.auth.signOut()} className="text-sm text-gray-400 hover:text-white">ออกจากระบบ</button>
          </div>
        ) : (
          <button onClick={() => supabase.auth.signInWithOAuth({ provider: 'google', options: { redirectTo: \`\${location.origin}/auth/callback\` } })} className="bg-white text-gray-900 px-4 py-2 rounded-lg text-sm font-medium">เข้าสู่ระบบ</button>
        )}
      </header>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
        <div className="flex items-start justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Visual Technic</h1>
            <p className="text-gray-500 text-sm mt-1">{filteredPosts.length} เทคนิคทั้งหมด</p>
          </div>
          {isAdmin && (
            <button onClick={() => setShowForm(!showForm)} className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-700 transition-colors">
              <span>+</span> เพิ่มเทคนิค
            </button>
          )}
        </div>

        <div className="flex gap-2 flex-wrap mb-6">
          {['All', ...CATEGORIES].map(cat => (
            <button key={cat} onClick={() => setActiveCategory(cat)}
              className={\`px-4 py-2 rounded-full text-sm font-medium transition-colors \${activeCategory === cat ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 border border-gray-200 hover:border-blue-300'}\`}>
              {cat}
            </button>
          ))}
        </div>

        {showForm && isAdmin && (
          <form onSubmit={addPost} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-6">
            <h2 className="font-semibold text-gray-900 mb-4">เพิ่มเทคนิคใหม่</h2>
            <div className="space-y-3">
              <input required placeholder="ชื่อเทคนิค" value={form.title} onChange={e => setForm({...form, title: e.target.value})} className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
              <textarea required placeholder="สรุปเนื้อหาภาษาไทย" value={form.description} onChange={e => setForm({...form, description: e.target.value})} rows={3} className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
              <div className="flex gap-3">
                <select value={form.category} onChange={e => setForm({...form, category: e.target.value})} className="flex-1 border border-gray-200 rounded-lg px-3 py-2 text-sm">
                  {CATEGORIES.map(c => <option key={c}>{c}</option>)}
                </select>
                <input placeholder="Platform (YouTube, IG...)" value={form.platform} onChange={e => setForm({...form, platform: e.target.value})} className="flex-1 border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <input placeholder="Link URL" value={form.url} onChange={e => setForm({...form, url: e.target.value})} className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div className="flex gap-2 mt-4">
              <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700">บันทึก</button>
              <button type="button" onClick={() => setShowForm(false)} className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-200">ยกเลิก</button>
            </div>
          </form>
        )}

        {loading ? (
          <div className="text-center py-20 text-gray-400">กำลังโหลด...</div>
        ) : filteredPosts.length === 0 ? (
          <div className="text-center py-20">
            <div className="text-4xl mb-3">📬</div>
            <p className="text-gray-400">ยังไม่มีเทคนิคในหมวดนี้ เพิ่มอันแรกได้เลย!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredPosts.map(post => {
              const ytId = getYouTubeId(post.url)
              const coverImage = (post.image_urls && post.image_urls.length > 0)
                ? post.image_urls[0]
                : (ytId ? \`https://img.youtube.com/vi/\${ytId}/hqdefault.jpg\` : null)
              return (
                <div key={post.id} onClick={() => openPost(post)} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden cursor-pointer hover:shadow-md transition-all hover:-translate-y-0.5">
                  {coverImage && (
                    <div className="h-44 bg-gray-100 overflow-hidden">
                      <img src={coverImage} alt={post.title} className="w-full h-full object-cover" onError={e => { e.target.parentElement.style.display='none' }} />
                    </div>
                  )}
                  <div className="p-4">
                    <span className="text-xs bg-blue-50 text-blue-600 px-2 py-1 rounded-full font-medium">{post.category}</span>
                    <h3 className="font-semibold text-gray-900 mt-2 text-sm leading-snug line-clamp-2">{post.title}</h3>
                    <p className="text-gray-500 text-xs mt-1 line-clamp-2">{post.description}</p>
                    <div className="flex items-center gap-2 mt-3 pt-3 border-t border-gray-50">
                      {post.added_by_avatar && <img src={post.added_by_avatar} alt="" className="w-5 h-5 rounded-full" />}
                      <span className="text-xs text-gray-400 flex-1">{post.added_by_name}</span>
                      {post.image_urls && post.image_urls.length > 0 && <span className="text-xs text-gray-400">🖼 {post.image_urls.length}</span>}
                      {post.platform && <span className="text-xs text-gray-400">{post.platform}</span>}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </main>

      {selectedPost && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4" onClick={() => setSelectedPost(null)}>
          <div className="bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto relative" onClick={e => e.stopPropagation()}>
            <button onClick={() => setSelectedPost(null)} className="absolute top-4 right-4 z-10 w-8 h-8 bg-white rounded-full shadow flex items-center justify-center text-gray-500 hover:text-gray-900">✕</button>

            {selectedPost.image_urls && selectedPost.image_urls.length > 0 && (
              <div className="flex gap-2 overflow-x-auto p-4 bg-gray-50 rounded-t-2xl">
                {selectedPost.image_urls.map((url, i) => (
                  <img key={i} src={url} alt={\`frame \${i+1}\`} className="h-52 w-auto rounded-xl flex-shrink-0 object-cover shadow-sm" />
                ))}
              </div>
            )}

            {!selectedPost.image_urls?.length && getYouTubeId(selectedPost.url) && (
              <div className="bg-black rounded-t-2xl overflow-hidden">
                <iframe
                  src={\`https://www.youtube.com/embed/\${getYouTubeId(selectedPost.url)}\`}
                  className="w-full aspect-video"
                  allowFullScreen
                />
              </div>
            )}

            <div className="p-6">
              <div className="flex items-center gap-2 mb-3 flex-wrap">
                <span className="text-xs bg-blue-50 text-blue-600 px-2 py-1 rounded-full font-medium">{selectedPost.category}</span>
                {selectedPost.platform && <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">{selectedPost.platform}</span>}
              </div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">{selectedPost.title}</h2>
              <p className="text-gray-700 text-sm leading-relaxed mb-4 whitespace-pre-line">{selectedPost.description}</p>
              {selectedPost.url && (
                <a href={selectedPost.url} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-600 text-sm hover:underline bg-blue-50 px-3 py-2 rounded-lg mb-4">
                  🔗 ดูต้นฉบับ
                </a>
              )}
              <div className="flex items-center gap-2 py-3 border-t border-b border-gray-100 mb-4">
                {selectedPost.added_by_avatar && <img src={selectedPost.added_by_avatar} alt="" className="w-6 h-6 rounded-full" />}
                <span className="text-xs text-gray-500">เพิ่มโดย {selectedPost.added_by_name}</span>
              </div>

              <h3 className="font-semibold text-gray-900 mb-3 text-sm">ความคิดเห็น ({comments.length})</h3>
              <div className="space-y-3 mb-4">
                {comments.map(c => (
                  <div key={c.id} className="flex gap-2">
                    {c.author_avatar && <img src={c.author_avatar} alt="" className="w-7 h-7 rounded-full flex-shrink-0" />}
                    <div className="bg-gray-50 rounded-xl px-3 py-2 flex-1">
                      <p className="text-xs font-medium text-gray-700">{c.author_name}</p>
                      <p className="text-sm text-gray-600 mt-0.5">{c.content}</p>
                    </div>
                  </div>
                ))}
              </div>
              {user ? (
                <div className="flex gap-2">
                  <input value={newComment} onChange={e => setNewComment(e.target.value)} onKeyDown={e => e.key === 'Enter' && addComment()} placeholder="แสดงความคิดเห็น..." className="flex-1 border border-gray-200 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  <button onClick={addComment} className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm hover:bg-blue-700">ส่ง</button>
                </div>
              ) : (
                <button onClick={() => supabase.auth.signInWithOAuth({ provider: 'google', options: { redirectTo: \`\${location.origin}/auth/callback\` } })} className="w-full text-center text-gray-500 text-sm py-2 border border-dashed border-gray-200 rounded-xl hover:bg-gray-50">
                  เข้าสู่ระบบเพื่อแสดงความคิดเห็น
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}