import React, { useState } from "react";
import { AppBar, Tabs, Tab, Toolbar, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";



const AppHeader = () => {
  const [value, setValue] = useState(0);
  return (
    <div>
      <AppBar sx={{ backgroundColor: "#232F3D" }} position="sticky">
      <Toolbar>
        <Typography>Header</Typography>
        <Tabs
            sx={{ ml: "auto" }}
            textColor="inherit"
            indicatorColor="primary"
            value={value}
            onChange={(e, val) => setValue(val)}
          >
        <Tab LinkComponent={NavLink} to="/" label='Dashboard'/>
        <Tab LinkComponent={NavLink} to="/form" label='Form'/>
        <Tab LinkComponent={NavLink} to="/report" label='Reports'/>
        <Tab LinkComponent={NavLink} to="/about" label='About'/>
        <Tab LinkComponent={NavLink} to="/contact" label='Contact Us'/>
        </Tabs>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default AppHeader;
