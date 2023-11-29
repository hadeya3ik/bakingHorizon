import './menu.css'

const Menu = () => {
  return (
    <>
      <div className="menu">
        <h>Menu</h>
        <h2>- Cake Flavors -</h2>
        <div className="flavors-section">
          <div className="flavor">
            <h3>Vanilla</h3>
            <p>A classic comforting favorite with a timeless, comforting taste.</p>
          </div>
          <div className="flavor">
            <h3>Chocolate</h3>
            <p>Indulgent deep cocoa cake. Rich and decadent, a chocolate lover's dream.</p>
          </div>
          <div className="flavor">
            <h3>Red Velvet</h3>
            <p>Velvety, vibrant, with a subtle cocoa taste.</p>
          </div>
          <div className="flavor">
            <h3>Lemon</h3>
            <p>Bright and zesty, a burst of citrusy delight.</p>
          </div>
          <div className="flavor">
            <h3>Marble</h3>
            <p>Swirls of vanilla and chocolate, the perfect blend in every bite.</p>
          </div>
          <div className="flavor">
            <h3>Confetti</h3>
            <p>Colorful fun and festive, a celebration in every bite.</p>
          </div>
          <div className="flavor">
            <h3>Mocha</h3>
            <p>A coffee lovers delight, a balance of bitter and sweet for a sophisticated palate.</p>
          </div>
        </div>
        <h2>- Buttercream Flavors -</h2>
        <div className="flavors-section">  
          <div className="flavor">
            <h3>Salted Caramel</h3>
            <p>A blissful blend of sweet caramel with a hint of sea salt.</p>
          </div>
          <div className="flavor">
            <h3>Vanilla Swiss Meringue</h3>
            <p>Silky and smooth, infused with a delicate vanilla essence.</p>
          </div>
          <div className="flavor">
            <h3>Chocolate Fudge</h3>
            <p>Rich and velvety, a chocolate lover's dream.</p>
          </div>
          <div className="flavor">
            <h3>Cream Cheese</h3>
            <p>Creamy and tangy, the perfect complement to any cake.</p>
          </div>
          <div className="flavor">
            <h3>Hazelnut</h3>
            <p>Nutty, creamy, and decadent, boasting the exquisite flavor of roasted hazelnuts.</p>
          </div>
          <div className="flavor">
            <h3>Cookies and Cream</h3>
            <p>A delightful blend of cookies and creamy goodness.</p>
          </div>
        </div>
        <h2>- Cake Sizing Guide -</h2>
        <div className='sizing'>
          <p>4" starts at $99 (4-6 servings)</p>
          <p>5" starts at $104 (6-8 servings)</p>
          <p>6" starts at $108 (8-10 servings)</p>
          <p>7" starts at $126 (11-15 servings)</p>
          <p>8” starts at $144 (16-20 servings)</p>
        </div>
      </div>
    </>
  )
}

export default Menu;