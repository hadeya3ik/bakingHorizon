import './faq.css'
import Map from '../../components/map/map'

const Faq = () => {
  return (
    <div className="faq flex_center">
        <h>FAQ's</h>
        <div className='qa-cont'>
          <div className="qa">
            <h3>1. How do I place an order for a cake?</h3>
            <p>You can fill out the order form on our Contact page or send us an email at bakinghorizon@gmail.com.
              If you prefer, you can also reach out to us via direct message on Instagram.
              Please keep in mind that to ensure your order is confirmed, we require a 50% deposit within 24 hours of placing your order.</p>
          </div>
          <div className="qa">
            <h3>2. How long of a notice is required for orders?</h3>
            <p>For timely delivery, we kindly request at least one weeks notice before your desired delivery date.</p>
          </div>
          <div className="qa">
            <h3>3. How much do custom cakes cost?</h3>
            <p>Our cake prices vary depending on the design, size, and intricacy of the cake. For a rough estimate, please visit our menu page, where you can find pricing details along with serving size information. Feel free to contact us for an exact quotation</p>
          </div>
          <div className="qa">
            <h3>4. Do you offer any other desserts?</h3>
            <p>Other than cake, we offer a delightful selection of other desserts, including cake pops, cupcakes, and sugar cookies.</p>
          </div>
          <div className="qa">
            <h3>5. Are your cakes Halal?</h3>
            <p>Yes, our cakes are halal-certified,</p>
          </div>
          <div className="qa">
            <h3>6. What is the difference between fondant and buttercream?</h3>
            <p>Buttercream has a soft and creamy texture, is available in a variety of flavors, but is more susceptible to melting. Therefore, it should be refrigerated at least 2-3 hours before serving. Fondant, on the other hand, has a sweet and gummy texture. It serves as a sugar-based covering for cakes and is commonly used for intricate designs and sculpting.</p>
          </div>
          <div className="qa">
            <h3>7. Do you deliver?</h3>
            <p>Yes, We are pleased to offer delivery services within the Greater Toronto Area. Please note that there may be a delivery charge associated with this service.</p>
          </div>
        </div>
        <Map></Map>
    </div>
  )
}

export default Faq;