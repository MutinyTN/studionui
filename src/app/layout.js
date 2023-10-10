import Mouse from './components/mouse'
import Navbar from './components/navbar'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'núi',
  description: 'The one and only',
}

export default function RootLayout({ children }) {

  return (

    <html lang="en">
      <body className={inter.className}>
        <Mouse>

          <Navbar />


          {children}
        </Mouse>
      </body>
    </html>

  )
}
