import { Inter } from 'next/font/google'
import './globals.css'
<link rel="icon" href="/favicon.ico" sizes="any" />


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Maciej Sitarski |',
  description: 'Maciej Sitarski Portfolio Website',
  icons:{
    icon:['/favicon.ico'],
    apple:['/apple-touch-icon.png'],
    shortcut:['/apple-touch-icon.png']
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
