
import { Outlet, NavLink } from 'react-router-dom'
import { useNavigate } from "react-router-dom";

  export default function HeaderFooter() {
    
    let navigate = useNavigate();

    function styleByActiveStatus(isActive) {
      return isActive
        ? { fontWeight: "bold", textDecoration: "none" }
        : { fontWeight: "normal", textDecoration: "none" };
    }

    return (
      <div className='body'>
        <div className="HeaderFooterDiv">
          <div className="Logo" onClick={() => navigate(`/`)}>Coolest Store Ever</div>
            <div className="Navs">
              {/* Nav Links that take you to different page */}
              <NavLink to='/' style={({ isActive }) => styleByActiveStatus(isActive)}>Home</NavLink>
              {/* <NavLink to='/Profile' style={({ isActive }) => styleByActiveStatus(isActive)}>Profile</NavLink> */}
              <NavLink to='/Products' style={({ isActive }) => styleByActiveStatus(isActive)}>Products</NavLink>
              <NavLink className='Cart-Row' to='/Cart' style={({ isActive }) => styleByActiveStatus(isActive)}>
              <p>Cart</p>
              <p className='material-symbols-rounded'>shopping_cart</p>
              </NavLink>
              <NavLink to='/Checkout' style={({ isActive }) => styleByActiveStatus(isActive)}>Checkout</NavLink>
            </div>
        </div>
          <div style={{ padding: 40 }}>
          < Outlet />
          </div>
        <div className="Copyright">Made by Jeremy</div>
      </div>
    );
  }
  