"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, {useState} from "react";

export default function AddPost() {

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const router = useRouter();
    const handleTite = (e) => {
        setTitle(e.target.value)
    }

    const handleContent = (e) => {
        setContent(e.target.value)
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        try {
           await fetch('/api/add-post', {method: 'POST', headers: {
                'Content-Type': 'application/json'
            }, body: JSON.stringify({title, content})})
            router.refresh();
        } catch(error) {
            console.log(error);
        }

        setTitle('');
        setContent('');
        
    }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <Link href={'/'} className="p-4 my-4 border border-white rounded-lg">View Feed</Link>
      <h1 className="text-lg">Add Post</h1>
      <div>
        <form onSubmit={handleSubmit}>
            <div className="my-4">
            <label htmlFor="title">Title</label>
            <input
            id="title"
            type="text"
            className='p-4 rounded-lg ms-12'
            value={title}
            onChange={handleTite}
            />
            </div>
            <div className="my-4 flex items-center">
            <label htmlFor="content">Content</label>
            <textarea
            id="content"
            className="ms-4 p-4 rounded-lg"
            value={content}
            onChange={handleContent}
            />
            </div>

            <button onClick={handleSubmit} className="p-4 my-4 border border-white rounded-xl ms-20">Submit</button>
        </form>
      </div>
    </div>
  );
}
