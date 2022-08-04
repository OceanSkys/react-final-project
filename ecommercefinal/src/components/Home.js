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

// var elements = document.querySelectorAll(".mover");
// for (var i = 0, len = elements.length; i < len; i++) {
//     (function (el) {
//         function reset() {
//             el.style.display = "none"; // make it immune to transitions
//             el.style.marginLeft = (el.parentElement.clientWidth) + "px"; //move it back
//             el.style.display = "inline-block"; // make it susceptible to transitions
//             moveAway();
//         }
//         function moveAway() {
//             el.style.marginLeft = (el.clientWidth * -1) + "px"; // transit occurs
//             setTimeout(reset, 4000); // 4 seconds later, start over
//         }
//         reset();
//     })(elements[i]);
//   }

 



  // useEffect(() => {
  //   console.log(products);
  // }, [products]);

  return (
    <div className="FrontPage-Container">
      <h1 className="Store-Name">Jeremy's Store</h1>
      {/* <div className="Product-Row"> */}
        <NavLink to="/products" type="submit">Let's Shop!</NavLink>
      {/* </div> */}
    </div>
    );
  }