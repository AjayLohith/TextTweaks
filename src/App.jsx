import { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TextForm from './components/TextForm';
import About from './components/About';
import Navbar from './components/Navbar';

function App() {
  const [mode, setMode] = useState('light');
  
  // Function to toggle light/dark mode
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#373A40';
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  };

  return (
    <Router>
      <div className="App">
        <Navbar title="TextTweaks" aboutUs="About TextTweaks" mode={mode} toggleMode={toggleMode} />
        <div className="container my-3">
          <Routes>
            <Route path="/" element={<TextForm heading="Enter the text to analyze" mode={mode} />} />
            <Route path="/about" element={<About mode={mode} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;