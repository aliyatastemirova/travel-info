import React from "react";
import PropTypes from "prop-types";

const Info = ({ title, description, horizontal }) => {
  return (
    <>
      <div className="rounded-2xl bg-orange-100">
        <h1 className="text-xl text-orange-600 text-bold p-1 pl-3">{title}</h1>
      </div>
      <div className={horizontal ? "flex flex-row" : "flex flex-col space-y-2"}>
        {description.map((item, index) =>
          Array.isArray(item) && item.length > 1 ? (
            <>
              <h3 className="text-slate-400 font-bold p-1 pl-3">{item[0]}</h3>
              <p key={index} className="text-slate-400 p-1 pl-3">
                {item[1]}
              </p>
            </>
          ) : (
            <p key={index} className="text-slate-400 p-1 pl-3">
              {item}
            </p>
          )
        )}
      </div>
    </>
  );
};

Info.defaultProps = {
  horizontal: true,
};

export default Info;
