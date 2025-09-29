import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import data from "../data.json";

function HomePage() {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        fetch("/data.json")
            .then((response) => response.json())
            .then((data) => setRecipes(data))
            .catch((error) => console.error("Error fetching recipes:", error));
    }, []);

    return (
        <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8">Recipe Collection</h1>

      {/* Responsive Grid */}
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {recipes.map((recipe) => (
          <link
            key={recipe.id}
            to={`/recipe/${recipe.id}`}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transform hover:scale-105 transition duration-300"
          >
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{recipe.title}</h2>
              <p className="text-gray-600">{recipe.summary}</p>
            </div>
          </link>
        ))}
      </div>
    </div>
  );
}

export default HomePage;