"use client"
import { signIn, signOut } from 'next-auth/react'
import { Button } from '@/components/ui/button'
import { useFormStatus } from 'react-dom'

export const LoginButton = ({session}:any) => {
  const { pending } = useFormStatus()

  return (
    <Button disabled={pending} onClick={() => signIn()} className='loginButton bg-green-400'>
      {pending ? 'Loading...' : 'Sign In'}
    </Button>
  )
}

export const LogoutButton = () => {
  return (
    <Button variant='destructive' onClick={() => signOut()} className='logoutButton'>Sign Out</Button>
  )
}