
import { Outlet, NavLink } from 'react-router-dom'

  export default function HeaderFooter() {

    function styleByActiveStatus(isActive) {
      return isActive
        ? { fontWeight: "bold", textDecoration: "none" }
        : { fontWeight: "normal", textDecoration: "none" };
    }

    return (
      <div>
        <div className="HeaderFooterDiv">
          <div className="Logo">Coolest Store Ever</div>
            <div className="Navs">
              {/* Nav Links that take you to different page */}
              <NavLink to='/' style={({ isActive }) => styleByActiveStatus(isActive)}>Home</NavLink>
              <NavLink to='/ProductDetails' style={({ isActive }) => styleByActiveStatus(isActive)}>Prod-Details</NavLink>
              <NavLink to='/Products' style={({ isActive }) => styleByActiveStatus(isActive)}>Products</NavLink>
            </div>
        </div>
          <div style={{ padding: 40 }}>
          < Outlet />
          </div>
        <div className="Copyright">Made by Jeremy</div>
      </div>
    );
  }
  