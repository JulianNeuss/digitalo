import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import UIDrawer from "@material-ui/core/Drawer";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import { isDarkTheme } from "../morpheus/Themes";

export const drawerWidth = 260;

export const drawerHeader = (theme) => ({
  display: "flex",
  alignItems: "center",
  padding: "0 8px",
  ...theme.mixins.toolbar,
  justifyContent: "flex-end"
});

const useStyles = makeStyles((theme) => ({
  root: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: drawerHeader(theme),
}));

const Drawer = ({ open, onClose, children }) => {
  const classes = useStyles();
  const isDark = isDarkTheme();

  const drawerHeaderBackgroundColor = isDark ? '#424242' : '#3375fd';
  return (
    <UIDrawer
      className={classes.root}
      variant="persistent"
      anchor="left"
      open={open}
      classes={{
        paper: classes.drawerPaper,
      }}>
      <div className={classes.drawerHeader} style={{ background: drawerHeaderBackgroundColor, minHeight: '65px' }}>
        <IconButton onClick={onClose}>
          <ChevronLeftIcon style={{ color: 'white' }}/>
        </IconButton>
      </div>
      <Divider />
      {children}
    </UIDrawer>
  );
};

Drawer.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node,
};

Drawer.defaultProps = {
  children: undefined,
};

export default Drawer;
