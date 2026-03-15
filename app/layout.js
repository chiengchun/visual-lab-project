import './globals.css'

export const metadata = {
  title: 'Visual Lab — เทคนิคการตัดต่อวิดีโอ',
  description: 'รวมเทคนิคการตัดต่อวิดีโอสำหรับทีม',
}

export default function RootLayout({ children }) {
  return (
    <html lang="th">
      <body className="bg-gray-50 min-h-screen">
        {children}
      </body>
    </html>
  )
}