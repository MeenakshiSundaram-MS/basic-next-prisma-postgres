import Image from 'next/image'
import styles from './page.module.css'
import prisma from '@/lib/prisma'
import { Posts } from './components/Post';
import Link from 'next/link';

async function getPosts() {
  const posts = await prisma.post.findMany({
    where: {published: true},
    include: {
      author: {
        select: {name: true}
      }
    }
  })

  return posts;
}

export default async function Home() {
  const posts = await getPosts();
  return (
    <main className="flex flex-col items-center justify-center my-4 min-h-screen">
      <h1 className="text-3xl font-bold underline">Feed</h1>
      <Link className="border-white border p-4 my-4 rounded-2xl bg-white text-black" href={'/add-post'}>Add Post</Link>
      {posts.map((post) => {
        return <Posts key={post.id} author={post.author.name} id={post.id} title={post.title} content={post.content}/>
      })}
    </main>
  )
}
