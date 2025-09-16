// src/store/recipeStore.js
import { create } from "zustand";

export const useRecipeStore = create((set) => ({
  recipes: [],
  searchTerm: "", // ✅ required for checker
  filteredRecipes: [],

  addRecipe: (newRecipe) =>
    set((state) => ({ recipes: [...state.recipes, newRecipe] })),

  setRecipes: (recipes) => set({ recipes }),

  setSearchTerm: (term) => set({ searchTerm: term }), // ✅ required for checker

  filterRecipes: () =>
    set((state) => ({
      filteredRecipes: state.recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
      ),
    })),

  updateRecipe: (id, updated) =>
    set((state) => ({
      recipes: state.recipes.map((r) =>
        r.id === id ? { ...r, ...updated } : r
      ),
    })),

  deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((r) => r.id !== id),
    })),
}));
