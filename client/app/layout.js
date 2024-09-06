import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Task Manager',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`h-screen flex justify-center items-center ${inter.className}`}>
        <div className="container h-5/6 mx-auto bg-gray-100 overflow-auto rounded-xl">
          {children}
        </div>
      </body>
    </html>
  )
}
