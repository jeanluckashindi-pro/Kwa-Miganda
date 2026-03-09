import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Experience from './pages/Experience';
import Lodge from './pages/Lodge';
import Heritage from './pages/Heritage';
import Gallery from './pages/Gallery';
import Location from './pages/Location';
import BookNow from './pages/BookNow';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/lodge" element={<Lodge />} />
          <Route path="/heritage" element={<Heritage />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/location" element={<Location />} />
          <Route path="/book" element={<BookNow />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
