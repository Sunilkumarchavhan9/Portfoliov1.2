import React from "react";

export const BentoGrid: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className, ...props }) => {
  return <div className={`bento-grid ${className || ''}`} {...props} />;
};

export const BentoCard: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className, ...props }) => {
  return <div className={`bento-card ${className || ''}`} {...props} />;
};