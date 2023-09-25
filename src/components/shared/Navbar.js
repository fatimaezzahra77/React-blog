import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import '../../index.css'; // Go up two levels to the src folder, then access index.css

const Navbar = () => {
    return ( 
        <div>

           <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
            <img src="quoteLogo4.png" style={{borderRadius:"70px", width:"55px", height:"55px", marginLeft:"13px"}}></img>
  <div className="container-fluid center-navbar" style={{marginLeft:"1px"}}>
    
    <Link className="navbar-brand" to ="/"><i className="navbar-title">QuoteBlooming</i></Link>
    <div className="collapse navbar-collapse"  id="navbarColor01">
      <ul className="navbar-nav me-auto text-center" >
      <li className="nav-item navbar-items"  >
          <NavLink className={`nav-link ${({isActive})=> isActive && 'active' }`} to ="/" >Home</NavLink>
        </li>
        <li className="nav-item navbar-items"  >
          <NavLink className={`nav-link ${({isActive})=> isActive && 'active' }`} to ="/blog" >Blog</NavLink>
        </li>
        <li className="nav-item navbar-items" >
          <NavLink className={`nav-link ${({isActive})=> isActive && 'active' }`} to ="/contact">Contact</NavLink>
        </li>
        <li className="nav-item navbar-items" >
          <NavLink className={`nav-link ${({isActive})=> isActive && 'active' }`} to ="/about">About</NavLink>
        </li>
        {/* <li className="nav-item dropdown">
          <Link>className="nav-link dropdown-toggle" data-bs-toggle="dropdown" to ="#" role="button" aria-haspopup="true" aria-expanded="false">Dropdown</Link>
          <div className="dropdown-menu">
            <Link>className="dropdown-item" to ="#">Action</Link>
            <Link> className="dropdown-item" to ="#">Another action</Link>
            <Link>className="dropdown-item" to ="#">Something else here</Link>
            <div className="dropdown-divider"></div>
            <Link></Link> className="dropdown-item" to ="#">Separated link</Link>
          </div>
        </li> */}
      </ul>
      <form className="d-flex">
        <input className="form-control me-sm-2" type="search" placeholder="Search"/>
        <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav> 
        </div>
     );
}
 
export default Navbar;