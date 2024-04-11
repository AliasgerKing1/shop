import React from 'react'

const SuccessAlert = ({ heading, msg, alert }) => {
  return (
    <>
      <div id="toast-container" className="toast-container toast-top-right">
        <div
          className="toast toast-success"
          aria-live="polite"
          style={{ display: alert ? "block" : "none" }}
        >
          <button type="button" className="toast-close-button" role="button">
            ×
          </button>
          <div className="toast-title">{heading}</div>
          <div className="toast-message">{msg}</div>
        </div>
      </div>
    </>
  );
};

export default SuccessAlert