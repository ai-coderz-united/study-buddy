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

export const BlogPostBuilder = ({session}:any) => {
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
    console.log(newContent);
  };

  const authorName = session?.user?.name as string;

  return (
    <div id="blog-sheet-trigger">
      <Sheet>
        <SheetTrigger className="px-4 py-2 text-2xl">+</SheetTrigger>
        <SheetContent className="bg-slate-50 overflow-y-scroll">
          <Preview content={content} />
          <SheetHeader>
            <SheetTitle className="mx-auto">Create a new Blog Post with the form below</SheetTitle>
            <SheetDescription>
              <form action={createBlogPost} className="flex flex-col justify-center w-1/2 mx-auto">
                <label htmlFor="title">Title</label>
                <input type="text" name="title" id="title" className="border-[1px] border-black" />
                <input type="hidden" name="content" value={content} />
                <input type="hidden" name="author" value={authorName} />
                <QuillEditor
                  value={content}
                  onChange={handleEditorChange}
                  modules={quillModules}
                  formats={quillFormats}
                  className="w-full max-h-[200px] mt-10 bg-white"
                />
                <button type="submit">Submit</button>
              </form>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  )
}

const Preview = ({content}:any) => {
  return (
    <pre className="m-20 p-10 bg-white" dangerouslySetInnerHTML={{__html: content}} />
  )
}