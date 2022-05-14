import Info from "./Info";
import PropTypes from "prop-types";

const Country = ({ countryData }) => {
  countryData ? console.log(countryData) : console.log("No data");
  // countryData ? const languages = countryData.languages?.map((obj) => obj.language) : console.log("No data");

  return countryData ? (
    <div id="countryData" className="space-y-5 text-left">
      <h1 className="font-bold text-orange-500 text-xl pl-3">
        {countryData.names?.full}
      </h1>
      <Info title="Language" description={"test"} />
    </div>
  ) : null;
};

export default Country;
