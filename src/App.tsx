import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import SingleImageConversion from './components/SingleImageConversion';
import BatchImageConversion from './components/BatchImageConversion';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <ul>
            <li><Link to="/">Single Image Conversion</Link></li>
            <li><Link to="/batch">Batch Image Conversion</Link></li>
          </ul>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<SingleImageConversion />} />
          <Route path="/batch" element={<BatchImageConversion />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
