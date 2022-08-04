import { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { QuantityPicker } from 'react-qty-picker';
import { CartContext } from "../contexts/CartContext";

export default function ProductsPicker() {
    const { cart, setCart } = useContext(CartContext);
    const [details, setDetails] = useState([]);
    let navigate = useNavigate();
    let params = useParams();
    console.log(params)

    const getProducts = async () => {

        console.log("params is: ", params);

        const url = `https://fakestoreapi.com/products/${params.id}`;
        const response = await fetch(url);
        const data = await response.json();
        setDetails(data)
        console.log('this is details', details);

      };

      useEffect(() =>{
        getProducts()
        // console.log('this is details', data);
      }, [])

      const getPickerValue = (value) =>{
        details.quantity = value;
        
        console.log(details.quantity)
      };

  return (
    <div className="container">
      <div style={{border: 'solid', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
          <div style={{marginRight: '50px'}}className='Product-Selection'>
            <div className="Product-Image-Div">
              <img src={details?.image} className='Image' alt="Item" width="300" height="400"/>
            </div>
            <div className='Product-Desc-Title'>
            <div style={{width: '100%', height: '50%'}}>
                <h1 className='Product-Title'>{details?.title}</h1>
              </div>
              <div style={{width: '100%', height: '50%', marginBottom: '10px'}}>
                <p className='Product-Description'>{details?.description}</p>
              </div>
            </div>
          </div>       
          <div>
            <QuantityPicker min={1} max={10} value={0} onChange={getPickerValue} smooth style={{paddingBottom: '30px'}}/> 
            <div>
              <button onClick={ () => setCart([...cart, details])}>Add to cart</button>   
              <button onClick={() => navigate(`/cart`)}>Go to Cart</button>            
            </div>
            <button onClick={() => navigate(`/products`)}>Go to Products</button>
          </div>
        {/* <NavLink to="/productdetails" className="btn btn-primary col-md-2 fw-bold justify-content-end  mb-5" type="submit">Let's Shop!</NavLink> */}
      </div>
    </div>
    );
  }