'use client'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { useState } from 'react';
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css'; // Import Quill styles
import { createBlogPost } from '@/lib/actions';

const QuillEditor = dynamic(() => import('react-quill'), { ssr: false });

export const BlogPostBuilder = ({action}:any) => {
  const [content, setContent] = useState('');

  const quillModules = {
    toolbar: [
      [{ header: [1, 2, 3, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ list: 'ordered' }, { list: 'bullet' }],
      ['link', 'image'],
      [{ align: [] }],
      [{ color: [] }],
      ['code-block'],
      ['clean'],
    ],
  };

  const quillFormats = [
    'header',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'link',
    'image',
    'align',
    'color',
    'code-block',
  ];

  const handleEditorChange = (newContent:any) => {
    setContent(newContent);
  };

  return (
    <>
      <Sheet>
        <SheetTrigger>Create a Blog Post</SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Create a new Blog Post with the form below</SheetTitle>
            <SheetDescription>
              <form action={createBlogPost} className="flex flex-col justify-center w-1/2 mx-auto">
                <label htmlFor="title">Title</label>
                <input type="text" name="title" id="title" className="border-[1px] border-black" />
                <input type="hidden" name="content" value={content} />
                <QuillEditor
                  value={content}
                  onChange={handleEditorChange}
                  modules={quillModules}
                  formats={quillFormats}
                  className="w-full h-[70%] mt-10 bg-white"
                />
                <button type="submit">Submit</button>
              </form>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </>
  )
}
