import {Box, Button, Container, Grid, Hidden, List, makeStyles} from "@material-ui/core";
import MenuItems from "./MenuItems";
import React from "react";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: theme.spacing(10)
    },
    navLink: {
        display: "flex",
    },
    button: {
        textTransform: "none",
        color: "#fff",
        padding: theme.spacing(0, 4, 0, 4)
    },
    copyright: {
        flexGrow:1,
        fontWeight: 500,
        padding: theme.spacing(2),
        [theme.breakpoints.down('sm')]: {
            textAlign: "center",
        },
    }
}))
const Footer = () => {
    const classes = useStyles()
    const navigate = useNavigate()
    const menu =(
        <List 
            className={classes.navLink}
        >
            {MenuItems.map((item, index) => (
                <Button
                    className={classes.button}
                    size="small"
                    onClick = {() => navigate(item.url)}
                >
                    {item.name}
                </Button>
            ))}
        </List>
    )

    return (
        <footer className={classes.root}>
            <Box
                py={{ lg: 1 }}
                bgcolor="primary.main"
                  color="primary.contrastText"
            >
                <Container >
                    <Grid
                        container
                        alignItems="center"
                    >
                        <div 
                            className={classes.copyright}
                        >
                            Created By Ahmad Syaiful Akbar &copy; 2021
                        </div>
                        <Hidden
                            mdDown
                            implementation="css"
                        >
                            <div>
                                {menu}
                            </div>
                        </Hidden>
                    </Grid>
                </Container>
            </Box>
        </footer>
    )
}

export default Footer