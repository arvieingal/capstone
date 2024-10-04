import React from 'react';

interface ButtonProps {
  variant: 'add' | 'cancel';
  onClick: () => void;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ variant, onClick, children }) => {
  const baseClasses = 'px-4 py-2 rounded-md text-white font-semibold transition-opacity hover:opacity-80 w-[8rem]';
  const variantClasses = {
    add: 'bg-[#165B4B]', 
    cancel: 'bg-[#10293A]' 
  };

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;