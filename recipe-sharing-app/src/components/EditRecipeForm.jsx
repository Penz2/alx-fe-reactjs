// src/components/EditRecipeForm.jsx
import { useState, useEffect } from "react";
import { useRecipeStore } from "./recipeStore";

export default function EditRecipeForm({ recipeId, onSaved }) {
  const recipe = useRecipeStore((s) =>
    s.recipes.find((r) => r.id === recipeId)
  );
  const updateRecipe = useRecipeStore((s) => s.updateRecipe);

  const [title, setTitle] = useState(recipe?.title ?? "");
  const [description, setDescription] = useState(recipe?.description ?? "");

  useEffect(() => {
    if (recipe) {
      setTitle(recipe.title);
      setDescription(recipe.description);
    }
  }, [recipe]);

  if (!recipe) return <p>Recipe not found</p>;

  const handleSubmit = (event) => {
    event.preventDefault(); // ✅ important!
    updateRecipe(recipeId, { title, description });
    if (onSaved) onSaved();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
      />
      <button type="submit">Save</button>
    </form>
  );
}

