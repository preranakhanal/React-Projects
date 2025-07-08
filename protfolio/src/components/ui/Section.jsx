import React from 'react';

const Section = ({ 
  children, 
  id,
  title,
  subtitle,
  badge,
  className = '',
  background = 'default',
  padding = 'default',
  ...props 
}) => {
  // Background styles
  const backgrounds = {
    default: "bg-white",
    gradient: "bg-gradient-to-br from-blue-50 via-white to-blue-50",
    dark: "bg-gray-900",
    primary: "bg-indigo-50"
  };
  
  // Padding styles
  const paddings = {
    none: "",
    sm: "py-12 px-4",
    default: "py-20 px-8",
    lg: "py-32 px-8"
  };
  
  const sectionClasses = `w-full flex flex-col items-center justify-center ${backgrounds[background]} ${paddings[padding]} ${className}`;
  
  return (
    <section id={id} className={sectionClasses} {...props}>
      {(title || subtitle || badge) && (
        <div className="text-center mb-16">
          {badge && (
            <div className="inline-block mb-4">
              <span className="bg-indigo-100 text-indigo-600 px-4 py-2 rounded-full text-sm font-semibold">
                {badge}
              </span>
            </div>
          )}
          {title && (
            <h2 className="text-5xl font-bold text-gray-800 mb-6">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {subtitle}
            </p>
          )}
          <div className="flex items-center justify-center mt-8">
            <div className="w-12 h-1 bg-indigo-600 rounded-full"></div>
            <div className="w-3 h-3 bg-indigo-600 rounded-full mx-4"></div>
            <div className="w-12 h-1 bg-indigo-600 rounded-full"></div>
          </div>
        </div>
      )}
      {children}
    </section>
  );
};

export default Section;
