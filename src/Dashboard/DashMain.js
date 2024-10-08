import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import ChatsDash from './ChatsDash';
import DashAccrd from './DashAccord';
import DashUsers from './DashUsers';
import ChartPie from './ChartPie';
import AreaChartDash from './AreaChartDash';


export default function BasicGrid() {
  return (
    <div className='pt-4 h-full w-full px-10 bg-gray-100'>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid xs={10}>
            <ChatsDash />
          </Grid>
          <Grid xs={2}>
            <ChartPie />
          </Grid>
          <Grid xs={4}>
           <DashAccrd/>
          </Grid>
          <Grid xs={8}>
             <AreaChartDash/>
          </Grid>
          <Grid xs={12}>
            <DashUsers/>
          </Grid>
        </Grid>
      </Box>
    </div>
  )
}