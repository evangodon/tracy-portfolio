import React from 'react';

export const icons = {
  rightArrow: <polyline points="9 18 15 12 9 6" />,
  leftArrow: <polyline points="15 18 9 12 15 6" />,
  exit: [
    <line x1={18} y1={6} x2={6} y2={18} key={1}/>,
    <line x1={6} y1={6} x2={18} y2={18} key={2}/>,
  ],
};

const Icon = ({ icon, size, className, onClick }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1}
    onClick={onClick}
  >
    {icon}
  </svg>
);

Icon.defaultProps = {
  size: 80
}

export default Icon;
