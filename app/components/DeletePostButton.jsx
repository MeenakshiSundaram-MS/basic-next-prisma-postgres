"use client";

import { useRouter } from "next/navigation";

export default function DeletePostButton({ postId }) {
  const router = useRouter();

  async function handleClick() {
    try {
      await fetch(`/api/post/${postId}`, {
        method: 'DELETE',
      });
      router.refresh();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <button
      onClick={handleClick}
      className="border-white border my-3 p-4 rounded-xl"
    >
      Delete Post
    </button>
  );
}
