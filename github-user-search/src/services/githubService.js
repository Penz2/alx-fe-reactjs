// src/services/githubService.js
import axios from "axios";


export async function fetchUserData(username) {
  const response = await axios.get(`https://api.github.com/users/${username}`);
  return response.data;
}

/**
 * Advanced user search with query parameters
 * @param {Object} params { username, location, minRepos }
 */
export async function searchUsers({ username, location, minRepos }) {
  let query = "";

  if (username) query += `${username} `;
  if (location) query += `location:${location} `;
  if (minRepos) query += `repos:>=${minRepos}`;

  const response = await axios.get(
    `https://api.github.com/search/users?q=${encodeURIComponent(query)}`
  );

  return response.data.items; // API returns { items: [] }
}
