import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'   // <-- this links your CSS, not JS logic

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

