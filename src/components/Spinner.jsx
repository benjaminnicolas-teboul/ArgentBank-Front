import React from 'react';

const Spinner = () => {
  const spinnerStyle = {
    width: '200px',
    height: '200px',
    border: '20px solid rgba(0,0,0,0.1)',
    borderTopColor: '#3498db',
    borderRadius: '50%',
    animation: 'spin 1s linear infinite',
    margin: '150px auto '
  };

  return (
    <>
      <style>
        {`
          @keyframes spin {
            to { transform: rotate(360deg); }
          }
        `}
      </style>
      <div style={spinnerStyle} aria-label="Chargement en cours"></div>
    </>
  );
};

export default Spinner;
