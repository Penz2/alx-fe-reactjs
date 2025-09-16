// src/components/RecipeList.jsx
import React from "react";
import { Link } from "react-router-dom";
import { useRecipeStore } from "../store/recipeStore";

export default function RecipeList() {
  const recipes = useRecipeStore((s) =>
    s.filteredRecipes.length > 0 ? s.filteredRecipes : s.recipes
  );

  if (recipes.length === 0) {
    return <p>No recipes found.</p>;
  }

  return (
    <ul>
      {recipes.map((recipe) => (
        <li key={recipe.id}>
          <Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link>
        </li>
      ))}
    </ul>
  );
}
