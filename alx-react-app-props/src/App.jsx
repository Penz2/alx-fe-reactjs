// src/App.jsx
import ProfilePage from "./ProfilePage.jsx";
import UserContext from "./UserContext.js";
import UserProfile from "./components/UserProfile";

function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return (
    <>
    <UserContext.Provider value={userData}>
      <ProfilePage />
    </UserContext.Provider>
    <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
    <UserProfile name="Bob" age="30" bio="Enjoys coding and traveling" />
    <UserProfile name="Charlie" age="28" bio="Passionate about music and art" />
    </>
  );
}

export default App;


