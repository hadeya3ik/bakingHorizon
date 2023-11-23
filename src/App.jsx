import Home from './pages/home'
import Gallery from './pages/gallery'
import Menu from './pages/menu'
import Faq from './pages/faq'
import Contact from './pages/contact'
import NavBar from './components/navbar'
import { Routes, Route, BrowserRouter } from 'react-router-dom'

function App() {
  return (
      <>
        <NavBar />
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </>
  )
}

export default App
