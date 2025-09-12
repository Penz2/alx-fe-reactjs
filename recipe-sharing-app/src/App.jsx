import { useState } from 'react'
import AddRecipeForm from './components/AddRecipeForm'
import RecipeList from './components/Recipelist'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <RecipeList />
     <AddRecipeForm />  
    </>
  )
}

export default App
