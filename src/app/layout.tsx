import type { Metadata } from 'next'
import { Roboto as Font } from 'next/font/google'
import './globals.css'
import GlobalProvider from '@/providers/global-provider'

const font = Font({ subsets: ['latin'], weight: ['400', '700'] })

export const metadata: Metadata = {
  title: 'Don\'t Blow Money',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <GlobalProvider>
          {children}
        </GlobalProvider>
      </body>
    </html>
  )
}
