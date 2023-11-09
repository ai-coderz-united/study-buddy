'use server'
import { Navbar } from "@/components/Navbar"
import prisma from "@/lib/prisma"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"

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
      <h1 className="text-4xl font-bold">{blog?.title}</h1>
      <pre dangerouslySetInnerHTML={{__html: blog?.content as string}}></pre>
    </div>
  )
}