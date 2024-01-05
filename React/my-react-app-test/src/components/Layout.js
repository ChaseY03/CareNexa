import { Link } from "react-router-dom";
import React, {useEffect} from "react";

const Layout = () => {

    return (
        <div>>
            <div className={"sidenav"}>
                <nav>
                    <ul>
                        <li>
                            <Link to="/Home">Home</Link>
                        </li>
                        <li>
                            <Link to="/Booking">Bookings</Link>
                        </li>
                        <li>
                            <Link to="/Patients">Patients</Link>
                        </li>
                        <li>
                            <Link to="/Billing">Billing</Link>
                        </li>
                        <li>
                            <Link to="/Settings">Settings</Link>
                        </li>
                    </ul>
                </nav>
            </div>

            <div className={"bottom-logout"}>
                <Link to="/">Logout</Link>
            </div>

        </div>


    )
};

export default Layout;