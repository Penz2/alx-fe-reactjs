// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Search from "./components/Search";
import UserCard from "./components/UserCard";

export default function App() {
  return (
    <Router>
      <div>
        <h1>GitHub User Search</h1>
          <Search />
      </div>
    </Router>
  );
}
