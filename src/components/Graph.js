import React from "react";
import Chart from "react-apexcharts";

const Graph = ({ weatherData }) => {
  const minSeries = Object.keys(weatherData).map((item) =>
    parseFloat(weatherData[item]["tMax"]).toFixed(2)
  );
  const avgSeries = Object.keys(weatherData).map((item) =>
    parseFloat(weatherData[item]["tAvg"]).toFixed(2)
  );
  const maxSeries = Object.keys(weatherData).map((item) =>
    parseFloat(weatherData[item]["tMin"]).toFixed(2)
  );

  const state = {
    options: {
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
      },
      yaxis: {
        labels: {
          formatter: function (val) {
            return val + "°C";
          },
        },
      },
    },
    series: [
      {
        name: "Minimum",
        data: minSeries,
      },
      {
        name: "Average",
        data: avgSeries,
      },
      {
        name: "Maximum",
        data: maxSeries,
      },
    ],
    markers: {
      size: 1,
      strokeWidth: 1,
    },
    legend: {
      show: true,
    },
    stroke: {
      width: 0.5,
    },
  };
  return (
    <div className="app">
      <div className="row">
        <div className="mixed-chart">
          <Chart
            options={state.options}
            series={state.series}
            type="line"
            width="500"
          />
        </div>
      </div>
    </div>
  );
};

export default Graph;
