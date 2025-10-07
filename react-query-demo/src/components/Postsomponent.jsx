import React from "react";
import { useQuery } from "@tanstack/react-query";

const fetchPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

//  Component that uses useQuery
function PostsComponent() {
  // useQuery automatically fetches, caches, and tracks loading/error states
  const {
    data: posts,
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts, 
    staleTime: 1000 * 60, 
  });

  if (isLoading) return <p className="text-gray-500">Loading posts...</p>;

  if (isError)
    return (
      <p className="text-red-500">
        ❌ Error: {error.message || "Something went wrong"}
      </p>
    );

  return (
    <div className="w-full max-w-2xl">
      <button
        onClick={() => refetch()}
        className="bg-blue-600 text-white px-4 py-2 rounded mb-6 hover:bg-blue-700 transition"
      >
      </button>

      <ul className="space-y-4">
        {posts.slice(0, 10).map((post) => (
          <li
            key={post.id}
            className="bg-white p-4 rounded shadow hover:shadow-md transition"
          >
            <h2 className="text-lg font-semibold text-gray-800">
              {post.title}
            </h2>
            <p className="text-gray-600">{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostsComponent;
