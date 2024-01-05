import { Link } from "react-router-dom";
import React from "react";

const Layout = () => {
    return (
            <div className={"sidenav"}>
            <nav>
                <ul>
                    <li>
                        <Link to="/Home">Home</Link>
                    </li>
                    <li>
                        <Link to="/Booking">Booking</Link>
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
                    <li>
                        <Link to="/">Logout</Link>
                    </li>
                </ul>
            </nav>
            </div>
    )
};

export default Layout;