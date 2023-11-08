import Image from 'next/image'
import { LoginButton, LogoutButton } from '@/components/LoginButtons'
import { SessionLogger } from '@/components/SessionLogger'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'

export default async function Home() {
  const session = await getServerSession(authOptions)

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {session !== null ? <LogoutButton /> : <LoginButton />}
      <SessionLogger />
    </main>
  )
}
