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