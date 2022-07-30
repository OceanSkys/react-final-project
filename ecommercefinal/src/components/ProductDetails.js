import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function ProductsPicker() {
    const [details, setDetails] = useState([]);
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

  return (
    <div className="container">
      <div style={{border: 'solid', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}} className="row">
        <h1 className="Store" style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>{details?.title} Details</h1>
          <div className='Product-Selection'>
            <div className="Product-Image-Div">
              <img src={details?.image} className='Image' alt="Item" width="300" height="400"/>
            </div>
            <div className='Product-Desc-Title'>
            <div style={{width: '100%', height: '50%'}}>
                <h1 className='Product-Title'>{details?.title}</h1>
              </div>
              <div style={{width: '100%', height: '50%', border: 'solid', marginBottom: '10px'}}>
                <p className='Product-Description'>{details?.description}</p>
              </div>
            </div>
          </div>          
        {/* <NavLink to="/productdetails" className="btn btn-primary col-md-2 fw-bold justify-content-end  mb-5" type="submit">Let's Shop!</NavLink> */}
      </div>
    </div>
    );
  }