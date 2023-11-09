'use client'
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"
import ReactDOM from "react-dom";
import JSXStyle from "styled-jsx/style"

export const BlogSearch = ({ blogs }:any) => {
  
  return (
    <Command className="w-1/2">
      <CommandInput placeholder="Search for a Blog Post below..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Blog Posts">
          {blogs.map((blog:any) => (
            <CommandItem key={blog.id} value={blog.title}>
              <div className="flex flex-col space-y-4">
                <a className="text-lg font-bold" href={'/blog/' + blog.id}>{blog.title}</a>
              </div>
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </Command>
  )
}