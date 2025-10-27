import React from 'react'
import './CasesSection.css'

const CasesSection = () => {
  const cases = [
    { id: 1, status: 'in_progress' },
    { id: 2, status: 'unclosed' },
    { id: 3, status: 'in_progress' },
    { id: 4, status: 'unclosed' },
    { id: 5, status: 'in_progress' }
  ]

  return (
    <section className="cases-section">
      <h2 className="section-title">Cases</h2>
      
      <div className="cases-list">
        {cases.map((caseItem) => (
          <div key={caseItem.id} className="case-item">
            <div className="case-icon">👤</div>
            <div className="case-content">
              <div className="content-line line-1"></div>
              <div className="content-line line-2"></div>
            </div>
            <div className={`status-tag ${caseItem.status}`}>
              {caseItem.status === 'in_progress' ? 'In progrest' : 'Unclosed'}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default CasesSection
