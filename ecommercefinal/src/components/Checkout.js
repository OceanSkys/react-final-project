import { useState, useEffect, useContext } from "react";
import { useNavigate } from 'react-router-dom'
import { CartContext } from '../contexts/CartContext';

export default function Checkout() {
    const { cart, setCart } = useContext(CartContext);
    let navigate = useNavigate();
    console.log(cart)

    var deduped = Array.from(new Set(cart));
    console.log('this is cart', cart)
    console.log('this is deduped', deduped)

    let itemQuant = 0;
    console.log('this is itemquant', itemQuant)

    let subTotal = 0;
    let totalQuantity = 0;
    let names = '';
    let itemNames = '';
    let priced = 0;

    for (let i = 0; i < cart.length; i++) {
      subTotal += cart[i].price*cart[i].quantity;
      totalQuantity += cart[i].quantity
      names += cart[i].title
    }
    for (let i = 0; i < deduped.length; i++) {
      itemQuant += deduped[i].quantity
      itemNames += deduped[i].title
      priced += deduped[i].price
    }

  return (
    <div className="Product-Container">
      <div className="Product-Container2">
        <div style={{border: 'solid', backgroundColor:'aliceblue', display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', width: '100%', height: 'auto'}}>
          <button style={{height: '30px'}} onClick={() => navigate(`/products`)}>Go to Products</button>
          <h1 className="">My Cart</h1>
        </div>
        <div className="Product-Row2" style={{display: 'flex', flexDirection:'row'}}>
          <div className='Product-Selection2'>
            {deduped.map(( item, index) => (
            <div key={index} className="Product">
              <div className='Product-Image-Div'>
                <img src={item.image} className="Image"  width='300' height='320' />
              </div>
              <hr style={{height: '3px', color:'black', backgroundColor:'black'}}/>
              <div className='Product-Desc-Title'>
                <h3>{item.title}:</h3>
                <h3>Quantity: {item.title === item.title && item.quantity}</h3>
                <h3>Individual Price: ${(item.price).toFixed(2)}</h3>
              </div>
            </div>
            ))}
          </div>
          <div className="Product-Selection4">
            <div style={{border: 'solid', backgroundColor: 'white', width: '400px', height: '100px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginBottom: '20px', boxShadow: '2px 2px'}}>
              <h2>Total Items: {totalQuantity}</h2>
              <h2>Total Amount: ${subTotal.toFixed(2)}</h2>
            </div>
            <section className="checkout-form">
              <form className='checkout-form' action="#!" method="get">
                <h2>Contact information</h2>
                <div className="form-control">
                  <label for="checkout-email">E-mail</label>
                  <div>
                    <span className="fa fa-envelope"></span>
                    <input type="email" id="checkout-email" name="checkout-email" placeholder="Enter your email..."/>
                  </div>
                </div>
                <div className="form-control">
                  <label for="checkout-phone">Phone</label>
                  <div>
                    <span className="fa fa-phone"></span>
                    <input type="tel" name="checkout-phone" id="checkout-phone" placeholder="Enter you phone..."/>
                  </div>
                </div>
                <br/>
                <h2>Shipping address</h2>
                <div className="form-control">
                  <label for="checkout-name">Full name</label>
                  <div>
                    <span className="fa fa-user-circle"></span>
                    <input type="text" id="checkout-name" name="checkout-name" placeholder="Enter you name..."/>
                  </div>
                </div>
                <div className="form-control">
                  <label for="checkout-address">Address</label>
                  <div>
                    <span className="fa fa-home"></span>
                    <input type="text" name="checkout-address" id="checkout-address" placeholder="Your address..."/>
                  </div>
                </div>
                <div className="form-control">
                  <label for="checkout-city">City</label>
                  <div>
                    <span className="fa fa-building"></span>
                    <input type="text" name="checkout-city" id="checkout-city" placeholder="Your city..."/>
                  </div>
                </div>
                <div className="form-group">
                  <div className="form-control">
                    <label for="checkout-country">Country</label>
                    <div>
                      <span className="fa fa-globe"></span>
                      <input type="text" name="checkout-country" id="checkout-country" placeholder="Your country..." list="country-list"/>
                      <datalist id="country-list">
                        <option value="India"></option>
                        <option value="USA"></option>
                        <option value="Russia"></option>
                        <option value="Japan"></option>
                        <option value="Egypt"></option>
                      </datalist>
                    </div>
                  </div>
                  <div className="form-control">
                    <label for="checkout-postal">Postal code</label>
                    <div>
                      <span className="fa fa-archive"></span>
                      <input type="numeric" name="checkout-postal" id="checkout-postal" placeholder="Your postal code..."/>
                    </div>
                  </div>
                </div>
                {/* <div className="form-control checkbox-control">
                  <input type="checkbox" name="checkout-checkbox" id="checkout-checkbox"/>
                  <h2 for="checkout-checkbox">Save this information for next time</h2>
                </div> */}
                <div className="form-control-btn">
                </div>
                <button style ={{width: '100px', marginTop: '20px'}} onClick={() => {navigate(`/products`); setCart([])}}>Buy</button>
              </form>
            </section>
            {/* <button style ={{width: '100px'}} onClick={() => {navigate(`/products`); setCart([])}}>Buy</button> */}
          </div>
        </div>
      </div>
    </div>
    );
  }