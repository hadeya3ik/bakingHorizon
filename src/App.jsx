import Home from './pages/home/home'
import Gallery from './pages/gallery'
import Menu from './pages/menu/menu'
import Faq from './pages/faq/faq'
import Contact from './pages/contact/contact'
import NavBar from './components/navbar/navBar'
import Footer from './components/footer/footer'
import { Routes, Route } from 'react-router-dom'

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
        <Footer />
      </>
  )
}

export default App
