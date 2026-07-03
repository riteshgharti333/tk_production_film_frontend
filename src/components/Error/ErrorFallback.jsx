import React from 'react';
import './ErrorFallback.scss';

const ErrorFallback = ({ 
  message = "Something went wrong. Please try again.", 
  onRetry, 
  fullScreen = true 
}) => {
  return (
    <div className={`error-fallback ${fullScreen ? 'full-screen' : ''}`}>
      <div className="error-fallback-content">
        <div className="error-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
        </div>
        <h3 className="error-title">Oops! Something went wrong</h3>
        <p className="error-message">{message}</p>
        {onRetry && (
          <button className="error-retry-btn" onClick={onRetry}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M23 4v6h-6" />
              <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10" />
            </svg>
            Try Again
          </button>
        )}
      </div>
    </div>
  );
};

export default ErrorFallback;