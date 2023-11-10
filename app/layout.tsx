import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/Navbar'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { SessionLogger } from '@/components/SessionLogger'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Study Buddy',
  description: 'An app to help you study',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <SessionLogger />
      </body>
    </html>
  )
}
//commit