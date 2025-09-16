// src/components/DeleteRecipeButton.jsx
import { useNavigate } from "react-router-dom";
import { useRecipeStore } from "../store/recipeStore";

export default function DeleteRecipeButton({ id }) {
  const deleteRecipe = useRecipeStore((s) => s.deleteRecipe);
  const navigate = useNavigate(); // ✅ required

  const handleDelete = () => {
    deleteRecipe(id);
    navigate("/"); // ✅ redirect after delete
  };

  return <button onClick={handleDelete}>Delete</button>;
}

