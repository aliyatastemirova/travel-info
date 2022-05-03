import PropTypes from "prop-types";

const Button = ({ text }) => {
  return (
    <button className="bg-orange-500 hover:bg-orange-600 text-white rounded-2xl py-2 px-1 font-bold w-32 text-center">
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
