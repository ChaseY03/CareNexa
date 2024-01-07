import { Link } from "react-router-dom";
import React, {useEffect} from "react";

const Layout = () => {

    return (
        <div>>
            <div className={"sidenav"}>
                <img src={"./CareNexaLogo.svg"} alt={"CareNexa logo"} className={"menu-logo"}
                     width="50" height="50" />
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
                            <Link to="/AddData">Add data</Link>
                        </li>

                    </ul>
                </nav>

                <li className={"logout"}>
                <nav >
                    <ul>
                        <li>
                            <Link to="/">Logout</Link>
                        </li>
                    </ul>
                </nav>
                </li>
            </div>
        </div>


    )
};

export default Layout;