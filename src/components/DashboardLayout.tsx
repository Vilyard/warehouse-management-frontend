"use client";
import * as React from "react";
import { Box, CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { CustomAppBar } from "./CustomAppBar";
import { CustomDrawer } from "./CustomDrawer";
import { CustomDashboardContent } from "./CustomDashboardContent";

const defaultTheme = createTheme();

export const DashboardLayout = () => {
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };
  return (
    <ThemeProvider theme={defaultTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <CustomAppBar open={open} toggleDrawer={toggleDrawer} />
        <CustomDrawer open={open} toggleDrawer={toggleDrawer} />
        <CustomDashboardContent />
      </Box>
    </ThemeProvider>
  );
};
