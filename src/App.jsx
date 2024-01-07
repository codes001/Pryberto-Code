import './index.css'
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Careers from './pages/Careers';
import Solutions from './pages/Solutions'
import Error404 from './pages/404'

function App() {
  return (
    <>
      < Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/solutions" element={<Solutions />} />


        <Route path="*" element={<Error404 />} />
      </ Routes>
    </>
  );
}

export default App;
