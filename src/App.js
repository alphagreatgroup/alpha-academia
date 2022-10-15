import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import HomepageComponent from "./Components/Homepage/HomepageComponent";

import "bootstrap/dist/css/bootstrap.min.css";

import ServicesPage from "./Components/ServicesPage/ServicesPage";
import AboutPage from "./Components/AboutPage/AboutPage";
import ContactPage from "./Components/ContactPage/ContactPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomepageComponent />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
