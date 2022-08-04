import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import { NavLink, useNavigate} from "react-router-dom";

export default function Cart() {
    const { cart } = useContext(CartContext);
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
    
    for (let i = 0; i < cart.length; i++) {
      subTotal += cart[i].price*cart[i].quantity;
      totalQuantity += cart[i].quantity
      names += cart[i].title
    }
    for (let i = 0; i < deduped.length; i++) {
      itemQuant += deduped[i].quantity
      itemNames += deduped[i].title
    }

    if (cart === cart && cart > 1) {
        
        console.log('this is cart length', cart.length)
    }

    return (

      <div className="Product-Container2">
        <h1 className="">My Cart</h1>
        <div className="Product-Row2">
            <div className='Product-Selection2'>
              {deduped.map(( item, index) => (
              <div key={index} className="">
                <div className='Product-Image-Div' style={{containFit: 'content'}}>
                  <img src={item.image} className="Image" style={{width: '100%', height: '100%', objectFit: 'contain', border: 'solid'}} />
                </div>
                <div className='Product-Desc-Title'>
                    <h3>{item.title}:</h3>
                    <h3>Quantity: {item.quantity}</h3>
                    <h1>Total: ${(item.quantity * item.price).toFixed(2)}</h1>
                </div>
              </div>
              ))}
              {/* <h3>Quantity: {itemNames}, {quant}: {totalQuantity}</h3> */}
              <h1>Total Amount: ${subTotal.toFixed(2)}</h1>
            </div>
          </div>
          <div className='Product-Selection2'>
            <button onClick={() => navigate(`/products`)}>Go to Products</button>
            <button onClick={() => navigate(`/Checkout`)}>Checkout</button>
          </div>
      </div>
      );
    }