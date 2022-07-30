import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

export default function ProductCard() {

    const [products, setProducts] = useState([]);

  return (
    <div className="Product-Container">
      <h1 className="Store">Jeremy's Store</h1>
      <div className="Product-Row">
        {/* <h2>{products['1']?.title}</h2> */}
          {products?.length > 0 ? (products?.map((prods, i) => (
          <div key={i} className='Product-Selection'>
            <div className="Product-Image-Div">
              <img src={prods.image} className='Product-Image' alt="Item" width="300" height="400" onClick={() => navigate(`/product-details/${prods.id}`)}/>
            </div>
            <div className='Product-Desc-Title'>
            <div className ='Product-Title-Div'style={{width: '100%', height: '50%'}}>
                <h1 className='Product-Title'>{prods.title}</h1>
              </div>
              <div style={{width: '100%', height: '50%', border: 'solid', marginBottom: '10px'}}>
                <p className='Product-Description'>{prods.description}</p>
              </div>
            </div>
          </div>          
          ))) : (
            <h1>Loading</h1>
          )}
      </div>
    </div>
    );
  }