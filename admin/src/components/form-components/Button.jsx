import React from 'react';

const Button = ({ children, onClick, variant = 'primary' }) => {
  const baseStyle = 'px-4 py-2 rounded shadow';
  const variantStyles = {
    primary: 'bg-blue-500 text-white',
    secondary: 'bg-gray-500 text-white',
    error: 'bg-red-500 text-white',
  };

  return (
    <button
      className={`${baseStyle} ${variantStyles[variant]} hover:opacity-85 active:scale-95 transition-all`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
