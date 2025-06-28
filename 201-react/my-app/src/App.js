import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';


function App() {
  return (
    <div>
      {/* Navbar Dari Import Dari components/Navbar.js */}
      <Navbar />
      {/* Home Dari Import Dari components/Navbar.js */}
      <Home />
      {/* About Dari Import Dari components/About.js */}
      <About />
    </div>
  );
}

export default App;
