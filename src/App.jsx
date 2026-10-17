import { FaCalendarAlt,FaArrowRight } from "react-icons/fa";
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import './App.css';
function App() {
  return (
   <>
    <nav className="navbar">
      <h2 className="logo"><FaCalendarAlt size="30px" color="blue" />EventTask</h2>
      <div className="nav-links">
        <a href="#Home">Home</a>
        <a href="#About">About</a>
        <a href="#Contact">Contact</a>
        <a href= "#REGISTER" className="register-btn">Register Now <FaArrowRight /></a>
        
      </div>
    </nav>

    <Home />
    <About />
    <Contact />
    
    </>
  );
}

export default App;
