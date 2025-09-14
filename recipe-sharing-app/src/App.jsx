import { useState } from 'react'
import AddRecipeForm from './components/AddRecipeForm'
import Store from './components/recipeStore'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
     <AddRecipeForm /> 
      <Store />
       
    </>
  )
}

export default App
