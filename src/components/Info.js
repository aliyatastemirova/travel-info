import React from "react";

const Info = ({ title, description }) => {
  return (
    <>
      <div className="rounded-2xl bg-orange-100">
        <h1 className="text-xl text-orange-600 text-bold p-1 pl-3">{title}</h1>
      </div>
      <div className="flex flex-row">
        {description.map((item) => (
          <p className="text-slate-400 p-1 pl-3">{item}</p>
        ))}
      </div>
    </>
  );
};

export default Info;
