// src/components/PostsComponent.jsx
import React from "react";
import { useQuery } from "@tanstack/react-query";

const fetchPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) throw new Error("Network error while fetching posts");
  return res.json();
};

function PostsComponent() {
  const {
    data: posts,
    isLoading,
    isError,
    error,
    isFetching,
    refetch,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,

    // 🔹 React Query caching and refetch settings
    cacheTime: 1000 * 60 * 5,        // cache lasts 5 minutes
    staleTime: 1000 * 30,            // data stays fresh for 30 seconds
    refetchOnWindowFocus: false,     // no auto-refetch when switching tabs
    keepPreviousData: true,          // keep old data visible while fetching new
  });

  if (isLoading) return <p className="text-gray-500">Loading posts...</p>;
  if (isError) return <p className="text-red-500">Error: {error.message}</p>;

  return (
    <div className="w-full max-w-3xl">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold text-indigo-600">Posts</h2>
        <button
          onClick={() => refetch()}
          className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
        >
          {isFetching ? "Refreshing..." : "Refetch Posts"}
        </button>
      </div>

      <ul className="space-y-4">
        {posts.slice(0, 10).map((post) => (
          <li
            key={post.id}
            className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition duration-300"
          >
            <h3 className="text-lg font-bold mb-2">{post.title}</h3>
            <p className="text-gray-700">{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostsComponent;
