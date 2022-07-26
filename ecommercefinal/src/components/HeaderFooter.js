
import { Outlet, NavLink } from 'react-router-dom'

  export default function HeaderFooter() {

    return (
      <div>
        <div className="HeaderFooterDiv">
          <div className="Logo">Coolest Store Ever</div>
            <div className="Navs">
              {/* Nav Links that take you to different page */}
              <NavLink to='/'>Home</NavLink>
              <NavLink to='/ProductDetails'>Prod-Details</NavLink>
              <NavLink to='/Products'>Products</NavLink>
            </div>
        </div>
          <div style={{ padding: 40 }}>
          < Outlet />
          </div>
        <div className="Copyright">Made by Jeremy</div>
      </div>
    );
  }
  