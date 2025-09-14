// AddRecipeForm component
  import { useState } from 'react';
  import { useRecipeStore } from "./Store/recipeStore";

  export default function AddRecipeForm() {
  const addRecipe = useRecipeStore((s) => s.addRecipe);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!title.trim()) return;
    addRecipe({ title: title.trim(), description: description.trim() });
    setTitle("");
    setDescription("");
  }

  return (
    <form onSubmit={handleSubmit} style={{ margin: "1rem 0" }}>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Recipe title"
        style={{ display: "block", width: "100%", marginBottom: "8px" }}
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Short description"
        style={{ display: "block", width: "100%", marginBottom: "8px" }}
      />
      <button type="submit">Add Recipe</button>
    </form>
  );
}

