import React from 'react';
import PropTypes from 'prop-types';
import './Button.css'; // Import the CSS file for the component

const Button = ({ onClick, icon, text, showDropdown }) => {
  return (
    <button onClick={onClick} className="button">
      {icon && <span className="icon">{icon}</span>}
      <span className="text">{text}</span>
      {showDropdown && <span className="dropdown">
      <svg
                width="12"
                height="7"
                viewBox="0 0 12 7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.5 1.38L6 5.38L1.5 1.38"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
        </span>}
    </button>
  );
};

Button.propTypes = {
  icon: PropTypes.element,
  text: PropTypes.string.isRequired,
  showDropdown: PropTypes.bool
};

export default Button;
