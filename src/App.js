// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import './App.css'; // Import file CSS

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            {/* Add more menu items here */}
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          {/* Add more routes for other components */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
