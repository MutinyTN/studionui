import Navbar from './components/navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import { MousePositionProvider } from '@/app/context/mouseContext';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'núi',
  description: 'The one and only',
}

export default function RootLayout({ children }) {

  return (

    <html lang="en">
      <body className={inter.className}>
        <MousePositionProvider>
          <Navbar />
          {children}
        </MousePositionProvider>

      </body>
    </html>

  )
}
