import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import SingleImageConversion from './components/SingleImageConversion';
import BatchImageConversion from './components/BatchImageConversion';

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/single" element={<SingleImageConversion />} />
          <Route path="/batch" element={<BatchImageConversion />} />
          <Route path="/" element={<SingleImageConversion />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
