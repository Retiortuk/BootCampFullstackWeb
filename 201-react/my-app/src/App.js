import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import SearchView from './components/SearchView';
import {Routes, Route} from 'react-router-dom';


function App() {
  return (
    <div>
      {/* Navbar Dari Import Dari components/Navbar.js */}
      <Navbar />
      <Routes>

        {/* Home Dari Import Dari components/Navbar.js GUNAKAN element={} karena React Router v6*/}
        <Route path="/" element={<Home />} />   {/* Jika path/alamat/endpoint nya / maka itu adalah home exact dan berubah ke laman Home */}

        {/* About Dari Import Dari components/About.js GUNAKAN element={} karena React Router v6 */}
        <Route path="/about" element={<About />} /> {/* Jika path/alamat/endpoint nya /about maka itu adalah about dan berubah ke laman about */}

        {/* SearchView Dari Import Dari components/SearchView.js GUNAKAN element={} karena React Router v6 */}
        <Route path="/search" element={<SearchView />} />

      </Routes>
    </div>
  );
}

export default App;
