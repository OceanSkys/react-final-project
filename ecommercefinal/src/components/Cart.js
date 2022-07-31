import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';

export default function Cart() {
    const { cart } = useContext(CartContext);
    console.log(cart)

    var deduped = Array.from(new Set(cart));
    console.log('this is cart', cart)
    console.log('this is deduped', deduped)

    let subTotal = 0;

    for (let i = 0; i < cart.length; i++) {
      subTotal += cart[i].price*cart[i].quantity;
    }

    if (cart === cart && cart > 1) {
        
        console.log('this is cart length', cart.length)
    }

    return (

      <div className="Product-Container" style={{display: 'flex', flexDirection:'column'}}>
        <div className="Product-Row" style={{display: 'flex', flexDirection:'column'}}>
          <h1 className="">My Cart</h1>
             {deduped.map(( item, index) => (
            <div key={index} className="Product-Selection">
              <div className='Product-Image-Div'>
                <img src={item.image} className="Image" width='300' height='400' />
              </div>
              <div className='Product-Desc-Title'>
                <div>
                  <h1>{item.title}:</h1>
                  <h3>Quantity: {item.quantity}</h3>
                </div>
                <div>
                  <div className='row'>
                    <h1>Total: ${item.quantity * item.price}</h1>
                  </div>
                </div>
              </div>
            </div>
            ))}
            <div className='row'>
              <h1>Total Amount: ${subTotal.toFixed(2)}</h1>
            </div>
          </div>
      </div>
      );
    }