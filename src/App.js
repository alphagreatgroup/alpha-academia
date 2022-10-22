import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import HomepageComponent from "./Components/Homepage/HomepageComponent";

import "bootstrap/dist/css/bootstrap.min.css";

import ServicesPage from "./Components/ServicesPage/ServicesPage";
import AboutPage from "./Components/AboutPage/AboutPage";
import ContactPage from "./Components/ContactPage/ContactPage";

import NavbarComponent from "./Components/NavbarComponent";
import Footer from "./Components/Footer";

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
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
