import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import SettingThree1 from "./SettingNest/SettingThree1";
import SettingThree2 from "./SettingNest/SettingThree2";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function BasicGrid1() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid>
        <Grid item xs={12}>
          <Item>
            <SettingThree1 />
          </Item>
        </Grid>
      </Grid>
      <Grid sx={{ marginTop: "1rem" }}>
        <Grid item xs={12}>
          <Item>
            <SettingThree2 />
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
