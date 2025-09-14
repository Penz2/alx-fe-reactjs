// src/components/EditRecipeForm.jsx
import { useState, useEffect } from "react";
import { useRecipeStore } from "./store/recipeStore";

export default function EditRecipeForm({ recipeId, onSaved }) {
  const id = Number(recipeId);
  const recipe = useRecipeStore((s) => s.recipes.find((r) => r.id === id));
  const updateRecipe = useRecipeStore((s) => s.updateRecipe);

  const [title, setTitle] = useState(recipe?.title ?? "");
  const [description, setDescription] = useState(recipe?.description ?? "");

  // if recipe prop changes (route change), sync state
  useEffect(() => {
    setTitle(recipe?.title ?? "");
    setDescription(recipe?.description ?? "");
  }, [recipe]);

  if (!recipe) return <p>Recipe not found.</p>;

  function handleSubmit(e) {
    e.preventDefault();
    updateRecipe(id, { title: title.trim(), description: description.trim() });
    if (onSaved) onSaved();
  }

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: "8px" }}>
      <input value={title} onChange={(e) => setTitle(e.target.value)} />
      <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
      <button type="submit">Save</button>
    </form>
  );
}
