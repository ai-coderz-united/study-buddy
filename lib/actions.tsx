'use server'
import prisma from "./prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "./auth";
import { revalidatePath } from "next/cache";
import { getDateTime } from "./getDateTime";


export const createBlogPost = async (formData:FormData) => {
  const session = await getServerSession(authOptions);
  try {
    const user = await prisma.user.findUnique({
      where: { email: session?.user?.email as string },
    });
    await prisma.blogPost.create({
      data: {
        createdAt: getDateTime(),
        updatedAt: getDateTime(),
        title: formData.get('title') as string,
        content: formData.get('content') as string,
        authorName: formData.get('author') as string,
      },
    });
    revalidatePath('/blog');
  } catch (error) {
    console.log(error);
  }
}

export const getBlogPosts = async () => {
  try {
    const blogs = await prisma.blogPost.findMany({});
    return blogs;
  } catch (error) {
    console.log(error);
  }
}

export const deleteBlogPost = async (formData:FormData) => {
  try {
    await prisma.blogPost.delete({
      where: {
        id: formData.get('blogId') as string,
      }
    })
    revalidatePath('/blog')
  } catch (error) {
    console.log(error)
  }
}