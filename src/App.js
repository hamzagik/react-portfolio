import './App.css';

import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/Navbar';
import Head from './components/Head';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Head />
      <About />
      <Experience />
      <Projects/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
