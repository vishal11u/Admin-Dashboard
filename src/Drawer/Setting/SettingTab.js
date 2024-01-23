import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import SettingOne from './SettingOne';
import SettingTwo from './SettingTwo';
import SettingThree from './SettingThree';
import SettingFour from './SettingFour';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import BadgeIcon from '@mui/icons-material/Badge';
import LockResetIcon from '@mui/icons-material/LockReset';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', backgroundColor: "white", borderRadius: "5px", boxShadow: "rgba(0, 0, 0, 0.10) 0px 5px 15px;", padding: "10px 30px", gap: "20px" }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab icon={<AccountCircleIcon />} iconPosition="start" label="Profile" {...a11yProps(0)} />
          <Tab icon={<ManageAccountsIcon />} iconPosition="start" label="Personal Details" {...a11yProps(1)} />
          <Tab icon={<BadgeIcon />} iconPosition="start" label="My Account" {...a11yProps(2)} />
          <Tab icon={<LockResetIcon />} iconPosition="start" label="Change Pasword" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <SettingOne />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <SettingTwo />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <SettingThree />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        <SettingFour />
      </CustomTabPanel>
    </Box>
  );
}