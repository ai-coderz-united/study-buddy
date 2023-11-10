'use client'
import { Button } from "@/components/ui/button"
import { deleteBlogPost } from "@/lib/actions"

export const DeleteButton = ({blogId}:any) => {
  return (
    <form action={deleteBlogPost}>
      <input type="hidden" name="blogId" value={blogId} />
      <Button type='submit' className="bg-red-500 hover:bg-red-600 text-white">Delete</Button>
    </form>
  )
}