import React from "react";
import PropTypes from "prop-types";

const Button = ({
  label,
  onClick,
  type = "button",
  className = "",
  disabled = false,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-4 py-2 rounded-3xl transition duration-300 ease-in-out 
                  bg-gray-700 text-white hover:bg-black 
                  disabled:bg-gray-400 disabled:cursor-not-allowed disabled:border ${className}`}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  className: PropTypes.string,
  disabled: PropTypes.bool,
};

export default Button;
