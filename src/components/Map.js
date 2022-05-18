import { Map, Marker } from "pigeon-maps";
import React from "react";
import PropTypes from "prop-types";

const CountryMap = ({ pos }) => {
  const position = pos.length ? [...pos] : [50.879, 4.6997];
  return (
    <Map height={300} defaultCenter={position} defaultZoom={8}>
      <Marker width={50} anchor={position} />
    </Map>
  );
};

CountryMap.propTypes = {
  pos: PropTypes.array.isRequired,
};

export default CountryMap;
