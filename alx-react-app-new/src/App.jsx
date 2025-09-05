import WelcomeMessage from './components/WelcomeMessage.jsx'
import UserProfile from './components/UserProfile.jsx'
 import Header from './components/Header.jsx'
import MainContent from './components/MainContent.jsx'
import Footer from './components/Footer.jsx'
import { useState } from 'react'
 
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <WelcomeMessage />
      <Header />
      <MainContent />
      <Footer />
      <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
      <UserProfile name="Bob" age="30" bio="Enjoys coding and traveling" />
      <UserProfile name="Charlie" age="28" bio="Passionate about music and art" />
    </>
  )
}

export default App
