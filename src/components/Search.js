import PropTypes from "prop-types";
import Button from "./Button";
import Dropdown from "./Dropdown";

const Search = ({ title }) => {
  return (
    <div className="flex flex-col space-y-4 w-full items-center">
      <h1 className="text-xl text-slate-400">{title}</h1>
      <div className="flex flex-col items-center space-y-6 w-3/4 md:flex-row md:space-x-4 md:space-y-0 md:items-stretch">
        <Dropdown
          items={[
            { id: "test", name: "test" },
            { id: "blabla", name: "blabla" },
          ]}
        />
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
};

export default Search;
