import React from 'react';

const Card = ({ 
  children, 
  className = '', 
  hover = true,
  padding = 'md',
  shadow = 'md',
  ...props 
}) => {
  // Base styles
  const baseStyles = "bg-white rounded-2xl border border-gray-100 overflow-hidden transition-all duration-500";
  
  // Hover effect
  const hoverStyles = hover ? "hover:shadow-xl hover:-translate-y-2 transform" : "";
  
  // Padding styles
  const paddings = {
    none: "",
    sm: "p-4",
    md: "p-6",
    lg: "p-8"
  };
  
  // Shadow styles
  const shadows = {
    none: "",
    sm: "shadow-sm",
    md: "shadow-lg",
    lg: "shadow-xl"
  };
  
  const cardClasses = `${baseStyles} ${hoverStyles} ${shadows[shadow]} ${className}`;
  
  return (
    <div className={cardClasses} {...props}>
      <div className={paddings[padding]}>
        {children}
      </div>
    </div>
  );
};

// Card Header Component
const CardHeader = ({ children, className = '' }) => (
  <div className={`mb-4 ${className}`}>
    {children}
  </div>
);

// Card Title Component
const CardTitle = ({ children, className = '' }) => (
  <h3 className={`text-xl font-bold text-gray-900 mb-3 leading-tight ${className}`}>
    {children}
  </h3>
);

// Card Content Component
const CardContent = ({ children, className = '' }) => (
  <div className={`text-gray-600 text-sm leading-relaxed ${className}`}>
    {children}
  </div>
);

// Card Footer Component
const CardFooter = ({ children, className = '' }) => (
  <div className={`mt-6 ${className}`}>
    {children}
  </div>
);

// Export all components
Card.Header = CardHeader;
Card.Title = CardTitle;
Card.Content = CardContent;
Card.Footer = CardFooter;

export default Card;
