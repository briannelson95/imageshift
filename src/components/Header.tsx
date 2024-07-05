// src/components/Header.tsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaImage, FaImages } from 'react-icons/fa';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="app-header">
      <nav className="app-nav">
        <ul>
          <li>
            <NavLink to="/single" className={({ isActive }) => isActive ? 'active' : ''}>
              <FaImage /> Single Conversion
            </NavLink>
          </li>
          <li>
            <NavLink to="/batch" className={({ isActive }) => isActive ? 'active' : ''}>
              <FaImages /> Batch Conversion
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
