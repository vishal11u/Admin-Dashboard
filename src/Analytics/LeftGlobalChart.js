import React from 'react';
import { Chart } from "react-google-charts";

export const data = [
  ["Country", "Popularity"],
  ["Germany", 200],
  ["United States", 300],
  ["Brazil", 400],
  ["Canada", 500],
  ["France", 600],
  ["RU", 700],
  ["India", 900]
];

function LeftGlobalChart() {
  return (
    <div className='shadow-lg border rounded-md bg-white h-[45vh]'>
      <Chart
        chartEvents={[
          {
            eventName: "select",  
            callback: ({ chartWrapper }) => {
              const chart = chartWrapper.getChart();
              const selection = chart.getSelection();
              if (selection.length === 0) return;
              const region = data[selection[0].row + 1];
              console.log("Selected : " + region);
            },
          },
        ]}
        chartType="GeoChart"
        width="100%"
        height="320px"
        data={data}
      />
    </div>
  )
}

export default LeftGlobalChart