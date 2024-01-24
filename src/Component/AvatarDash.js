import * as React from "react";
import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";

const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
        backgroundColor: "#44b700",
        color: "#44b700",
        boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
        "&::after": {
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            borderRadius: "50%",
            animation: "ripple 1.2s infinite ease-in-out",
            border: "1px solid currentColor",
            content: '""',
        },
    },
    "@keyframes ripple": {
        "0%": {
            transform: "scale(.8)",
            opacity: 1,
        },
        "100%": {
            transform: "scale(2.4)",
            opacity: 0,
        },
    },
}));

export default function BadgeAvatars() {
    return (
        <div className="px-4  hidden md:flex space-x-3 items-center border-r">
            <Stack direction="row" spacing={2}>
                <StyledBadge
                    overlap="circular"
                    anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                    variant="dot"
                >
                    <Avatar alt="Remy Sharp" src="https://images.pexels.com/photos/19760445/pexels-photo-19760445/free-photo-of-man-with-beard-and-mustache-standing-outside-in-the-dark.jpeg?auto=compress&cs=tinysrgb&w=600" />
                </StyledBadge>
            </Stack>
            <div className="text-[13px]">
                <h1>Good Day</h1>
                <p>Mr.User Name</p>
            </div>
        </div>
    );
}
