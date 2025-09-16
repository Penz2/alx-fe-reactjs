// src/components/SearchBar.jsx
import React from "react";
import { useRecipeStore } from "../store/recipeStore";

export default function SearchBar() {
  const setSearchTerm = useRecipeStore((s) => s.setSearchTerm);
  const filterRecipes = useRecipeStore((s) => s.filterRecipes);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    filterRecipes(); // ✅ ensure dynamic updates
  };

  return (
    <input
      type="text"
      placeholder="Search recipes..."
      onChange={handleChange}
      style={{ marginBottom: "10px", padding: "5px" }}
    />
  );
}
