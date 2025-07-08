import React from 'react';

const Badge = ({ 
  children, 
  variant = 'default', 
  size = 'md',
  className = '',
  ...props 
}) => {
  // Base styles
  const baseStyles = "inline-flex items-center font-medium rounded-full";
  
  // Variant styles
  const variants = {
    default: "bg-gray-100 text-gray-700",
    primary: "bg-indigo-100 text-indigo-700",
    secondary: "bg-purple-100 text-purple-700",
    success: "bg-green-100 text-green-700",
    warning: "bg-yellow-100 text-yellow-700",
    danger: "bg-red-100 text-red-700",
    info: "bg-blue-100 text-blue-700"
  };
  
  // Size styles
  const sizes = {
    sm: "px-2 py-1 text-xs",
    md: "px-3 py-1 text-xs",
    lg: "px-4 py-2 text-sm"
  };
  
  const badgeClasses = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;
  
  return (
    <span className={badgeClasses} {...props}>
      {children}
    </span>
  );
};

export default Badge;
