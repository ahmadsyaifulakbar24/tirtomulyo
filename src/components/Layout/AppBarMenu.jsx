import { 
    AppBar, 
    Button, 
    Container, 
    CssBaseline, 
    Drawer, 
    Hidden, 
    IconButton, 
    List, 
    ListItem, 
    ListItemText, 
    makeStyles, 
    Toolbar, 
    Typography 
} from "@material-ui/core";

import React, { Fragment, useState } from "react";

// icon
import MenuIcon from '@material-ui/icons/Menu';
import { useLocation, useNavigate } from "react-router-dom";
import MenuItems from "./MenuItems";
import { green } from "@material-ui/core/colors";

const drawerWidth = 240;
const useStyle = makeStyles((theme) => ({
    grow: {
        flexGrow: 1,
    },
    logo : {
        color: "#fff",
        cursor: 'pointer',
    },
    navLinks: {
        display: 'flex'
    },
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    button: {
        color: "#ffff",
        textTransform: "none",
        padding: theme.spacing(0, 4, 0, 4),
    },
    buttonDrawer: {
        color: "#000",
        textTransform: "none",
        padding: theme.spacing(0, 4, 0, 4)
    },
    drawerPaper: {
        width: drawerWidth
    },
    active : {
        color: green[900],
    },
    activeBackground: {
        color: "#fff",
        background: green[900]
    }
}))


const AppBarMenu = () => {
    const classes = useStyle()
    const navigate = useNavigate()
    const location = useLocation()
    const [mobileOpen, setMobileOpen] = useState(false)
    const [appBarBackground, setAppBarBackground] = useState(false)

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <List>
            {MenuItems.map((item, index) => (
                <ListItem 
                    button
                    key={index}
                >
                    <Button
                        className = {`${classes.buttonDrawer} ${location.pathname === item.url ? classes.active : null}`}
                        onClick={() => navigate(item.url)}
                    >
                        <ListItemText >
                            {item.name}
                        </ListItemText>
                    </Button>
                </ListItem>
            ))}
        </List>
    )

    const appBar = (
        <Fragment>
            {MenuItems.map((item, index) => (
                <Button
                    className = {`${classes.button} ${location.pathname === item.url ? appBarBackground ? classes.activeBackground : classes.active : null}`}
                    color="inherit"
                    variant={appBarBackground && location.pathname === item.url ? 'contained' : 'text'}
                    onClick={() => navigate(item.url)}
                    key={index}
                >
                    <ListItemText>
                        {item.name}
                    </ListItemText>
                </Button>
            ))}
        </Fragment>   
    )
 
    const changeBackground = () => {
        if(window.scrollY >= 80) {
            setAppBarBackground(true)
        } else {
            setAppBarBackground(false)
        }
    }

    window.addEventListener('scroll', changeBackground)
    return (
        <div className={classes.grow}>
            <AppBar 
                elevation="0"
                position="fixed"
                color={appBarBackground ? 'primary' : 'transparent'}
            >
                <CssBaseline />
                <Container maxWidth="false">
                    <Toolbar disableGutters >
                        <IconButton
                            color="fff"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            className={classes.menuButton}
                        >
                            <MenuIcon />
                        </IconButton>

                        <Typography 
                            variant="h6" 
                            className={classes.logo}
                            onClick = {() => navigate('/')}
                        >
                            Desa Tirtomulyo
                        </Typography>

                        <Hidden
                            xsDown
                            implementation="css"
                        >
                            {appBar}
                        </Hidden>
                        <div className={classes.grow} />
                        <Hidden
                             xsDown
                        >
                            <Typography className={classes.button}>
                                082174398682
                            </Typography>
                            <Typography className={classes.button}>
                                desatirtomulyo@gmail.com
                            </Typography>
                        </Hidden>
                    </Toolbar>
                </Container>
            </AppBar>

            {/* side drawer */}
            <Hidden 
                smUp
                implementation="css"
            >
                <nav className={classes.drawer} >
                    <Drawer
                        // container={container}
                        classes = {{ paper: classes.drawerPaper }}
                        variant="temporary"
                        anchor="left"
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                    >
                        {drawer}
                    </Drawer>
                </nav>
            </Hidden>
        </div>
    )
}

export default AppBarMenu