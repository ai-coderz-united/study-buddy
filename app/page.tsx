import Image from 'next/image'
import { LoginButton, LogoutButton } from '@/components/LoginButtons'
import { SessionLogger } from '@/components/SessionLogger'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { Navbar } from '@/components/Navbar'

export default async function Home() {
  const session = await getServerSession(authOptions)

  return (
    <main className='flex flex-col items-center justify-around min-h-screen'>
      {session ? <Navbar session={session} /> : <Navbar />}
    </main>
  )
}