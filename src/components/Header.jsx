import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <span className="logo-text">Maaji</span>
        </div>
        
        <div className="search-container">
          <div className="search-icon">🔍</div>
          <input 
            type="text" 
            placeholder="Search" 
            className="search-input"
          />
        </div>
        
        <nav className="nav-links">
          <a href="#" className="nav-link">Home</a>
          <a href="#" className="nav-link">Documents</a>
          <a href="#" className="nav-link">Cases</a>
        </nav>
        
        <div className="header-icons">
          <div className="icon-button">
            <span className="icon">🔔</span>
          </div>
          <div className="icon-button profile-icon">
            <span className="icon">👤</span>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
