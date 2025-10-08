import React from "react";
import { useParams } from "react-router-dom";

export default function PostDetail() {
  const { id } = useParams();
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">Post #{id}</h2>
      <p className="mt-2 text-gray-600">
        This is the content of post number {id}. In a real app, you'd fetch this by ID from an API.
      </p>
    </div>
  );
}
