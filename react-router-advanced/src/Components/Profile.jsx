import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import ProfileDetails from "./ProfileDetails";
import ProfileSettings from "./ProfileSettings";

export default function Profile() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">User Profile</h1>
      <nav className="space-x-4 mb-4">
        <Link to="details" className="text-blue-600 hover:underline">Details</Link>
        <Link to="settings" className="text-blue-600 hover:underline">Settings</Link>
      </nav>

      {/* Nested Routes */}
      <Routes>
        <Route path="details" element={<ProfileDetails />} />
        <Route path="settings" element={<ProfileSettings />} />
      </Routes>
    </div>
  );
}

