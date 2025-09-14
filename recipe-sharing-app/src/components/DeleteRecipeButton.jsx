// src/components/DeleteRecipeButton.jsx
import { useRecipeStore } from "./store/recipeStore";

export default function DeleteRecipeButton({ id, afterDelete }) {
  const deleteRecipe = useRecipeStore((s) => s.deleteRecipe);

  function handleDelete() {
    if (confirm("Delete this recipe?")) {
      deleteRecipe(id);
      if (afterDelete) afterDelete();
    }
  }

  return (
    <button onClick={handleDelete} style={{ marginLeft: "8px", color: "red" }}>
      Delete
    </button>
  );
}
