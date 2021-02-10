import React, { useState } from 'react';
import clsx from 'clsx';
import styled from 'styled-components';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import logo from '../../public/img/logo.png';
import logoResponsive from '../../public/img/logo@2x.png';
import {
  AppBar,
  Avatar,
  Divider,
  Drawer,
  Hidden,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useTheme,
} from '@material-ui/core';
import { useStyles } from '../styled/navBar';
import { Link } from 'react-router-dom';

const CustomTypography = styled(Typography)`
  margin-right: 1.2rem;
`;

const CustomTab = styled(Tab)`
  text-transform: none;
  font-size: 14px;
  font-weight: 600;
  color: #191919;
  padding-left: 0;
`;

export const NavBar = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(0);
  const classes = useStyles();
  const theme = useTheme();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <div className={classes.root}>
        <AppBar
          position="fixed"
          elevation={1}
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar>
            <ListItemAvatar className={classes.logo}>
              <Link to="/">
                <Avatar alt="logo" src={logo} srcSet={logoResponsive} />
              </Link>
            </ListItemAvatar>
            <Hidden xsDown>
              <Tabs
                value={value}
                indicatorColor="secondary"
                textColor="secondary"
                onChange={handleChange}
                aria-label="tabs menu navigation"
                className={classes.tabsCustom}
              >
                <CustomTab label="Modelos" component={Link} to="/" />
                <CustomTab
                  label="Ficha de Modelo"
                  component={Link}
                  to="/description"
                />
              </Tabs>
            </Hidden>
            <CustomTypography
              variant="body1"
              className={clsx(open && classes.hide)}
            >
              Menú
            </CustomTypography>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="persistent"
          anchor="right"
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader}>
            <Typography paragraph className={classes.paragraphClose}>
              Cerrar
            </Typography>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === 'ltr' && <CloseIcon />}
            </IconButton>
          </div>
          <List component="nav">
            {[
              'Modelos',
              'Servicios y Accesorios',
              'Financiación',
              'Reviews y Comunidad',
              'Toyota Mobility Service',
              'Toyota Gazoo Racing',
              'Toyota Híbridos',
              'Concesionarios',
              'Test Drive',
              'Contacto',
              'Actividades',
              'Servicios al Cliente',
              'Ventas Especiales',
              'Innovación',
              'Prensa',
              'Acerca de...',
            ].map((text, index) => (
              <React.Fragment key={text}>
                <ListItem button className={classes.listItem}>
                  <ListItemText primary={text} />
                </ListItem>
                {index === 3 ? <Divider variant="middle" /> : null}
                {index === 6 ? <Divider variant="middle" /> : null}
                {index === 9 ? <Divider variant="middle" /> : null}
              </React.Fragment>
            ))}
          </List>
        </Drawer>
      </div>
      <div className={classes.drawerHeader}></div>
    </>
  );
};
