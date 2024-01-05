import './App.css';
import Login from "./Login";
import Layout from "./components/Layout";
import Home from './components/Home';
import PatientRecords from './components/PatientRecords';
import Appointments from './components/Appointments';
import Billing from './components/Billing';
import Settings from './components/Settings';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}/>
            <Route  path="./components/Home" component={Home} />
            <Route path="./components/PatientRecords" component={PatientRecords} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;


/*
// App.js
import React, {Fragment} from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import Layout from "./components/Layout";
import Home from './components/Home';
import PatientRecords from './components/PatientRecords';
import Appointments from './components/Appointments';
import Billing from './components/Billing';
import Settings from './components/Settings';
import Login from "./Login";

const App = () => {
    return (
        <Routes>
            <Fragment>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="./components/PatientRecords">Patients</Link>
                        </li>
                    </ul>
                </nav>

                <hr />

                <Route exact path="/" component={Home} />
                <Route path="./components/PatientRecords" component={PatientRecords} />
            </div>
            </Fragment>
        </Routes>
    );
};

export default App;
*/