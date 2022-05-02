import PropTypes from "prop-types";

const Button = ({ text }) => {
  return (
    <button className="bg-orange-500 hover:bg-orange-600 text-white rounded-2xl py-2 px-1 uppercase w-3/4 text-center md:w-1/2">
      {text}
    </button>
  );
};

Button.defaultProps = {
  text: "Submit",
};

Button.propTypes = {
  text: PropTypes.string,
};

export default Button;
