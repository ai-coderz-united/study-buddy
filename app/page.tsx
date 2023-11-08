import Image from 'next/image'
import { LoginButton } from '@/components/LoginButtons'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <LoginButton />
    </main>
  )
}
