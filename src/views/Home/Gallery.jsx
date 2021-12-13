import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import { Box, Button, Container, Grid, Typography, useMediaQuery } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import axios from 'axios';
import { api_url } from '../../variable/BaseUrl';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    imageList: {
        transform: 'translateZ(0)',
    },
    titleBar: {
        background:
        'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
        'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
    icon: {
        color: 'white',
    },
    titleContent: {
        fontWeight: 900,
        // textAlign: 'center',
        marginBottom: theme.spacing(3)
    },
}));


function Gallery() {
    const classes = useStyles();
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('sm'));
    const rowsImage = matches ? 1 : 2
    const navigate = useNavigate()
    const [gallery, setGallery] = useState([])


    const getGalleyFromAPI = async () => {
        await axios.get(api_url + 'gallery')
        .then((res) => {
            res.data.slice(0, 5).map((item, index) => {
                let hasil =  ((index + 1) + 5) % 5;
                let setCols;
                let setColsMobile;
                if(hasil === 1 || hasil === 2) {
                    setCols = 1.5
                    setColsMobile = 1.5
                } else if(hasil === 3) {
                        setCols = 1
                        setColsMobile = 3
                } else {
                        setCols = 1
                        setColsMobile = 1.5
                }
                setGallery((gallery) => [
                    ...gallery, {
                        img: item.image,
                        title: item.file_name,
                        cols: setCols,
                        colsMobile: setColsMobile,
                    }
                ])
            })
        })
    }

    useEffect(() => {
        getGalleyFromAPI()   
    }, [])

    return (
        <Box
            bgcolor={green[50]}
            py={3}
        >
            <Container>
                <Typography 
                    className={classes.titleContent}
                    variant="h4"
                    color="primary"
                >
                    Gallery
                </Typography>

                <div className={classes.root}>
                    <ImageList rowHeight={200} gap={1} className={classes.imageList} cols={3}>
                        {gallery.map((item) => (
                            <ImageListItem key={item.img} cols={matches ? item.colsMobile : item.cols} rows={rowsImage}>
                            {/* <ImageListItem key={item.img} cols={item.featured ? 2 : 1} rows={item.featured ? 2 : 1}> */}
                                <img src={item.img} alt={item.title} />
                                <ImageListItemBar
                                    title={item.title}
                                    position="top"
                                    actionIcon={
                                    <IconButton aria-label={`star ${item.title}`} className={classes.icon}>
                                        <StarBorderIcon />
                                    </IconButton>
                                    }
                                    actionPosition="left"
                                    className={classes.titleBar}
                                />
                            </ImageListItem>
                        ))}
                    </ImageList>
                </div>
                <Grid container justifyContent="center" style={{ paddingTop: 30 }}>
                    {/* <Link to="/gallery">
                        <Button 
                            variant="contained" 
                            color="primary" 
                            size="large"
                        >
                            Lihat Lebih Banyak
                        </Button>
                    </Link> */}
                     <Button 
                        variant="contained" 
                        color="primary" 
                        size="large"
                        onClick={() => navigate('/gallery')}
                    >
                        Lihat Lebih Banyak
                    </Button>
                </Grid>
            </Container>
        </Box>
    )
}

export default Gallery
