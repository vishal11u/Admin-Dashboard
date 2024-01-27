import React from 'react';
import { Chart } from "react-google-charts";

export const data = [
    ["Year", "Sales", "Expenses", "Profit"],
    ["2014", 1000, 400, 200],
    ["2015", 1170, 460, 250],
    ["2016", 660, 1120, 300],
    ["2017", 1030, 540, 350],
    ["2018", 1000, 400, 200],
    ["2019", 1170, 460, 250],
    ["2020", 1000, 400, 200],
    ["2021", 1170, 460, 250],
    ["2022", 1000, 400, 200],
    ["2023", 1170, 460, 250],
    ["2024", 660, 1120, 300],
];

export const options = {
    chart: {
        title: "Company Performance",
        subtitle: "Sales, Expenses, and Profit: 2014-2017",
    },
    
};

function DashCart() {
    return (
        <div className='shadow-lg border rounded-md text-center bg-white h-[60vh] p-6'>
            <Chart
                chartType="Bar"
                width="100%"
                height="380px"
                data={data}
                options={options}
            />
        </div>
    )
}

export default DashCart