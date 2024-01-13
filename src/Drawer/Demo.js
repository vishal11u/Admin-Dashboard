import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MuiAppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import MuiDrawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { styled, useTheme } from "@mui/material/styles";
import * as React from "react";
import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Dashbord from "../dashbord/Dashbord";
import EmployeeFeedback from "../feedbackregistration/EmployeeFeedback";
import FeedBackRegistration from "../feedbackregistration/FeedBackRegistration";
import { logoutUser } from "../loginpage/Actions";
import LoginPage from "../loginpage/LoginPage";
import AnswerReviewCreation from "../masters/answerreview/AnswerReviewCreation";
import FeedBackQuestionSetCreation from "../masters/feedback/FeedBackQuestionSetCreation";
import AppBarMenu from "./AppBarMenu";
import QRGenerate from "../masters/qrgenerate/QRGenerate";
// Your menu data
const menuData = {
    message: "Drawer menu",
    result: [
        {
            id: 1,
            functionality: "Dashboard",
            routerLink: "/",
            drawerMenuPath: "/menu/Dashboard.png",
            module: "DashboardPage",
        },
        {
            id: 2,
            functionality: "FeedBack Registration",
            routerLink: "/feedbackregistration",
            drawerMenuPath: "/menu/FeedBack Registration.png",
            module: "FeedBack Registration",
        },
        {
            id: 3,
            functionality: "Masters",
            drawerMenuPath: "/menu/Registration.png",
            subMenus: [
                {
                    id: 4,
                    functionality: "Feedback",
                    routerLink: "/masters/feedback",
                    module: "<FeedBackCreation/>",
                },
                {
                    id: 5,
                    functionality: "Answer Review",
                    routerLink: "/masters/answerreview",
                    module: "<AnswerReview/>",
                },
                {
                    id: 6,
                    functionality: "QR Generate",
                    routerLink: "/masters/qrgenerate",
                    module: "<QRGenerate/>",
                },
            ],
        },
    ],
    statusCode: 200,
};

const drawerWidth = 240;

const openDraweredMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: "hidden",
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: calc(${ theme.spacing(7) } + 1px),
    [theme.breakpoints.up("sm")]: {
        width: calc(${ theme.spacing(8) } + 1px),
    },
});

const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== "openDrawer",
})(({ theme, openDrawer }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(openDrawer && {
        marginLeft: drawerWidth,
        width: calc(100 % - ${ drawerWidth }px),
        transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const Drawer = styled(MuiDrawer, {
    shouldForwardProp: (prop) => prop !== "openDrawer",
})(({ theme, openDrawer }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
    boxSizing: "border-box",
    ...(openDrawer && {
        ...openDraweredMixin(theme),
        "& .MuiDrawer-paper": openDraweredMixin(theme),
    }),
    ...(!openDrawer && {
        ...closedMixin(theme),
        "& .MuiDrawer-paper": closedMixin(theme),
    }),
}));

const NestedMenu = ({ subMenus }) => {
    const [openDrawer, setOpenDrawer] = React.useState(false);

    const handleClick = () => {
        setOpenDrawer(!openDrawer);
    };

    return (
        <>
            <ListItemButton onClick={handleClick}>
                <ListItemIcon>
                    <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="Masters" />
                {openDrawer ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={openDrawer} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    {subMenus.map((subMenu) => (
                        <ListItem
                            key={subMenu.id}
                            disablePadding
                            sx={{ pl: 4 }}
                            component={Link}
                            to={subMenu.routerLink}
                        >
                            <ListItemButton>
                                <ListItemIcon>
                                    <MailIcon />
                                </ListItemIcon>
                                <ListItemText primary={subMenu.functionality} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Collapse>
        </>
    );
};

export default function MyDrawer() {
    const theme = useTheme();
    const storedUser = JSON.parse(localStorage.getItem("user"));

    const [openDrawer, setOpenDrawer] = useState(false);
    const [userLogin, setUserLogin] = useState(true);
    const [notificationCount, setNotificationCount] = useState(0);
    const [fullScreen, setFullScreen] = useState(false);
    const [openNotifications, setOpenNotifications] = useState(false);
    // const { user: currentUser } = useSelector((state) => state.auth);

    const dispatch = useDispatch();

    const fullscreenDrawer = () => {
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

    const logOut = useCallback(() => {
        dispatch(logoutUser());
        setOpenDrawer(false);
    }, [dispatch]);

    //API for Logout Service
    const handleLogout = () => {
        logOut();
        dispatch(logoutUser());
        localStorage.removeItem("user");
        setUserLogin(true);
    };

    const handleDraweropenDrawer = () => {
        setOpenDrawer(true);
    };

    const handleDrawerClose = () => {
        setOpenDrawer(false);
    };

    const RecursiveList = ({ items }) => (
        <List>
            {items.map((item) => (
                <React.Fragment key={item.id}>
                    {item.subMenus ? (
                        <NestedMenu subMenus={item.subMenus} />
                    ) : (
                        <ListItem
                            key={item.id}
                            disablePadding
                            component={Link}
                            to={item.routerLink}
                            sx={{ display: "block" }}
                        >
                            <ListItemButton
                                sx={{
                                    minHeight: 48,
                                    justifyContent: openDrawer ? "initial" : "center",
                                    px: 2.5,
                                }}
                            >
                                <ListItemIcon
                                    sx={{
                                        minWidth: 0,
                                        mr: openDrawer ? 3 : "auto",
                                        justifyContent: "center",
                                    }}
                                >
                                    {item.functionality === "Inbox" ? (
                                        <InboxIcon />
                                    ) : (
                                        <MailIcon />
                                    )}
                                </ListItemIcon>
                                <ListItemText
                                    primary={item.functionality}
                                    sx={{ opacity: openDrawer ? 1 : 0 }}
                                />
                            </ListItemButton>
                        </ListItem>
                    )}
                </React.Fragment>
            ))}
        </List>
    );

    return (
        <>
            {userLogin === true && storedUser === null ? (
                <LoginPage userLogin={userLogin} setUserLogin={setUserLogin} />
            ) : (
                <Box sx={{ display: "flex" }}>
                    <CssBaseline />
                    <AppBar
                        position="fixed"
                        openDrawer={openDrawer}
                        style={{ backgroundColor: "#6f00ff" }}
                    >
                        <Toolbar>
                            <IconButton
                                color="inherit"
                                aria-label="openDrawer drawer"
                                onClick={handleDraweropenDrawer}
                                edge="start"
                                sx={{
                                    marginRight: 5,
                                    ...(openDrawer && { display: "none" }),
                                }}
                            >
                                <MenuIcon />
                            </IconButton>
                            {openDrawer === false ? (
                                <h1 className="text-xl tracking-wider font-semibold">
                                    FeedBack
                                </h1>
                            ) : (
                                ""
                            )}

                            <div className="w-full mr-4">
                                <AppBarMenu
                                    setOpenNotifications={setOpenNotifications}
                                    fullscreenDrawer={fullscreenDrawer}
                                    handleLogout={handleLogout}
                                    notificationCount={notificationCount}
                                    setUserLogin={setUserLogin}
                                    setOpenDrawer={setOpenDrawer}
                                />
                            </div>
                        </Toolbar>
                    </AppBar>
                    <Drawer variant="permanent" openDrawer={openDrawer}>
                        <DrawerHeader style={{ background: "#6f00ff" }}>
                            <h1 className="text-xl text-white tracking-wider font-semibold">
                                FeedBack
                            </h1>
                            <IconButton onClick={handleDrawerClose}>
                                {theme.direction === "rtl" ? (
                                    <ChevronRightIcon className="bg-orange-500 text-white rounded-full" />
                                ) : (
                                    <ChevronLeftIcon className="bg-orange-500 text-white rounded-full" />
                                )}
                            </IconButton>
                        </DrawerHeader>
                        <Divider />
                        <RecursiveList items={menuData.result} />
                    </Drawer>
                    <Box component="main" sx={{ flexGrow: 1, p: 1 }}>
                        <DrawerHeader />
                        <Routes>
                            <Route path="/" element={<Dashbord />} />
                            <Route
                                path="/feedbackregistration"
                                element={<FeedBackRegistration />}
                            />
                            <Route path="/employeefeedback" element={<EmployeeFeedback />} />
                            <Route
                                path="/masters/answerreview"
                                element={<AnswerReviewCreation />}
                            />
                            <Route
                                path="/masters/feedback"
                                element={<FeedBackQuestionSetCreation />}
                            />
                            <Route path="/masters/qrgenerate" element={<QRGenerate />} />
                        </Routes>
                    </Box>
                </Box>
            )}
        </>
    );
}