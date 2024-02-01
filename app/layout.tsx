import type { Metadata } from 'next'
import './globals.css'
import { Comfortaa } from 'next/font/google'

const comfortaa = Comfortaa({ subsets: ['cyrillic', 'latin'] })

export const metadata: Metadata = {
  title: 'TimeLink',
  description: 'Share links to time according to your local time zone',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='ru'>
      <body className={comfortaa.className}>{children}</body>
    </html>
  )
}
