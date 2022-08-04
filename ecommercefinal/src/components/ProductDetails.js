import { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { QuantityPicker } from 'react-qty-picker';
import { CartContext } from "../contexts/CartContext";

export default function ProductsPicker() {
    const { cart, setCart } = useContext(CartContext);
    const [details, setDetails] = useState([]);
    const [deets, setDeets] = useState('Empty');
    let navigate = useNavigate();
    let params = useParams();
    console.log(params)


    useEffect(() =>{

    const getProducts = async () => {

        console.log("params is: ", params);

        const url = `https://fakestoreapi.com/products/${params.id}`;
        const response = await fetch(url);
        const data = await response.json();
        setDetails(data)
        console.log('here is details', details)
      };

        getProducts()

      }, [])

      const getPickerValue = (value) =>{
        details.quantity = value;
        console.log(details.quantity)
      };

  return (
    <div className="container" style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', width: '100%'}}>
      <div style={{border: 'solid 5px', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: "aliceblue", width: '1300px'}}>
          <div style={{marginRight: '50px'}}className='Product-Selection5'>
            <div className="Product" style={{display: 'flex', flexDirection: 'column', justifyContent:'center', alignItems: 'center'}}>
              <div className="Product-Image-Div">
                <img src={details?.image} className='Image' alt="Item" width="300" height="320"/>
              </div>
              <div className='Product-Desc-Title'>
                <div style={{width: '100%', height: '50%'}}>
                  <h2 className='Product-Title'>{details?.title}</h2>
                </div>
              </div>
            </div>
          </div>       
          <div className="Product-Selection4">
            <div style={{width: '100%', height: '50%', marginBottom: '10px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                <h2>Description: </h2>
                {/* Trying to desplay each description with a capitol letter even if it is at first lowercased */}
                <p className='Product-Description2'>{details.length > 0 ? (<h3>{details?.description[0].toUpperCase() + details?.description.slice(1)}</h3>) : (<h4>{details?.description}</h4>)}</p>
                <div className='Product-Description2'>
                  <QuantityPicker min={1} max={10} value={0} onChange={getPickerValue} smooth style={{paddingBottom: '30px'}}/> 
                  <button onClick={ () => setCart([...cart, details])}>Add to cart</button>   
                  <button onClick={() => navigate(`/cart`)}>Go to Cart</button>            
                  <button onClick={() => navigate(`/products`)}>Go to Products</button>
                </div>
            </div>
          </div>
        {/* <NavLink to="/productdetails" className="btn btn-primary col-md-2 fw-bold justify-content-end  mb-5" type="submit">Let's Shop!</NavLink> */}
      </div>
    </div>
    );
  }