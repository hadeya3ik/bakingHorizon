import Home from './pages/home/home'
import Gallery from './pages/gallery'
import Menu from './pages/menu'
import Faq from './pages/faq'
import Contact from './pages/contact'
import NavBar from './components/navbar/navBar'
import Footer from './components/footer/footer'
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
        <Footer />
      </>
  )
}

export default App
