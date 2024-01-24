import React from "react";
import { Chart } from "react-google-charts";

export const data = [
    ["City", "Speakers (in millions)"],
    ["Mumbai", 13],
    ["Satara", 83],
    ["Pune", 1.4],
    ["Kolhapur", 2.3],
    ["Nashik", 46],
    ["Nagpur", 300],
    ["Delhi", 38],
    ["Haryana", 5.5],
    ["Sangli", 5],
    ["Odisa", 20],
    ["Banglore", 33],
    ["Ladhak", 1.5],
    ["Marathi", 72],
    ["Nepali", 2.9],
    ["Oriya", 33],
    ["Punjabi", 29],
    ["Sanskrit", 0.01],
    ["Santhali", 6.5],
    ["Sindhi", 2.5],
    ["Tamil", 61],
    ["Telugu", 74],
    ["Urdu", 52],
];

export const options = {
    title: "Patient's languages",
    legend: "yes",
    pieSliceText: "label",
    slices: {
        4: { offset: 0.2 },
        12: { offset: 0.3 },
        14: { offset: 0.4 },
        15: { offset: 0.5 },
    },
};

export default function RightColoum() {
    return (
        <div className='shadow-lg border rounded-md bg-white h-[45vh] p-2'>
            <Chart
                chartType="PieChart"
                data={data}
                options={options}
                width={"100%"}
                height={"315px"}
            />
        </div>
    );
}
