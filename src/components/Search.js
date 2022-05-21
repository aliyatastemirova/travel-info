import PropTypes from "prop-types";
import Dropdown from "./Dropdown";

const Search = ({ title, countries, onSubmit }) => {
  return (
    <div className="m-auto w-64 flex flex-col space-y-6 items-center md:w-full">
      <h1 className="text-xl text-slate-400">{title}</h1>
      <div className="flex flex-col items-center space-y-6 w-3/4 md:flex-row md:space-x-4 md:space-y-0 md:items-stretch">
        <Dropdown countries={countries} onSubmit={onSubmit} />
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
