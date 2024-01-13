import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import { FaUserDoctor } from "react-icons/fa6";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Routes, Route } from 'react-router-dom';
import FeedBack from '../Component/FeedBack';
import Petient from '../Component/Petient';
import Consultant from '../Component/Consultant';
import Staff from '../Component/Staff';
import Dashboard from '../Component/DashBoard';
import { MdDashboard } from "react-icons/md";
import { NavLink } from 'react-router-dom';
import { FaHospitalUser } from "react-icons/fa6";
import { FaEyeLowVision } from "react-icons/fa6";
import Date from '../Component/Date';
import User from '../Component/User';
import UserImg from '../Component/AvatarDash';
import Logout from '../Component/Lofout';
import { RiMenu2Line } from "react-icons/ri";

const drawerWidth = 190;

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);

export default function MiniDrawer() {
    const data = [
        {
            path: "/",
            name: "Feedback",
            icon: <FaUserDoctor size={22} />
        },

        {
            path: '/home',
            name: "Dashboard ",
            icon: <MdDashboard size={22} />
        },
        {
            path: "/dash",
            name: "Analytics",
            icon: <FaHospitalUser size={22} />
        }
    ]
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar sx={{backgroundColor:""}} position="fixed" open={open}>
                <Toolbar >
                    <IconButton color="inherit" aria-label="open drawer" onClick={handleDrawerOpen} edge="start"
                        sx={{ marginRight: 5, ...(open && { display: 'none' }), }} >
                        <RiMenu2Line />
                    </IconButton>
                    <Typography sx={{ display: "flex" }}>
                        <Date />
                        <User />
                        <UserImg />
                        <Logout />
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer variant="permanent" open={open} >
                <DrawerHeader>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'rtl' ? <ChevronRightIcon /> : <FaEyeLowVision />}
                    </IconButton>
                </DrawerHeader>
                <Divider />
                <List>
                    {data.map((text) => (
                        <NavLink to={text.path} key={text} disablePadding sx={{ display: 'block' }}>
                            <ListItemButton
                                sx={{ minHeight: 48, justifyContent: open ? 'initial' : 'center', px: 2.5, }}>
                                <ListItemIcon
                                    sx={{ minWidth: 0, mr: open ? 3 : 'auto', justifyContent: 'center', }}>
                                    {text.icon}
                                </ListItemIcon>
                                <ListItemText primary={text.name} sx={{ opacity: open ? 1 : 0 }} />
                            </ListItemButton>
                        </NavLink>
                    ))}
                </List>
            </Drawer>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <DrawerHeader />
                <Routes>
                    <Route path='/home' element={<Dashboard />} />
                    <Route path='/' element={<FeedBack />}>
                        <Route path='consult' element={<Consultant />} />
                        <Route path='staff' element={<Staff />} />
                        <Route path='patient' element={<Petient />} />
                    </Route>
                </Routes>
            </Box>
        </Box>
    );
}