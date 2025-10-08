import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Profile from "./components/Profile";
import Posts from "./components/Posts";
import PostDetail from "./components/PostDetail";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const isAuthenticated = true; // simulate login

  return (
    <Router>
      <Routes>
        <Route path="/" element={<h1 className="text-center mt-10">🏠 Home Page</h1>} />

        {/* Protected route for profile */}
        <Route
          path="/profile/*"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Profile />
            </ProtectedRoute>
          }
        />

        {/* Dynamic routes for posts */}
        <Route path="/posts" element={<Posts />} />
        <Route path="/posts/:id" element={<PostDetail />} />

        {/* Redirect for 404s */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
