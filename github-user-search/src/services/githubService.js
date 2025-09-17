export async function fetchUser(username) {
  const response = await fetch(
    `${import.meta.env.VITE_APP_GITHUB_API_URL}/users/${username}`,
    {
      headers: {
        Authorization: `token ${import.meta.env.VITE_APP_GITHUB_API_KEY}`,
      },
    }
  );

  if (!response.ok) {
    throw new Error("User not found");
  }

  return response.json();
}