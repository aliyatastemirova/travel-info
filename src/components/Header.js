import PropTypes from "prop-types";

const Header = ({ title }) => {
  return (
    <header className="font-bold uppercase text-2xl">
      <h1>{title}</h1>
    </header>
  );
};

Header.defaultProps = {
  title: "Explore Travel Information",
};

Header.propTypes = {
  title: PropTypes.string,
};

export default Header;
