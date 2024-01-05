import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import App from './App';
import Layout from "./components/Layout";
import Login from "./Login";
import Home from './components/Home';
import PatientRecords from './components/PatientRecords';
import Appointments from './components/Appointments';
import Billing from './components/Billing';
import Settings from './components/Settings';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

/*
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Login";
import Layout from "./components/Layout";
import Home from './components/Home';
import PatientRecords from './components/PatientRecords';
import Appointments from './components/Appointments';
import Billing from './components/Billing';
import Settings from './components/Settings';
/*
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route index element={<Layout />} />
                <Route path="login" element={<Login />} />
                <Route path="home" element={<Home />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);


ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);
*/