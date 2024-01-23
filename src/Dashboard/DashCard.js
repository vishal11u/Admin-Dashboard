import React from 'react';
import { Chart } from "react-google-charts";

export const data = [
  ["Day", "", "", "", ""],
  ["Mon", 20, 28, 38, 45],
  ["Tue", 31, 38, 55, 66],
  ["Wed", 50, 55, 77, 80],
  ["Thu", 77, 77, 66, 50],
  ["Fri", 68, 66, 22, 15],
];

export const options = {
  legend: "none",
  bar: { groupWidth: "100%" },
  candlestick: {
    fallingColor: { strokeWidth: 0, fill: "#a52714" },
    risingColor: { strokeWidth: 0, fill: "#0f9d58" },
  },
};

function DashCard() {
  return (
    <div className='border h-[21vh] rounded-md shadow-lg bg-white'>
      <Chart
        chartType="CandlestickChart"
        width="100%"
        height="150px"
        data={data}
        options={options}
      />
    </div>
  )
}

export default DashCard