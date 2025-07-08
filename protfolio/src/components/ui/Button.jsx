import React from 'react';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  icon,
  iconPosition = 'right',
  disabled = false,
  onClick,
  href,
  target,
  rel,
  ...props 
}) => {
  // Base styles
  const baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none";
  
  // Variant styles
  const variants = {
    primary: "bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:shadow-lg focus:ring-indigo-500",
    secondary: "bg-gray-100 hover:bg-gray-200 text-gray-700 focus:ring-gray-500",
    outline: "border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white focus:ring-indigo-500",
    ghost: "text-indigo-600 hover:bg-indigo-100 focus:ring-indigo-500",
    danger: "bg-gradient-to-r from-red-500 to-red-600 text-white hover:shadow-lg focus:ring-red-500"
  };
  
  // Size styles
  const sizes = {
    sm: "px-3 py-1.5 text-sm rounded-md gap-1",
    md: "px-4 py-2 text-sm rounded-lg gap-2",
    lg: "px-6 py-3 text-base rounded-lg gap-2",
    xl: "px-8 py-4 text-lg rounded-full gap-3"
  };
  
  const buttonClasses = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;
  
  const content = (
    <>
      {icon && iconPosition === 'left' && (
        <span className="flex-shrink-0">{icon}</span>
      )}
      {children}
      {icon && iconPosition === 'right' && (
        <span className="flex-shrink-0">{icon}</span>
      )}
    </>
  );
  
  // If href is provided, render as link
  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        className={buttonClasses}
        {...props}
      >
        {content}
      </a>
    );
  }
  
  // Otherwise render as button
  return (
    <button
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {content}
    </button>
  );
};

export default Button;
