import { Outlet, Link } from "react-router-dom";
import logo from "../logo.svg";

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
    <main>
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                        Edit <code>src/App.js</code> and save to reload.
                    </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                </header>
            </div>
</main>
        </>
    )
};

export default Layout;