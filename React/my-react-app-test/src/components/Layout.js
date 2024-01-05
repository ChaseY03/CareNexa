import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <div className={"sidenav"}>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/Appointments">Appointments</Link>
                    </li>
                    <li>
                        <Link to="/PatientRecords">Patients</Link>
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
            <Outlet />
        </>
    )
};

export default Layout;