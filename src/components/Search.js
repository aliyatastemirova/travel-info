import PropTypes from "prop-types";
import Button from "./Button";
import Dropdown from "./Dropdown";

const Search = ({ title, countries }) => {
  return (
    <div className="flex flex-col space-y-6 w-full items-center">
      <h1 className="text-xl text-slate-400">{title}</h1>
      <div className="flex flex-col items-center space-y-6 w-3/4 md:flex-row md:space-x-4 md:space-y-0 md:items-stretch">
        <Dropdown items={countries} />
        <Button />
      </div>
    </div>
  );
};

Search.defaultProps = {
  title: "Choose a country",
};

Search.propTypes = {
  title: PropTypes.string,
  countries: PropTypes.array,
};

export default Search;
