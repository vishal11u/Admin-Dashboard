import React from 'react';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Box } from '@mui/material';

function SettingFour1() {
  const [showPassword, setShowPassword] = React.useState(false);
  const [password, setPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleShowPassword = () => setPassword((display) => !display)

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handlePassword = (event) => {
    event.preventDefault();
  }

  return (
    <div className='px-5 py-4 text-left'>
      <FormControl sx={{ m: 1, width: '50ch' }} variant="outlined">
        <InputLabel htmlFor="outlined-adornment-password">Old Password</InputLabel>
        <OutlinedInput id="outlined-adornment-password"
          type={showPassword ? 'text' : 'password'}
          endAdornment={
            <InputAdornment position="end">
              <IconButton aria-label="toggle password visibility"
                onClick={handleClickShowPassword} onMouseDown={handleMouseDownPassword} edge="end">
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>}
          label="Old Password" />
      </FormControl>
      <Box sx={{ display: "flex", alignItems: "center",marginTop:"1rem" }}>
        <FormControl sx={{ m: 1, width: '50ch' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">New Password</InputLabel>
          <OutlinedInput id="outlined-adornment-password"
            type={password ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton aria-label="toggle password visibility"
                  onClick={handlePassword} onMouseDown={handleShowPassword} edge="end">
                  {password ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>}
            label="New Password" />
        </FormControl>
        <FormControl sx={{ m: 1, width: '50ch' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Confirm Password</InputLabel>
          <OutlinedInput id="outlined-adornment-password"
            type={password ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton aria-label="toggle password visibility"
                  onClick={handlePassword} onMouseDown={handleShowPassword} edge="end">
                  {password ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>}
            label="Confirm Password" />
        </FormControl>
      </Box>
    </div>
  )
}

export default SettingFour1;