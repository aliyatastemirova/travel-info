import React from "react";

const Info = ({ title, description }) => {
  return (
    <div className="rounded-2xl bg-orange-200">
      <h1 className="text-xl text-orange-600 text-bold p-1 pl-3">{title}</h1>
      <p className="text-slate-400">{description}</p>
    </div>
  );
};

export default Info;
