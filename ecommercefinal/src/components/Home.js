import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function ProductsPicker() {
    let navigate = useNavigate();
    const [products, setProducts] = useState([]);
    
    const getProducts = async () => {
        
        const url = `https://fakestoreapi.com/products/`;
        const response = await fetch(url);
        const data = await response.json();
        console.log(data)
        setProducts(data)
        // console.log('this is products', products);

      };

      useEffect(() =>{
        getProducts()
        console.log('this is products', products);
      }, [])

  return (
  <div className="Product-Container5" style={{backgroundColor: 'aliceblue', width: '100%', height: '540px'}}>
    <div className="Product-Container" style={{display: 'flex', justifyContent: 'center', alignItems: 'center', border: 'solid', backgroundColor: 'white', width: '80%', height:'450px'}}>
    <button onClick={() => navigate(`/products`)} style={{maxHeight: '70px', width:'100px'}}>Let's Shop!</button>
      <div className="fadein floating2">
        <img id="f1" src={products[0]?.image} width='300px' height='320px'/>
        <img id="f2" src={products[1]?.image} width='300px' height='320px'/>
        <img id="f3" src={products[2]?.image} width='300px' height='320px'/>
      </div> 
      <div className="fadein2 floating2">
        <img id="f1" src={products[4]?.image} width='300px' height='320px'/>
        <img id="f2" src={products[5]?.image} width='300px' height='320px'/>
        <img id="f3" src={products[6]?.image} width='300px' height='320px'/>
      </div> 
    </div>
  </div>
    );
  }