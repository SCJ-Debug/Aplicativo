import React from 'react'
import './App.css'
import Header from './components/Header'
import DocumentsSection from './components/DocumentsSection'
import CasesSection from './components/CasesSection'

function App() {
  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <div className="main-grid">
          <DocumentsSection />
          <CasesSection />
        </div>
      </main>
    </div>
  )
}

export default App
