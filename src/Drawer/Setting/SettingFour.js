import React from 'react';
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import SettingThree1 from "./SettingNest/SettingThree1";
import SettingThree2 from "./SettingNest/SettingThree2";
import SettingFour1 from './SettingNest/SettingFour1';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function SettingFour() {
  return (
      <Box sx={{ flexGrow: 1 }}>
        <Grid>
          <Grid item xs={12}>
            <Item>
              <SettingFour1/>
            </Item>
          </Grid>
        </Grid>
      </Box>
  )
}

export default SettingFour;