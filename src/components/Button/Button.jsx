import PropTypes from "prop-types";
const Button = ({ children = "Star Applying", full }) => {

  return (
    <div>
      <button
        className={`btn lg:btn-lg bg-btn-grad text-white lg:font-extrabold font-semibold lg:text-xl ${
          full && "w-full"
        }`}
      >
        {children}
      </button>
    </div>
  );
};

Button.propTypes = {
  children: PropTypes.string,
  full: PropTypes.bool,
};

export default Button;
