
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Header from './src/components/Header.jsx'
import MainContent from './src/components/MainContent.jsx'
import Footer from './src/components/Footer.jsx'

createRoot(document.getElementById('root')).render(
  <>
  <App />
    <Header></Header>
    <MainContent></MainContent>
    <Footer></Footer>
  </>,
)
