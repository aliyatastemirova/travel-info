import Info from "./Info";
import PropTypes from "prop-types";

const Country = ({ countryData }) => {
  const languages = countryData.language?.map((obj) => obj.language).join(", ");

  return countryData ? (
    <div id="countryData" className="space-y-4 text-left pb-10">
      <h1 className="font-bold text-orange-500 text-xl pl-3">
        {countryData.names?.full}
      </h1>
      <div className="flex flex-row">
        <p className="text-slate-400 p-1 pl-3">
          ISO2: {countryData.names.iso2}
        </p>
        <p className="text-slate-400 p-1 pl-3">
          ISO3: {countryData.names.iso3}
        </p>
        <p className="text-slate-400 p-1 pl-3">
          Phone country code: +{countryData.telephone.calling_code}
        </p>
      </div>
      <Info title="Language" description={[languages]} />
      <Info title="Currency" description={[countryData.currency.name]} />
      <Info
        title="Electricity"
        description={[
          `Frequency: ${countryData.electricity.frequency}`,
          `Voltage: ${countryData.electricity.voltage}`,
          `Plugs: ${countryData.electricity.plugs.join(", ")}`,
        ]}
      />
      <Info
        title="Water"
        description={[`Water quality is ${countryData.water.short}`]}
      />
      <Info
        title="Vaccinations"
        description={
          countryData.vaccinations.length
            ? [countryData.vaccinations.join(", ")]
            : ["No vaccinations required"]
        }
      />
      <Info
        title="Emergency phone numbers"
        description={[
          `Police: ${countryData.telephone.police}`,
          `Ambulance: ${countryData.telephone.ambulance}`,
          `Fire: ${countryData.telephone.fire}`,
        ]}
      />
    </div>
  ) : null;
};

Country.propTypes = {
  countryData: PropTypes.object.isRequired,
};

export default Country;
