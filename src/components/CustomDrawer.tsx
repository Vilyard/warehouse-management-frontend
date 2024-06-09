import React from 'react';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { Divider, Drawer, List, Toolbar, styled } from '@mui/material';
import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import BarChartIcon from "@mui/icons-material/BarChart";
import AssignmentIcon from "@mui/icons-material/Assignment";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import StorageIcon from "@mui/icons-material/Storage";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import Link from 'next/link';


const drawerWidth: number = 240;
const StyledDrawer = styled(Drawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
      }),
    },
  }),
);

const mainListItemsData = [
  { icon: <DashboardIcon />, text: "Dashboard", path:"/dashboard"  },
  { icon: <PeopleAltIcon />, text: "Users", path:"/dashboard/users" },
  { icon: <PersonOutlineIcon />, text: "Customers", path:  "/dashboard/customers" },
  { icon: <StorageIcon />, text: "Inventories", path:"/dashboard/inventories" },
  { icon: <ShoppingCartIcon />, text: "Orders", path:"/dashboard/orders" },
  { icon: <BarChartIcon />, text: "Products", path:"/dashboard/products" },
  { icon: <LocalShippingIcon />, text: "Shipments", path:"/dashboard/shipments" },
  { icon: <LocalMallIcon />, text: "Suppliers", path:"/dashboard/suppliers" },
];

const secondaryListItemsData = [
  { icon: <AssignmentIcon />, text: "Current month" },
  { icon: <AssignmentIcon />, text: "Last quarter" },
  { icon: <AssignmentIcon />, text: "Year-end sale" },
];

const ListItemWithIcon = ({ icon, text, path }: any) => {
  const validPath = path ?? '#';
  return (
    <Link href={validPath} passHref>
       <ListItemButton>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={text} /> 
        </ListItemButton>
    </Link> 
  )
}

export const CustomDrawer = ({ open, toggleDrawer }: any) => {
  return (
    <StyledDrawer variant="permanent" open={open}>
      <Toolbar
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          px: [1],
        }}
      >
        <IconButton onClick={toggleDrawer}>
          <ChevronLeftIcon />
        </IconButton>
      </Toolbar>
      <Divider />
      <List component="nav">
        {mainListItemsData.map((item, index) => (
          <ListItemWithIcon key={index} icon={item.icon} text={item.text} path={item.path} />
        ))}
        <Divider sx={{ my: 1 }} />
        {/* Add secondary list items if needed */}
      </List>
    </StyledDrawer>
  );
};