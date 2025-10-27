import React from 'react'
import './DocumentsSection.css'

const DocumentsSection = () => {
  const documents = [
    { id: 1, name: 'Documento de prueba', date: '2024-01-15' },
    { id: 2, name: 'Contrato principal', date: '2024-01-10' },
    { id: 3, name: 'Informe financiero', date: '2024-01-05' }
  ]

  return (
    <section className="documents-section">
      <h2 className="section-title">Documents</h2>
      
      <div className="update-docs-card">
        <div className="upload-icon">☁️</div>
        <p className="upload-text">Update Docs</p>
      </div>
      
      <div className="placeholder-bars">
        <div className="bar bar-1"></div>
        <div className="bar bar-2"></div>
        <div className="bar bar-3"></div>
      </div>
      
      <div className="documents-list">
        {documents.map((doc) => (
          <div key={doc.id} className="document-item">
            <div className="document-icon">📄</div>
            <div className="document-content">
              <div className="content-line line-1"></div>
              <div className="content-line line-2"></div>
            </div>
            <div className="document-chevron">▼</div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default DocumentsSection
