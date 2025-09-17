// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SearchBar from "./components/SearchBar";
import UserCard from "./components/UserCard";

export default function App() {
  return (
    <Router>
      <div>
        <h1>GitHub User Search</h1>
        <Routes>
          <Route path="/" element={<SearchBar />} />
          <Route path="/user/:username" element={<UserCard />} />
        </Routes>
      </div>
    </Router>
  );
}
