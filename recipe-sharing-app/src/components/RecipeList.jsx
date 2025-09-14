 // RecipeList component
  import { useRecipeStore } from "./store/recipeStore";
  import { Link } from "react-router-dom";

export default function RecipeList() {
  const recipes = useRecipeStore((s) => s.recipes);

  if (!recipes.length) return <p>No recipes yet. Add one!</p>;

  return (
    <div>
      {recipes.map((r) => (
        <div key={r.id} style={{ borderBottom: "1px solid #ddd", padding: "8px 0" }}>
          <h3 style={{ margin: 0 }}>
            <Link to={`/recipes/${r.id}`}>{r.title}</Link>
          </h3>
          <p style={{ margin: "6px 0" }}>{r.description}</p>
        </div>
      ))}
    </div>
  );
}
