import { useState } from 'react'
import AddRecipeForm from './components/AddRecipeForm'
import RecipeList from './components/Recipelist'
import { useRecipeStore } from './components/recipeStore'
import Store from './components/Store'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <RecipeList />
     <AddRecipeForm /> 
      <Store />
       
    </>
  )
}

export default App
