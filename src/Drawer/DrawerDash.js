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
import Logo from './hospital-logo-vector-27-removebg-preview.png'
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
import { NavLink } from 'react-router-dom';
import { FaEyeLowVision } from "react-icons/fa6";
import Date from '../Component/Date';
import UserImg from '../Component/AvatarDash';
import Logout from '../Component/Lofout';
import { RiMenu2Line } from "react-icons/ri";
import TemplateQue from '../Drawer/TemplateQue';
import Hospital from '../Component/Hospital';
import Collapse from "@mui/material/Collapse";
import { BiFullscreen } from "react-icons/bi";
import DrawerBadge from '../Component/DrawerBadge';
import Regstration from './assets/website.png';
import DashBoard from './assets/dashboard (2).png';
import Appointment from './assets/appointment.png';
import Feedback from './assets/feedback.png';
import Message from './assets/message.png';
import QR from './assets/qr-code.png';
import Calendar from './assets/calendar.png';
import Analatics from './assets/analysis.png';
import Settings from './assets/account.png';
import Users from './assets/user.png';
import Details from './assets/svg.png';
import DashMain from '../Dashboard/DashMain';
import SearchDash from './SearchDash';
import Calender from './Calender/Calender';
import Setting from './Setting/Setting';
import AnalyticsMain from '../Analytics/AnalyticsMain';
import QRgen from '../Component/QRgen';
import ScrollUp from '../ScroppUp';
import DarkLight from './DarkLight';
import Login from '../Login/Login'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import Registration from '../Login/registration/Registration';

const data = [
    {
        id: 1,
        path: '/',
        name: "Dashboard",
        icon: `${DashBoard}`
    },
    {
        id: 2,
        path: "/registration",
        name: "Registration",
        icon: `${Regstration}`
    },
    {
        id: 3,
        path: "/appointment",
        name: "Appointment",
        icon: `${Appointment}`
    },
    {
        id: 4,
        name: "Activities ",
        icon: `${Users}`,
        subMenus: [
            {
                id: 5,
                functionality: "Feedback",
                path: "/feedback/staff",
                icon: `${Feedback}`,
            },
            {
                id: 6,
                functionality: "Answer Review",
                path: "/feedback/answer",
                icon: `${Message}`,
            },
            {
                id: 7,
                functionality: "QR Generate",
                path: "/feedback/qr",
                icon: `${QR}`,
            },
        ],
    },
    {
        id: 8,
        path: "/patient",
        name: "Patient Details",
        icon: `${Details}`
    },
    {
        id: 9,
        path: "/calender",
        name: "Calender",
        icon: `${Calendar}`
    },
    {
        id: 10,
        path: "/analytics",
        name: "Analytics",
        icon: `${Analatics}`
    },
    {
        id: 11,
        path: "/setting",
        name: "Settings",
        icon: `${Settings}`
    },
]

const drawerWidth = 220;
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
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const [collaps, setCollaps] = React.useState(false);
    const [fullScreen, setFullScreen] = React.useState(true)
    const [userLogin, setUserLogin] = React.useState(true)
    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const collapesOpen = () => {
        setCollaps(!collaps)
    }

    const FullScreen = () => {
        setFullScreen(!fullScreen);
        console.log("fullScreen", fullScreen);
        if (fullScreen) {
            console.log("iffullScreen");
            document.body.requestFullscreen();
        } else {
            console.log("elsefullScreen", fullScreen);
            document.exitFullscreen();
        }
    };
    console.log("userLogin", userLogin);
    return (
        <>
            {/* {userLogin ?
                <Login userLogin={userLogin} setUserLogin={setUserLogin} /> : */}
                <Box sx={{ display: 'flex' }}>
                    <CssBaseline />
                    <AppBar sx={{ backgroundColor: "#3B3C36" }} position="fixed" open={open}>
                        <Toolbar >
                            <IconButton color="inherit" aria-label="open drawer" onClick={handleDrawerOpen} edge="start"
                                sx={{ marginRight: 5, ...(open && { display: 'none' }), }} >
                                <RiMenu2Line size={30} />
                            </IconButton>
                            <div className='flex justify-between w-full items-center'>
                                <Typography className='flex items-center space-x-2'>
                                    <img className='h-10' src={Logo} alt='' />
                                    <h1 className='text-[20px] flex items-center'><span className='text-purple-600 text-[30px] font-semibold'>V</span>- Healthcare.</h1>
                                </Typography>
                                <Typography sx={{ display: "flex", alignItems: "center" }}>
                                    <SearchDash />
                                    <DarkLight />
                                    <BiFullscreen className='cursor-pointer mr-3' onClick={FullScreen} size={30} />
                                    <DrawerBadge />
                                    <Date />
                                    <UserImg />
                                    <Logout />
                                </Typography>
                            </div>
                        </Toolbar>
                    </AppBar>

                    <Drawer variant="permanent" open={open} >
                        <DrawerHeader>
                            <IconButton onClick={handleDrawerClose}>
                                {theme.direction === 'rtl' ? <ChevronRightIcon /> : <FaEyeLowVision size={30} />}
                            </IconButton>
                        </DrawerHeader>
                        <Divider />
                        <List >
                            {data.map((text) => (
                                <div key={text.id}>
                                    <NavLink to={text.path} disablePadding sx={{ display: 'block' }}>
                                        <ListItemButton
                                            sx={{ minHeight: 48, justifyContent: open ? 'initial' : 'center', px: 2.5, }}
                                            onClick={text.subMenus ? collapesOpen : undefined} >
                                            <ListItemIcon
                                                sx={{ minWidth: 0, mr: open ? 2 : 'auto', justifyContent: 'center', color: "#1F2933" }}>
                                                <img className='h-7 w-7' src={text.icon} alt='' />
                                            </ListItemIcon>
                                            <ListItemText primary={text.name} sx={{ opacity: open ? 1 : 0, color: "#1F2933" }} />
                                            {text.subMenus && (
                                                <IconButton sx={{ ml: 'auto', display: open && text.subMenus ? 'block' : 'none' }} >
                                                    {text.subMenus && (collaps ? <FaChevronUp size={14} /> : <FaChevronDown size={14} />)}
                                                </IconButton>
                                            )}
                                        </ListItemButton>
                                    </NavLink>
                                    <Collapse timeout="auto" unmountOnExit in={collaps} >
                                        <List component="div" disablePadding >
                                            {text.subMenus && text.subMenus.map((subMenu) => (
                                                <NavLink to={subMenu.path} key={subMenu.id} disablePadding sx={{ display: 'block' }}>
                                                    <ListItemButton sx={{ pl: 5.5, minHeight: 48, }}>
                                                        <ListItemIcon sx={{mr:-1.5}}>
                                                            <img className='h-7 w-7' src={subMenu.icon} alt='' />
                                                        </ListItemIcon>
                                                        <ListItemText primary={subMenu.functionality} />
                                                    </ListItemButton>
                                                </NavLink>
                                            ))}
                                        </List>
                                    </Collapse>
                                </div>
                            ))}
                        </List>
                    </Drawer>

                    <Box component="main" sx={{ flexGrow: 1 }}>
                        <DrawerHeader />
                        <ScrollUp />
                        <Routes>
                            <Route path='/' element={<DashMain />} />
                            <Route path='/appointment' element={<Dashboard />} />
                            <Route path='/registration' element={<Registration />} />
                            <Route path='/feedback' element={<FeedBack />}>
                                <Route path='consult' index element={<Consultant />} />
                                <Route path='staff' element={<Staff />} />
                                <Route path='patient' element={<Petient />} />
                            </Route>
                            <Route path='/feedback/answer' element={<TemplateQue />} />
                            <Route path='/feedback/qr' element={<QRgen />} />
                            <Route path='/patient' element={<Hospital />} />
                            <Route path='/calender' element={<Calender />} />
                            <Route path='/setting' element={<Setting />} />
                            <Route path='/analytics' element={<AnalyticsMain />} />
                        </Routes>
                    </Box>
                </Box>
            {/* } */}
        </>
    );
}
