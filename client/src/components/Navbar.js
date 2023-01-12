import React, { useState } from "react";
import {
  LightModeOutlined,
  DarkmodeOutlined,
  Menu as MenuIcon,
  Search,
  SettingsOutlined,
  ArrowDropDownOutlined,
} from "@mui/icons-material";
import FlexBetween from "./FlexBetween";
import { useDispatch } from "react-redux";
import { setMode } from "../state";
import profile from "assets/profile.jpeg";
import { AppBar, Toolbar, useTheme } from "@mui/material";
const Navbar = () => {
  const dispatch = useDispatch();
  const theme = useTheme();

  return (
    <AppBar
      sx={{ position: "static", background: "none", boxShadow: "none" }}
    >
        <Toolbar sx={{justifyContent:'space-between'}}>
             {/* left side */}
        </Toolbar>
    </AppBar>
  );
};

export default Navbar;
