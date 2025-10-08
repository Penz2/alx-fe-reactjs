import React from "react";
import { Link } from "react-router-dom";

const posts = [
  { id: 1, title: "Learning React Router" },
  { id: 2, title: "Dynamic Routing in React" },
  { id: 3, title: "Protected Routes Made Simple" },
];

export default function Posts() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Blog Posts</h2>
      <ul className="space-y-2">
        {posts.map((post) => (
          <li key={post.id}>
            <Link
              to={`/posts/${post.id}`}
              className="text-indigo-600 hover:underline"
            >
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

