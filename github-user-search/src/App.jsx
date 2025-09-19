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
      <h1 className="text-4xl font-bold text-green-600">
           Tailwind is working!
      </h1>
      <Routes>
        <Route path="/user/:username" element={<UserCard />} />
      </Routes>
    </Router>
  );
}
