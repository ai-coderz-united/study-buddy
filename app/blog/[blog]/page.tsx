'use server'
import prisma from "@/lib/prisma"

export default async function Blog({ params } : { params: { blog: string }}) {
  const blog = await prisma.blogPost.findUnique({
    where: {
      id: params.blog
    }
  })

  return (
    <div className="flex flex-col items-center justify-around min-h-screen">
      <h1 className="text-4xl font-bold">{blog?.title}</h1>
      <div dangerouslySetInnerHTML={{__html: blog?.content as string}} />
    </div>
  )
}