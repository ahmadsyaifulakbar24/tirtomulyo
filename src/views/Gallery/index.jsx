import React, { Fragment, useEffect, useState } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import { Box, Container, useMediaQuery } from '@material-ui/core';
import Banner2 from '../../components/banner2';
import { api_url, image_url } from '../../variable/BaseUrl';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: theme.spacing(7)
    }, 
    groupGallery: {
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
    const [gallery, setGallery] = useState([])

    const getGalleyFromAPI = async () => {
        await axios.get(api_url + 'gallery')
        .then((res) => {
            res.data.map((item, index) => {
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
        <Fragment>
            <Banner2 
                title="Gallery"
            />
            <Box
                className={classes.root}
            >
                <Container>
                    <div className={classes.groupGallery}>
                        <ImageList rowHeight={200} gap={1} className={classes.imageList} cols={3}>
                            {gallery.map((item, index) => (
                                <ImageListItem 
                                    key={index} 
                                    cols={matches ? item.colsMobile : item.cols} 
                                    rows={rowsImage}
                                >
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
                    {/* <Grid container justifyContent="center" style={{ paddingTop: 30 }}>
                        <Button variant="contained" color="primary" size="large">
                            Lihat Lebih Banyak
                        </Button>
                    </Grid> */}
                </Container>
            </Box>
        </Fragment>
    )
}

export default Gallery
