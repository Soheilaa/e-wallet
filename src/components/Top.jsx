import React from 'react';

// Top component renders a header with the title "E-Wallet" and children components
const Top = ({ children }) => {
  return (
    <div>
      {/* Title header */}
      <h1>E-Wallet</h1>
      {/* Render children components */}
      {children}
    </div>
  );
};

export default Top;

