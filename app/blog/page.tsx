import {Navbar} from '../../components/Navbar'
import { getServerSession } from 'next-auth'
import { authOptions } from '../../lib/auth'
import { BlogPostBuilder } from '@/components/BlogPostBuilder'

export default function Blog(){
  const session = getServerSession(authOptions)
  return (
    <main className='flex flex-col items-center justify-around min-h-screen'>
      {session ? <Navbar session={session} /> : <Navbar />}
      <BlogPostBuilder />
    </main>
  )
}