import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Logo from './hospital-logo-vector-27-removebg-preview.png'
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
import Date from '../Component/Date';
import UserImg from '../Component/AvatarDash';
import Logout from '../Component/Lofout';
import { RiMenu2Line } from "react-icons/ri";
import TemplateQue from '../Drawer/TemplateQue';
import Hospital from '../Component/Hospital';
import PatientForm from '../CRUD/PatientForm';
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
import CityDrop from '../Component/dropdown/CityDrop';
import StateDrop from '../Component/dropdown/StateDrop';
import CountryDrop from '../Component/dropdown/ApiDropDown';
import AnalyticsMain from '../Analytics/AnalyticsMain';
import QRgen from '../Component/QRgen';
import ScrollUp from '../ScroppUp';
import DarkLight from './DarkLight';
// import Login from '../Login/Login';
import { FaCircleChevronLeft } from "react-icons/fa6";
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import Registration from '../Login/registration/Registration';
import Tooltip from '@mui/material/Tooltip';
import BillingAnalyze from '../Analytics/BillingAnalyze';
import UsersDoctor from '../CRUD/UsersDoctor';
import FeedBackAnal from '../Analytics/FeedBackAnal';

const data = [
    {
        id: 1,
        path: '/',
        name: "Dashboard",
        icon: `${DashBoard}`,
    },
    {
        id: 2,
        name: "Registration",
        icon: `${Regstration}`,
        subMenus: [
            {
                id: 3,
                functionality: "Pre Registration",
                path: "/registration/preregistration",
                icon: `${Feedback}`,
            },
        ]
    },
    {
        id: 4,
        name: "Appointment",
        icon: `${Appointment}`,
        subMenus: [
            {
                id: 5,
                functionality: "Book Appointment",
                path: "/appointment/bookappointment",
                icon: `${Feedback}`,
            },
        ]
    },
    {
        id: 6,
        name: "Activities ",
        icon: `${Users}`,
        subMenus: [
            {
                id: 7,
                functionality: "Feedback",
                path: "activity/feedback/staff",
                icon: `${Feedback}`,
            },
            {
                id: 8,
                functionality: "Answer Review",
                path: "/activity/feedback/answer",
                icon: `${Message}`,
            },
            {
                id: 9,
                functionality: "QR Generate",
                path: "/activity/feedback/qr",
                icon: `${QR}`,
            },
        ],
    },
    {
        id: 10,
        name: "Details",
        icon: `${Details}`,
        subMenus: [
            {
                id: 12,
                functionality: "Patient Details",
                path: "/details/patientdetails",
                icon: `${Feedback}`,
            },
        ]
    },
    {
        id: 13,
        name: "Analytics",
        icon: `${Analatics}`,
        subMenus: [
            {
                id: 14,
                functionality: "Patient Analysis",
                path: "/analytics/patientanalysis",
                icon: `${Feedback}`,
            },
            {
                id: 15,
                functionality: "Billing",
                path: "/analytics/billing",
                icon: `${Feedback}`,
            },
            {
                id: 16,
                functionality: "Feedback Analysis",
                path: "/analytics/feedbackanalysis",
                icon: `${Feedback}`,
            }
        ]
    },
    {
        id: 17,
        name: "Masters",
        icon: `${Settings}`,
        subMenus: [
            {
                id: 18,
                functionality: "Country Master",
                path: "/setting/staffprofile/Country",
                icon: `${Feedback}`,
            },
            {
                id: 19,
                functionality: "State Master",
                path: "/setting/staffprofile/State",
                icon: `${Feedback}`,
            },
            {
                id: 20,
                functionality: "City Master",
                path: "/setting/staffprofile/City",
                icon: `${Feedback}`,
            }
        ]
    },
    {
        id: 20,
        path: "/hospital/calender",
        name: "Calender",
        icon: `${Calendar}`,
    }
]

const drawerWidth = 250;
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
    const [openCollapseId, setOpenCollapseId] = React.useState([]);
    const [fullScreen, setFullScreen] = React.useState(true);
    const [isClicked, setIsClicked] = React.useState(false);

    const handleClick = (subMenuId) => {
        if (isClicked === subMenuId) {
            setIsClicked(null);
        } else {
            setIsClicked(subMenuId);
        }
    };

    const handleDrawerOpen = () => {
        setOpen(!open);
        setOpenCollapseId([])
    };

    const handleDrawerClose = () => {
        setOpen(false);
        if (window.innerWidth < 768) {
            window.location.reload();
        }
        setOpenCollapseId([]);
    };

    // React.useEffect(() => {
    //     console.log("openCollapseIdopenCollapseId", openCollapseId);
    // }, [openCollapseId])

    const toggleCollapse = (id) => {
        let ids = [...openCollapseId]
        if (!ids.includes(id)) {
            ids.push(id)
            setOpenCollapseId(ids)
        } else {
            let modifiedIds = ids.filter((prev) => prev !== id)
            setOpenCollapseId(modifiedIds)
        }
        setOpen(true);
    };

    const FullScreen = () => {
        setFullScreen(!fullScreen);
        if (fullScreen) {
            document.body.requestFullscreen();
        } else {
            document.exitFullscreen();
        }
    };

    return (
        <>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <AppBar sx={{ backgroundColor: "#3B3C36" }} position="fixed" open={open}>
                    <Toolbar>
                        <Tooltip title='Open' placement="bottom" arrow>
                            <IconButton color="inherit" aria-label="open drawer" onClick={handleDrawerOpen} edge="start"
                                sx={{ marginRight: 5, ...(open && { display: 'none' }), }}>
                                <RiMenu2Line size={30} />
                            </IconButton>
                        </Tooltip>
                        <div className='flex justify-between w-full items-center'>
                            <Typography>
                                {open ? null : (
                                    <div className='flex justify-center items-center mx-4'>
                                        <img className='h-9 mr-0.5' src={Logo} alt='' />
                                        <span className='text-purple-600 text-[17px] flex justify-center items-center font-semibold'><span className='text-yellow-400 text-[25px]'>V-</span>health.</span>
                                    </div>
                                )}
                            </Typography>
                            <Typography sx={{ display: "flex", alignItems: "center", gap: '5px' }}>
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

                <Drawer variant="permanent" open={open}  >
                    <DrawerHeader>
                        <div className='flex justify-center items-center mx-4'>
                            <img className='h-9 mr-0.5' src={Logo} alt='' />
                            <span className='text-purple-600 text-[17px] flex justify-center items-center font-semibold'><span className='text-yellow-400 text-[25px]'>V-</span>health.</span>
                        </div>
                        <Tooltip title='Close' placement="bottom" arrow>
                            <IconButton onClick={handleDrawerClose}>
                                {theme.direction === 'rtl' ? '' : <FaCircleChevronLeft className='text-orange-500' size={24} />}
                            </IconButton>
                        </Tooltip>
                    </DrawerHeader>
                    <List>
                        {data.map((text, i) => (
                            <div key={text.id}>
                                <Tooltip title={text.name} placement="right" arrow>
                                    <NavLink to={text.path} disablePadding sx={{ display: 'block' }}>
                                        <ListItemButton
                                            sx={{ minHeight: 48, justifyContent: open ? 'initial' : 'center', px: 2 }}
                                            onClick={() => text.subMenus && toggleCollapse(text.id)}>
                                            <ListItemIcon
                                                sx={{ minWidth: 0, mr: open ? 2 : 'auto', justifyContent: 'center', color: "#1F2933" }}>
                                                <img className='h-7 w-7' src={text.icon} alt='' />
                                            </ListItemIcon>
                                            <ListItemText primary={text.name} sx={{ opacity: open ? 1 : 0, color: "#1F2933" }} />
                                            {text.subMenus && (
                                                <IconButton sx={{ ml: 'auto', display: open && text.subMenus ? 'block' : 'none' }} >
                                                    {text.subMenus && (openCollapseId.includes(text.id) ? <FaChevronUp size={14} /> : <FaChevronDown size={14} />)}
                                                </IconButton>
                                            )}
                                        </ListItemButton>
                                    </NavLink>
                                </Tooltip>
                                <Collapse timeout="auto" unmountOnExit in={openCollapseId.includes(text.id)}>
                                    <List component="div" disablePadding >
                                        {text.subMenus && text.subMenus.map((subMenu) => (
                                            <NavLink to={subMenu.path} key={subMenu.id} disablePadding sx={{ display: 'block' }}>
                                                <ListItemButton sx={{ pl: 3, minHeight: 48, }}>
                                                    <ListItemIcon>
                                                        {/* <img className='h-7 w-7' src={subMenu.icon} alt='' /> */}
                                                    </ListItemIcon>
                                                    <ListItemText
                                                        sx={{
                                                            borderLeft: isClicked === subMenu.id ? '2.2px solid orange' : 'none',
                                                            paddingLeft: '7px',
                                                            color: isClicked === subMenu.id ? '#0BA8E6' : 'inherit',
                                                            cursor: 'pointer',
                                                        }}
                                                        primary={subMenu.functionality}
                                                        onClick={() => handleClick(subMenu.id)}
                                                    />
                                                </ListItemButton>
                                                {/* className={`border w-full text-left py-2 px-4 transition-all ${selectedDepData.includes(item.department) ? 'bg-orange-400 border border-white' : ''}`} */}
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
                        <Route path='/appointment/bookappointment' element={<Dashboard />} />
                        <Route path='/registration/preregistration' element={<Registration />} />
                        <Route path='/activity/feedback' element={<FeedBack />}>
                            <Route path='consult' index element={<Consultant />} />
                            <Route path='staff' element={<Staff />} />
                            <Route path='patient' element={<Petient />} />
                        </Route>
                        <Route path='/activity/feedback/answer' element={<TemplateQue />} />
                        <Route path='/activity/feedback/qr' element={<QRgen />} />
                        <Route path='/details/patientdetails' element={<UsersDoctor />} />
                        <Route path='/hospital/calender' element={<Calender />} />
                        <Route path='/setting/staffprofile/Country' element={<CountryDrop />} />
                        <Route path='/setting/staffprofile/state' element={<StateDrop />} />
                        <Route path='/setting/staffprofile/city' element={<CityDrop />} />
                        <Route path='/analytics/patientanalysis' element={<AnalyticsMain />} />
                        <Route path='/details/createpatient' element={<PatientForm />} />
                        <Route path='/analytics/billing' element={<BillingAnalyze />} />
                        <Route path='/analytics/feedbackanalysis' element={<FeedBackAnal />} />
                    </Routes>
                </Box>
            </Box>
        </>
    );
}

