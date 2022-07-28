import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

export default function ProductsPicker() {
    let [searchValue, setSearchValue] = useState('');
    const [data, setData] = useState([]);
    const [products, setProducts] = useState([]);

    useEffect(() =>{
      getProducts()
      console.log('this is products', products);
    }, [])
    
    const getProducts = async () => {
        
        const url = `https://fakestoreapi.com/products/`;
        const response = await fetch(url);
        const data = await response.json();
        setProducts(data)
        console.log('this is products', products);

      };

var elements = document.querySelectorAll(".mover");
for (var i = 0, len = elements.length; i < len; i++) {
    (function (el) {
        function reset() {
            el.style.display = "none"; // make it immune to transitions
            el.style.marginLeft = (el.parentElement.clientWidth) + "px"; //move it back
            el.style.display = "inline-block"; // make it susceptible to transitions
            moveAway();
        }
        function moveAway() {
            el.style.marginLeft = (el.clientWidth * -1) + "px"; // transit occurs
            setTimeout(reset, 4000); // 4 seconds later, start over
        }
        reset();
    })(elements[i]);
  }


  // useEffect(() => {
  //   console.log(products);
  // }, [products]);

  return (
    <div className="Product-Container">
      <h1 className="Store">Jeremy's Store</h1>
      <div className="Product-Row">
        {/* <h2>{products['1']?.title}</h2> */}
          {products?.length > 0 ? (products?.map((prods, i) => (
          <div key={i} className='Product-Selection'>
            <div className="Product-Image-Div">
              <img src={prods.image} className='Product-Image' alt="Item" width="300" height="400"/>
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
          {/* <div style={{width:'100%', border:'1px solid black'}}>
            <div className="mover">inline</div>
          </div>
          <div className="mover" style={{position:'absolute'}}>absolute</div> */}
        <NavLink to="/productdetails" className="btn btn-primary col-md-2 fw-bold justify-content-end  mb-5" type="submit">Let's Shop!</NavLink>
      </div>
    </div>
    );
  }