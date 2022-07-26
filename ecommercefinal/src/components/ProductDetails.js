import { Link } from 'react-router-dom'

function ProductDetails() {

    return (
      <div className="ProductDetails">
        <h1>This is the products details page</h1>
        <Link to='/'>
            <button>Take me home!</button>       
        </Link>
      </div>
    );
  }
  
  export default ProductDetails;