import { useState, useEffect } from 'react'
import { useNavigate,  } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

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
        console.log(data)
        setProducts(data)
        console.log('this is products', products);

      };
      const ratings = {
        hotel_a : 2.8,
        hotel_b : 3.3,
        hotel_c : 1.9,
        hotel_d : 4.3,
        hotel_e : 4.74
      };
      useEffect(() => {
      const starTotal = 5;

      for(const rating in ratings) {  
        const starPercentage = (ratings[rating] / starTotal) * 100;
        const starPercentageRounded = `${(Math.round(starPercentage / 10) * 10)}%`;
        // document.querySelector(`.${rating} .stars-inner`).style.width = starPercentageRounded; 
      }
    }, []);

  return (
    <div className="Product-Container4">
      <h1 className="Store">All Products</h1>
      <div className="Product-Row">
        {products?.length > 0 ? (products?.map((prods, i) => (
        <div key={i} className='Product-Selection'>
          <div className="Product-Image-Div">
            <img src={prods.image} className='Product-Image' alt="Item" width="300" height="350" onClick={() => navigate(`/ProductDetails/${prods.id}`)}/>
          </div>
          <div className='Product-Desc-Title2'>
            <h1 className='Product-Title'>{prods.title}</h1>
            <h1>Rating: {prods.rating.rate}<FontAwesomeIcon icon={faStar} /></h1>
            {/* <table>
              <tbody>
                <tr class="hotel_a">
                  <td>Hotel A</td>
                  <td>
                    <div class="stars-outer">
                      <div class="stars-inner"></div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table> */}
          </div>
        </div>          
        ))) : (
          <h1>Loading</h1>
        )}
      </div>
    </div>
    );
  }