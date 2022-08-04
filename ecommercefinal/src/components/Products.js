import { useState, useEffect } from 'react'
import { useNavigate,  } from 'react-router-dom';

export default function Products() {

    let [searchValue, setSearchValue] = useState('');
    const [data, setData] = useState([]);
    const [products, setProducts] = useState([]);
    let navigate = useNavigate();

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
  

  return (
    <div className="Product-Container">
      <h1 className="Store">All Products</h1>
      <div className="Product-Row">
        {products?.length > 0 ? (products?.map((prods, i) => (
        <div key={i} className='Product-Selection'>
          <div className="Product-Image-Div">
            <img src={prods.image} className='Product-Image' alt="Item" width="300" height="350" onClick={() => navigate(`/ProductDetails/${prods.id}`)}/>
          </div>
          <div className='Product-Desc-Title'>
            <div style={{width: '100%', height: 'auto'}}>
                <h1 className='Product-Title'>{prods.title}</h1>

              {/* <div style={{width: '100%', height: '50%', border: 'solid', marginBottom: '10px'}}> */}
                {/* <p style={{width: '100%', height: 'auto', border: 'solid', marginBottom: '10px'}} className='Product-Description'>{prods.description}</p> */}
              {/* </div> */}
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