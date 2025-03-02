import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home';
import Skills from './components/skills';
import ContactPage  from './components/cantact';
import Education from'./components/education';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Skills" element={<Skills />} />
        <Route path="/Contact" element={<ContactPage />} />
        <Route path="/education" element={<Education/>}/>
      </Routes>
    </Router>
  );
}

export default App;
