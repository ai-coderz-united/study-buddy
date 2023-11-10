'use client'

export const Header = ({ blog }:any) => {
  return (
    <div className="flex w-full justify-between items-center mx-10 mt-4 mb-20">
      <h1 className="text-3xl font-bold">{blog.title}</h1>
      <div className="flex flex-col">
        <p>{blog.title}</p>
        <p>{blog.authorName}</p>
        <p>{blog.createdAt}</p>
      </div>
    </div>
  )
}