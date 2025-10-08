import React from "react";
import { useParams } from "react-router-dom";

export default function PostDetail() {
  const { id } = useParams();

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-2">Post #{id}</h2>
      <p className="text-gray-600">
        This is a detailed view of post number {id}. You can fetch real content here later.
      </p>
    </div>
  );
}

