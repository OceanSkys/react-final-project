import { Link } from 'react-router-dom'

export default function ProductsPicker() {

  return (
    //Using React Bootsrap here for some of the classnames
    <div className="container">
      <div className="row border border-dark carousel-container d-flex align-content-center justify-content-center w-100 my-2">
        <h1 className="d-flex justify-content-center mt-5">This is the home page</h1>
        <Link to='/ProductDetails'>
            <button>Take me to Product Details!</button>        
        </Link>
        </div>
    </div>
    );
  }