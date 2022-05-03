import PropTypes from "prop-types";

const Country = ({ country }) => {
  return <div>{country}</div>;
};

Country.propTypes = {
  country: PropTypes.string.isRequired,
};

export default Country;
