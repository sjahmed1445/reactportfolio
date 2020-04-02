import React from 'react';
import Navbar from './components/Navbar'
import About from './components/About'
import Expertise from './components/Expertise';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <About />
      <Expertise />
      <Portfolio />
      <Contact />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
