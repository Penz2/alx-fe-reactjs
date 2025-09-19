import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchUserData } from "../services/githubService";

export default function UserCard() {
  const { username } = useParams();
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchUserData(username)
      .then((data) => setUser(data))
      .catch((err) => setError(err.message));
  }, [username]);

  if (error) return <p>{error}</p>;
  if (!user) return <p>Loading...</p>;

  return (
    <div>
      <img src={user.avatar_url} alt={user.login} width={100} />
      <h2>{user.name || user.login}</h2>
      <p>{user.bio}</p>
      <p>Followers: {user.followers} | Following: {user.following}</p>
      <a href={user.html_url} target="_blank" rel="noreferrer">
        View Profile
      </a>
    </div>
  );
}