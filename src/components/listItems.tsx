import * as React from "react";
import {
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
} from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import BarChartIcon from "@mui/icons-material/BarChart";
import AssignmentIcon from "@mui/icons-material/Assignment";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import StorageIcon from "@mui/icons-material/Storage";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";

const mainListItemsData = [
  { icon: <DashboardIcon />, text: "Dashboard" },
  { icon: <PeopleAltIcon />, text: "Users" },
  { icon: <PersonOutlineIcon />, text: "Customers" },
  { icon: <StorageIcon />, text: "Inventories" },
  { icon: <ShoppingCartIcon />, text: "Orders" },
  { icon: <BarChartIcon />, text: "Products" },
  { icon: <LocalShippingIcon />, text: "Shipments" },
  { icon: <LocalMallIcon />, text: "Suppliers" },
];

const secondaryListItemsData = [
  { icon: <AssignmentIcon />, text: "Current month" },
  { icon: <AssignmentIcon />, text: "Last quarter" },
  { icon: <AssignmentIcon />, text: "Year-end sale" },
];

const ListItemWithIcon = ({ icon, text }: any) => (
  <ListItemButton>
    <ListItemIcon>{icon}</ListItemIcon>
    <ListItemText primary={text} />
  </ListItemButton>
);

export const mainListItems = mainListItemsData.map((item, index) => (
  <ListItemWithIcon key={index} icon={item.icon} text={item.text} />
));

export const secondaryListItems = (
  <>
    <ListSubheader component="div" inset>
      Saved reports
    </ListSubheader>
    {secondaryListItemsData.map((item, index) => (
      <ListItemWithIcon key={index} icon={item.icon} text={item.text} />
    ))}
  </>
);