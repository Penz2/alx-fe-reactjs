import WelcomeMessage from './src/components/WelcomeMessage.jsx'
import UserProfile from './src/components/UserProfile.jsx'
 import Header from './src/components/Header.jsx'
import MainContent from './src/components/MainContent.jsx'
import Footer from './src/components/Footer.jsx'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
 

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <div>
      <WelcomeMessage />
    </div>
       <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
      <div>
      <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
      <UserProfile name="Bob" age="30" bio="Enjoys coding and traveling" />
      <UserProfile name="Charlie" age="28" bio="Passionate about music and art" />
    </div>
    </>
  )
}

export default App
