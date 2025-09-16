// src/App.jsx
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import RecipeList from "./components/RecipeList";
import AddRecipeForm from "./components/AddRecipeForm";
import RecipeDetails from "./components/RecipeDetails";
import EditRecipeForm from "./components/EditRecipeForm";
import SearchBar from "./components/SearchBarr";

export default function App() {
  return (
    <BrowserRouter>
      <header style={{ padding: "12px", borderBottom: "1px solid #ccc" }}>
        <Link to="/">Home</Link>
      </header>
      <SearchBar />
      <main style={{ padding: "12px" }}>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <h1>Recipes</h1>
                <AddRecipeForm />
                <RecipeList />
              </>
            }
          />
          <Route path="/recipes/:id" element={<RecipeDetails />} />
          <Route
            path="/recipes/:id/edit"
            element={
              <EditWrapper />
            }
          />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

// small wrapper to read params and render EditRecipeForm with recipeId prop
import { useParams, useNavigate } from "react-router-dom";
function EditWrapper() {
  const { id } = useParams();
  const navigate = useNavigate();
  return (
    <>
      <h2>Edit Recipe</h2>
      <EditRecipeForm recipeId={id} onSaved={() => navigate(`/recipes/${id}`)} />
    </>
  );
}


