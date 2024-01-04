import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Layout from "./components/Layout";
import Login from "./Login";
import Home from './components/Home';
import PatientRecords from './components/PatientRecords';
import Appointments from './components/Appointments';
import Billing from './components/Billing';
import Settings from './components/Settings';

export default function App() {
    let docName = "";
    let userName = "";
    let password = "";
    return (
        <Login/>
        /*
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="/patientrecords" element={PatientRecords} />
                    <Route path="/appointments" elment={Appointments} />
                    <Route path="/billing" element={Billing} />
                    <Route path="/settings" element={Settings} />
                </Route>
            </Routes>
        </BrowserRouter>*/
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);