import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';

export default function BasicArea() {
    return (
        <div className='shadow-lg border rounded-md text-center bg-white h-[60vh] overflow-hidden'>
            <LineChart
                xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
                series={[
                    {
                        data: [2, 5.5, 2, 8.5, 1.5, 5,],
                        area: true,
                    },
                ]}
                width={910}
                height={400}
            />
        </div>
    );
}