import { useState } from 'react'
import './home.css'

function Home() {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <>
    <div className="container">
      <div className="box1"></div>
      <div className="box2"></div>
      <div className="box3"></div>
    </div>
    </>
  )
}

export default Home
