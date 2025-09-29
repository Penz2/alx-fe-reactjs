// src/pages/RecipeDetail.jsx
import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

export default function RecipeDetail() {
  const { id } = useParams(); // get ID from URL
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadRecipe() {
      try {
        const res = await fetch("/data.json");
        if (!res.ok) throw new Error("Failed to load recipes");
        const data = await res.json();

        // assuming data.json is an array
        const found = data.find((r) => String(r.id) === id);
        setRecipe(found);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    loadRecipe();
  }, [id]);

  if (loading) return <div className="p-6">Loading recipe...</div>;
  if (error) return <div className="p-6 text-red-500">Error: {error}</div>;
  if (!recipe) return <div className="p-6">Recipe not found.</div>;

  return (
    <main className="container mx-auto px-4 sm:px-6 md:px-8 py-8">
      {/* back link */}
      <Link
        to="/"
        className="text-indigo-600 hover:underline mb-4 inline-block"
      >
        ← Back to Recipes
      </Link>

      {/* recipe header */}
      <section className="bg-white rounded-lg shadow-lg overflow-hidden">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-64 object-cover"
        />
        <div className="p-6">
          <h1 className="text-2xl md:text-3xl font-bold mb-4">{recipe.title}</h1>
          <p className="text-gray-700 mb-6">{recipe.summary}</p>
        </div>
      </section>

      {/* ingredients */}
      <section className="mt-8 grid gap-6 md:grid-cols-2">
        <div className="bg-gray-50 rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-3">Ingredients</h2>
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            {recipe.ingredients?.map((ing, idx) => (
              <li key={idx}>{ing}</li>
            ))}
          </ul>
        </div>

        {/* instructions */}
        <div className="bg-gray-50 rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-3">Instructions</h2>
          <ol className="list-decimal list-inside space-y-2 text-gray-700">
            {recipe.instructions?.map((step, idx) => (
              <li key={idx}>{step}</li>
            ))}
          </ol>
        </div>
      </section>
    </main>
  );
}
