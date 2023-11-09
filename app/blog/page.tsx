'use server'
import {Navbar} from '../../components/Navbar'
import { getServerSession } from 'next-auth'
import { authOptions } from '../../lib/auth'
import { BlogPostBuilder } from '@/components/BlogPostBuilder'
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export default async function Blog(){
  const session = await getServerSession(authOptions)

  const createBlogPost = async ({ formData }:any) => {
    const session = await getServerSession({ ...authOptions });
    try {
      const user = await prisma.user.findUnique({
        where: { email: session?.user?.email as string },
      });
      await prisma.blogPost.create({
        data: {
          title: formData.get('title') as string,
          content: formData.get('content') as string,
        },
      });
      revalidatePath('/blog');
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <main className='flex flex-col items-center justify-around min-h-screen'>
      {session ? <Navbar session={session} /> : <Navbar />}
      <BlogPostBuilder />
    </main>
  )
}