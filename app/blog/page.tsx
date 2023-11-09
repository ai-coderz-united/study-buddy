'use server'
import {Navbar} from '../../components/Navbar'
import { getServerSession } from 'next-auth'
import { authOptions } from '../../lib/auth'
import { BlogPostBuilder } from '@/components/BlogPostBuilder'
import { BlogSearch } from '@/components/BlogSearch'
import { getBlogPosts } from '@/lib/actions'

export default async function Blog(){
  const session = await getServerSession(authOptions)
  const blogs = await getBlogPosts()

  return (
    <main className='flex flex-col items-center justify-around min-h-screen'>
      {session ? <Navbar session={session} /> : <Navbar />}
      <BlogSearch blogs={blogs} />
      <BlogPostBuilder />
    </main>
  )
}