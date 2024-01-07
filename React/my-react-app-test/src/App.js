import './App.css';
import Login from "./Login";
import Home from './components/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Billing from "./components/Billing";
import Patients from "./components/Patient";
import Booking from "./components/Booking";
import AddData from "./components/AddData";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}/>
            <Route path="Home" element={<Home />} />
            <Route path="Booking" element={<Booking />} />
            <Route path="Patients" element={<Patients />} />
            <Route path="Billing" element={<Billing />} />
            <Route path="AddData" element={<AddData />} />
            <Route path="Logout" element={<Login />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
