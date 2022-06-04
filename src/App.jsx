import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/navbar/Navbar";
import Home from "./Components/home/Home";
import Services from "./Components/services/Services";
import Projects from "./Components/about/Projects";
import Contact from "./Components/contact/Contact";
import Feater from "./Components/feater/Feater";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <div className="header">
          <Navbar />
        </div>
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        {/* <div className="feater">
        </div> */}
        {/* <Services />
        <About />
        <Contact/> */}
      </BrowserRouter>
      <Services />

      <Projects />
      <Contact />
      <Feater />
    </div>
  );
}

export default App;
