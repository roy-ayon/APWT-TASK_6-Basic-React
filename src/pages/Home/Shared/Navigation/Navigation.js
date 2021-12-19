import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Link, NavLink } from 'react-router-dom';
import Button from '@mui/material/Button';
const Navigation = () => {
  return (
    <AppBar position="static">
      <Toolbar>Navbar</Toolbar>
    </AppBar>
  );
};
export default Navigation;