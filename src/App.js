import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import NavbarComponent from "./Components/NavbarComponent";
import HomepageComponent from "./Components/Homepage/HomepageComponent";

import "bootstrap/dist/css/bootstrap.min.css";

import ServicesPage from "./Components/ServicesPage/ServicesPage";

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <Router>
        <Routes>
          <Route path="/" element={<HomepageComponent />} />
          <Route path="/services" element={<ServicesPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
