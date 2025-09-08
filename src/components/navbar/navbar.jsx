import { NavLink, Outlet } from "react-router";
import "../../styles/navbarStyle.css";

export default function Navbar() {
    return (
        <div>
            <div className="heading">
                <div className="logo">
                    <NavLink className="NavLink" to="/">Course LMS</NavLink>
                </div>
                <div>
                    <ul>
                        <li>
                            <NavLink className={"NavLink"} to="/home">Home</NavLink>
                        </li>
                        <li>
                            <NavLink className="NavLink" to="/career">Careers</NavLink>
                        </li>
                        <li>
                            <NavLink className="NavLink" to="/contact">Contact Us</NavLink>
                        </li>
                        <li>
                            <NavLink className="NavLink" to="/login">Login</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
            <Outlet />
        </div>
    )
}