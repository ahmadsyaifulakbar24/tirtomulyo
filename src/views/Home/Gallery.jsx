import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Button, Card, CardActionArea, CardContent, CardMedia, Container, Grid, Typography, useMediaQuery } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import axios from 'axios';
import { api_url } from '../../variable/BaseUrl';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./Gallery.css"

const useStyles = makeStyles((theme) => ({
    // root: {
    //     maxWidth: 385,
    // },
    media: {
        height: 210,
    },
    titleContent: {
        fontWeight: 900,
        // textAlign: 'center',
        marginBottom: theme.spacing(3)
    },
}));


function Gallery() {
    const classes = useStyles();
    const navigate = useNavigate()
    const [gallery, setGallery] = useState([])

    const getGalleyFromAPI = async () => {
        await axios.get(api_url + 'gallery')
        .then((res) => {
            setGallery(res.data.slice(0, 5))
        })
    }

    useEffect(() => {
        getGalleyFromAPI()   
    }, [])

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
        ]
    };
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

                <Slider {...settings}>
                    {
                        gallery.map((item, index) => (
                            <div>
                                <Card 
                                    style={{ 
                                        margin: "10px",
                                    }}
                                    className={classes.root}
                                    key={index}
                                >
                                    <CardActionArea>
                                        <CardMedia
                                            className={classes.media}
                                            image={item.image}
                                            title={item.file_name}
                                        />
                                        <CardContent>
                                            <Typography 
                                                gutterBottom variant="h6" 
                                                component="h2"
                                                align="center"
                                            >
                                                {item.file_name}
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </div>
                        ))
                    }
                </Slider>
                <Grid container justifyContent="center" style={{ paddingTop: 30 }}>
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
