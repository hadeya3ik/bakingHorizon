import './menu.css'

const Menu = () => {
  return (
      <div id="menu" className="col flex_center ">
        <div className="menu_hero flex_center col">
          <h className="page_heading">Menu</h>
          <p className="heading_text">All of our cakes contain wheat, dairy, and eggs. Please note that all are made in an environment where nuts are present. For inquiries about custom flavours, please contact us for availability and price. </p>
        </div>
        <h2 className="header_line">Cake Flavors</h2>
        <hr className="line" />
        <div id="flavours" className="flex_center col">
            <h3>Vanilla</h3>
            <p className='menu_text'>A classic comforting favorite with a timeless, comforting taste.</p>
            <h3>Chocolate</h3>
            <p className='menu_text'>Indulgent deep cocoa cake. Rich and decadent, a chocolate lover's dream.</p>
            <h3>Red Velvet</h3>
            <p className='menu_text'>Velvety, vibrant, with a subtle cocoa taste.</p>
            <h3>Lemon</h3>
            <p className='menu_text'>Bright and zesty, a burst of citrusy delight.</p>
            <h3>Marble</h3>
            <p className='menu_text'>Swirls of vanilla and chocolate, the perfect blend in every bite.</p>
            <h3>Confetti</h3>
            <p className='menu_text'>Colorful fun and festive, a celebration in every bite.</p>
            <h3>Mocha</h3>
            <p className='menu_text'>A coffee lovers delight, a balance of bitter and sweet for a sophisticated palate.</p>
        </div>
        <h2 className="header_line">Buttercream Flavors</h2>
        <hr className="line" />
        <div id="flavours" className="flex_center col">  
          <h3>Salted Caramel</h3>
          <p className='menu_text'>A blissful blend of sweet caramel with a hint of sea salt.</p>
          <h3>Vanilla Swiss Meringue</h3>
          <p className='menu_text'>Silky and smooth, infused with a delicate vanilla essence.</p>
          <h3>Chocolate Fudge</h3>
          <p className='menu_text'>Rich and velvety, a chocolate lover's dream.</p>
          <h3>Cream Cheese</h3>
          <p className='menu_text'>Creamy and tangy, the perfect complement to any cake.</p>
          <h3>Hazelnut</h3>
          <p className='menu_text'>Nutty, creamy, and decadent, boasting the exquisite flavor of roasted hazelnuts.</p>
          <h3>Cookies and Cream</h3>
          <p className='menu_text'>A delightful blend of cookies and creamy goodness.</p>
        </div>
        <div className="menu_container">
          <h2 className="header__1">Cake Sizing Guide</h2>
          <div id="sizing_guide" className='flex_center col'>
            <p id="sizing_info">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <div id="sizes">
              <p>4" starts at $99 (4-6 servings)</p>
              <p>5" starts at $104 (6-8 servings)</p>
              <p>6" starts at $108 (8-10 servings)</p>
              <p>7" starts at $126 (11-15 servings)</p>
              <p>8” starts at $144 (16-20 servings)</p>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Menu;