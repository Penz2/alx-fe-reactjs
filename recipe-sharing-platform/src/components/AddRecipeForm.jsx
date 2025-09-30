import React, { useState } from "react";

const AddRecipeForm = () => {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [errors, setErrors] = useState({});

  // ✅ New validate function
  const validate = () => {
    let validationErrors = {};

    if (!title.trim()) validationErrors.title = "Title is required";

    if (!ingredients.trim()) {
      validationErrors.ingredients = "Ingredients are required";
    } else if (ingredients.split("\n").length < 2) {
      validationErrors.ingredients = "Include at least 2 ingredients";
    }

    if (!steps.trim()) validationErrors.steps = "Steps are required";

    return validationErrors;
  };

  // ✅ Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate(); // use validate()
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      const newRecipe = { title, ingredients, steps };
      console.log("Recipe submitted:", newRecipe);

      // Clear form
      setTitle("");
      setIngredients("");
      setSteps("");
      alert("Recipe submitted successfully!");
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4 text-center">Add a New Recipe</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Title */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Recipe Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-indigo-300"
            placeholder="Enter recipe title"
          />
          {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
        </div>

        {/* Ingredients */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Ingredients
          </label>
          <textarea
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-indigo-300"
            placeholder="Enter each ingredient on a new line"
            rows="4"
          ></textarea>
          {errors.ingredients && (
            <p className="text-red-500 text-sm">{errors.ingredients}</p>
          )}
        </div>

        {/* Steps */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Preparation Steps
          </label>
          <textarea
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-indigo-300"
            placeholder="Enter preparation steps"
            rows="5"
          ></textarea>
          {errors.steps && <p className="text-red-500 text-sm">{errors.steps}</p>}
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition duration-200"
        >
          Submit Recipe
        </button>
      </form>
    </div>
  );
};

export default AddRecipeForm;

