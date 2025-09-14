// src/store/recipeStore.js
import { create } from "zustand";

export const useRecipeStore = create((set) => ({
  recipes: [
    // optional initial sample
    { id: 1, title: "Sample Pancakes", description: "Fluffy pancakes recipe." }
  ],

  // Add a recipe. If item has no id, generate one.
  addRecipe: (newRecipe) =>
    set((state) => {
      const item = { ...newRecipe, id: newRecipe.id ?? Date.now() };
      return { recipes: [...state.recipes, item] };
    }),

  // Delete recipe by id
  deleteRecipe: (id) =>
    set((state) => ({ recipes: state.recipes.filter((r) => r.id !== id) })),

  // Update an existing recipe. Accepts id and updates object OR an updated recipe object.
  updateRecipe: (id, updates) =>
    set((state) => ({
      recipes: state.recipes.map((r) =>
        r.id === id ? { ...r, ...(typeof updates === "object" ? updates : {}) } : r
      ),
    })),

  // Optional helper to replace all recipes
  setRecipes: (recipes) => set({ recipes }),
}));
