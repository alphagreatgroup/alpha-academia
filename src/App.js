import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import HomepageComponent from "./Components/Homepage/HomepageComponent";

import "bootstrap/dist/css/bootstrap.min.css";

import ServicesPage from "./Components/ServicesPage/ServicesPage";
import AboutPage from "./Components/AboutPage/AboutPage";
import ContactPage from "./Components/ContactPage/ContactPage";

import NavbarComponent from "./Components/NavbarComponent";
import Footer from "./Components/Footer";
import Register from "./Components/Forms/Register";
import Login from "./Components/Forms/Login";
import Welcome from "./Components/DashboardComponents/Welcome";
import Dashboard from "./Components/DashboardComponents/Dashboard";

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <Router>
        <Routes>
          <Route path="/" element={<HomepageComponent />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/register" element={<Register/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/welcome" element={<Welcome/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
