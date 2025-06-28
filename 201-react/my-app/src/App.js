import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';

function App() {
  return (
    <div>
      {/* Navbar Dari Import Dari components/Navbar.js */}
      <Navbar />
      {/* Home Dari Import Dari components/Navbar.js */}
      <Home />
    </div>
  );
}

export default App;
