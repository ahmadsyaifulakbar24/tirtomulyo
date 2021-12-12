import { 
    Box, 
    Button, 
    Container,
    Grid, 
    Hidden, 
    List, 
    makeStyles, 
    Tab, 
    Tabs,
    useMediaQuery,
    useTheme
} from "@material-ui/core";
import PropTypes from 'prop-types';
import MenuItems from "./MenuItems";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: theme.spacing(5)
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

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
        >
        {value === index && (
            <Box sx={{ pt: 3 }}>
                {children}
            </Box>
        )}
        </div>
    );
}
  
TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};
  
function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const Footer = () => {
    const classes = useStyles()
    const navigate = useNavigate()
    const [tabValue, setTabValue] = useState(0)
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('sm'));
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

    const handleChange = (event, newValue) => {
        setTabValue(newValue);
    };

    return (
        <footer className={classes.root}>
            <Box>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs
                        centered
                        value={tabValue}
                        onChange={handleChange}
                        variant={matches ? 'scrollable' : 'standart'}
                        scrollButtons={false}
                        aria-label="maps-tab"
                    >
                        <Tab label="Tirtomulyo Plantungan" {...a11yProps(0)}> </Tab>
                        <Tab label="Kebun Eduwisata Wonokambang" {...a11yProps(1)}> </Tab>
                        <Tab label="Omah Londo Plantungan" {...a11yProps(2)}> </Tab>
                        <Tab label="Alas Bapang" {...a11yProps(2)}> </Tab>
                        <Tab label="Curug Kedawung" {...a11yProps(2)}> </Tab>
                    </Tabs>
                </Box>
                <TabPanel value={tabValue} index={0}>
                    <iframe 
                        title="map one"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15836.982590856638!2d109.96319867703168!3d-7.097501367989764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e706cbf8b4ce769%3A0x5027a76e356e530!2sTirtomulyo%2C%20Plantungan%2C%20Kabupaten%20Kendal%2C%20Jawa%20Tengah!5e0!3m2!1sid!2sid!4v1639281925410!5m2!1sid!2sid" 
                        width="100%" 
                        height="450" 
                        style={{ border: 0 }} 
                        allowfullscreen="" 
                        loading="lazy"
                    >
                    </iframe>
                </TabPanel>

                <TabPanel value={tabValue} index={1}>
                    <iframe 
                        title="map two"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.2463977499365!2d109.9657002147739!3d-7.097414194874476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e706d88de0ad043%3A0x357a6979160508!2sKebun%20Eduwisata%20Wonokambang!5e0!3m2!1sen!2sid!4v1639283017454!5m2!1sen!2sid" 
                        width="100%" 
                        height="450" 
                        style={{ border: 0 }} 
                        allowfullscreen="" 
                        loading="lazy"
                    >    
                    </iframe>
                </TabPanel>

                <TabPanel value={tabValue} index={2}>
                    <iframe
                        title="map three"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.216631270142!2d109.96159481477396!3d-7.100872994872016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e706d38b39e7281%3A0x286e12615b717c34!2sOmah%20Londo%20Plantungan!5e0!3m2!1sen!2sid!4v1639283040669!5m2!1sen!2sid" 
                        width="100%" 
                        height="450" 
                        style={{ border: 0 }} 
                        allowfullscreen="" 
                        loading="lazy"
                    >
                    </iframe>
                </TabPanel>
                
                <TabPanel value={tabValue} index={3}>
                    <iframe 
                        title="map four"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.313567957229!2d109.97608591477388!3d-7.089602994879983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e706d3942d7f2cf%3A0xf1aaaf4371d8ed56!2sAlas%20Bapang!5e0!3m2!1sen!2sid!4v1639283110701!5m2!1sen!2sid" 
                        width="100%" 
                        height="450" 
                        style={{ border: 0 }} 
                        allowfullscreen="" 
                        loading="lazy"
                    >
                    </iframe>
                </TabPanel>

                <TabPanel value={tabValue} index={4}>
                    <iframe 
                        title="maps five"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.3147986782687!2d109.97153421477397!3d-7.0894597948800815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e706d5d1ffd0387%3A0x6a6df2d515ff8baa!2sCurug%20Kedawung!5e0!3m2!1sen!2sid!4v1639283156785!5m2!1sen!2sid" 
                        width="100%" 
                        height="450" 
                        style={{ border: 0 }} 
                        allowfullscreen="" 
                        loading="lazy"
                    >
                    </iframe>
                </TabPanel>

            </Box>
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