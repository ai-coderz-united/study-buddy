'use server'
import { Navbar } from "@/components/Navbar"
import prisma from "@/lib/prisma"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { Header } from "@/components/blog/BlogPostHeader"
import { DeleteButton } from "@/components/DeleteButton"
import { revalidatePath } from "next/cache"

export default async function Blog({ params } : { params: { blog: string }}) {
  const session = await getServerSession(authOptions)

  const blog = await prisma.blogPost.findUnique({
    where: {
      id: params.blog
    }
  })

  return (
    <div className="flex flex-col items-center justify-around min-h-screen">
      <Navbar session={session} />
      <div className="w-1/2 bg-white py-10 px-14">
        <Header blog={blog} />
        <pre dangerouslySetInnerHTML={{__html: blog?.content as string}}></pre>
      </div>
      {session && session?.user?.name === blog?.authorName ? <DeleteButton blogId={params.blog} /> : <></>}
    </div>
  )
}