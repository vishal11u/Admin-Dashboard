import React from 'react';
import { Chart } from "react-google-charts";

export const data = [
  ["City", "2024 Patient", "2010 Patient"],
  ["Mumbai, MI", 8175000, 8008000],
  ["Chennai, CSK", 3792000, 3694000],
  ["Pune, PN", 2695000, 2896000],
  ["Delhi, DL", 2099000, 1953000],
  ["Banglore, BN", 1526000, 1517000],
];

export const options = {
  title: "Patients in Largest India Cities",
  chartArea: { width: "60%" },
  hAxis: {
    title: "Total Patient",
    minValue: 0,
  },
};

function RightChart() {
  return (
    <div className='border h-[40vh] rounded-md shadow-lg bg-white'>
      <Chart
        chartType="BarChart"
        width="100%"
        height="280px"
        data={data}
        options={options}
      />
    </div>
  )
}

export default RightChart