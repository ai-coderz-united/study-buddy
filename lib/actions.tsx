'use server'
import prisma from "./prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "./auth";
import { revalidatePath } from "next/cache";

export const createBlogPost = async (formData:FormData) => {
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

export const getBlogPosts = async () => {
  try {
    const blogs = await prisma.blogPost.findMany({});
    return blogs;
  } catch (error) {
    console.log(error);
  }
}