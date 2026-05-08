import React from 'react';
import './LegalModal.css';

const LegalModal = ({ isOpen, onClose, title, content }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {/* Modal Header */}
        <div className="modal-header">
          <div className="header-title-group">
            <span className="modal-subtitle">// LEGAL DOCUMENTATION</span>
            <h2 className="modal-main-title">{title}</h2>
          </div>
          <button className="modal-close-btn" onClick={onClose}>&times;</button>
        </div>

        {/* Modal Body */}
        <div className="modal-body">
          <div className="legal-meta">
            <span><strong>Effective Date:</strong> May 2026</span>
            <span><strong>Status:</strong> Active</span>
          </div>
          <div className="legal-rich-text">
            {content}
          </div>
        </div>

        {/* Modal Footer */}
        <div className="modal-footer">
          <button className="modal-action-btn" onClick={onClose}>I Understand</button>
        </div>
      </div>
    </div>
  );
};

export default LegalModal;