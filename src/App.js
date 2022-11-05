import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";

import HomepageComponent from "./Components/Homepage/HomepageComponent";
import ServicesPage from "./Components/ServicesPage/ServicesPage";
import AboutPage from "./Components/AboutPage/AboutPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomepageComponent />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
