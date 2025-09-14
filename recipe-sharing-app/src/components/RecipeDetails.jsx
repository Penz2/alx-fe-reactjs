// src/components/RecipeDetails.jsx
import { useParams, Link, useNavigate } from "react-router-dom";
import { useRecipeStore } from "./store/recipeStore";
import DeleteRecipeButton from "./DeleteRecipeButton";
import EditRecipeForm from "./EditRecipeForm";

export default function RecipeDetails() {
  const { id } = useParams();
  const parseId = Number(id);
  const recipe = useRecipeStore((s) => s.recipes.find((r) => r.id === parseId));
  const navigate = useNavigate();

  if (!recipe) {
    return (
      <div>
        <p>Recipe not found.</p>
        <button onClick={() => navigate("/")}>Back to list</button>
      </div>
    );
  }

  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>

      {/* Links to edit and delete */}
      <div style={{ marginTop: "12px" }}>
        <Link to={`/recipes/${recipe.id}/edit`}>
          <button>Edit</button>
        </Link>

        <DeleteRecipeButton id={recipe.id} afterDelete={() => navigate("/")} />
      </div>

      {/* Optionally render inline edit form if you prefer */}
      <hr />
      <h4>Edit Inline</h4>
      <EditRecipeForm recipeId={recipe.id} onSaved={() => navigate(`/recipes/${recipe.id}`)} />
    </div>
  );
}
