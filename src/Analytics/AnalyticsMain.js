import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import LeftCard from './LeftCard';
import RightChart from './RightChart';
import LeftGlobalChart from './LeftGlobalChart';
import RightColoum from './RightColoum';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function BasicGrid() {
  return (
    <div className='pt-2.5 w-full h-full px-8 bg-gray-100'>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid xs={5}>
            <LeftCard />
          </Grid>
          <Grid xs={7}>
            <RightChart />
          </Grid>
          <Grid xs={8}>
            <LeftGlobalChart />
          </Grid>
          <Grid xs={4}>
            <RightColoum />
          </Grid>
        </Grid>
      </Box>
    </div>
  )
}