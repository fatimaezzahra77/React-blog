import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar";
const SiteLayout = () => {
    return ( 
        <div>
            <Navbar/>
            <div className="Container m-5">  
            <Outlet/>
            </div>

        </div>
     );
}
 
export default SiteLayout;