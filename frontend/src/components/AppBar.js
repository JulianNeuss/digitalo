import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import UIAppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

import { isDarkTheme } from "../morpheus/Themes";

import { drawerWidth } from "./Drawer";

const useStyles = makeStyles(theme => ({
  root: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  hide: {
    display: "none"
  }
}));

const AppBar = ({ isDrawerOpen, openDrawer, children }) => {
  const classes = useStyles();
  const isDark = isDarkTheme();

  const UIAppBarBackgroundColor = isDark ? '#424242' : '#3375fd';

  return (
    <div className={classes.root}>
      <UIAppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: isDrawerOpen
        })}
        style={{ backgroundColor: UIAppBarBackgroundColor }}
      >
        <Toolbar>
          <IconButton
            edge="start"
            className={clsx(classes.menuButton, isDrawerOpen && classes.hide)}
            aria-label="Menu"
            onClick={openDrawer}
            style={{ color: 'white' }}
          >
            <MenuIcon />
          </IconButton>
          {children}
        </Toolbar>
      </UIAppBar>
    </div>
  );
};

AppBar.propTypes = {
  isDrawerOpen: PropTypes.bool,
  openDrawer: PropTypes.func,
  children: PropTypes.node
};

AppBar.defaultProps = {
  isDrawerOpen: false,
  openDrawer: undefined,
  children: undefined
};

export default AppBar;
