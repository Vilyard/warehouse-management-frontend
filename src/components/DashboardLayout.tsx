"use client";
import * as React from "react";
import { Box, CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { CustomAppBar } from "./CustomAppBar";
import { CustomDrawer } from "./CustomDrawer";
import StoreProvider from "@/lib/StoreProvider";


const defaultTheme = createTheme();

export const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <StoreProvider>
      <ThemeProvider theme={defaultTheme}>
        <Box sx={{ display: "flex" }}>
          <CssBaseline />
          <CustomAppBar open={open} toggleDrawer={toggleDrawer} />
          <CustomDrawer open={open} toggleDrawer={toggleDrawer} />
          {children}
        </Box>
      </ThemeProvider>
    </StoreProvider>
  );
};