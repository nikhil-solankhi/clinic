import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import HomePage from './components/HomePage';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import Experts from './components/Experts';
import Testimonials from './components/Testimonials';
import ContactPage from './components/ContactPage';
import LoginPage from './components/LoginPage';
import SignUpPage from './components/SignUpPage';
import Footer from './components/Footer'; // Import the footer component

function App() {
  return (
    <Router>
      <NavBar />
      <div className="flex flex-col items-center pb-16 pt-20"> {/* Add pt-20 for space from top */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/experts" element={<Experts />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
        </Routes>
      </div>
      <Footer /> {/* Include the footer component */}
    </Router>
  );
}

export default App;
