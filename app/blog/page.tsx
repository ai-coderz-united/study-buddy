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
    <main className='flex flex-col items-center justify-center min-h-screen'>
      {session ? <Navbar session={session} /> : <Navbar />}
      <div className='w-1/2'>
        <h1 className="text-5xl font-bold">Blog Posts</h1>
        <p className="text-2xl pb-10">Search for a blog post, or create a new one</p>
      </div>
      <BlogSearch blogs={blogs} />
      <BlogPostBuilder />
    </main>
  )
}