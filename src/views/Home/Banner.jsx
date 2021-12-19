import { Box, Container, makeStyles, Typography } from '@material-ui/core'
import React, { Fragment } from 'react'
import { image_url } from '../../variable/BaseUrl'

const useStyle = makeStyles((theme) => ({
    root : {
        backgroundImage: `url(${image_url}banner.jpg)`,
        height: '100vh',
        width: '100%',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
    },
    contentCenter: {
        position: 'absolute',
        top: 150,
        left: 0,
        display: 'block',
        width: '100%',
        height: '100%',
        color: 'white',
        textAlign: 'center',
    },
    logo: {
        [theme.breakpoints.down('sm')]: {
            width: '50%'
        },
        [theme.breakpoints.up('sm')]: {
            width: '30%'
        },
        [theme.breakpoints.up('md')]: {
            width: '15%',
        },
        height: 'auto'
    },
    title: {
        paddingTop: "1%",
        fontSize: 45,
        fontWeight: 600
    },
}))

function Banner() {
    const classes = useStyle()
    return (
        <Fragment>
            <Box className={classes.root}>
                <Container>
                    <Box className={classes.contentCenter}>
                        <img 
                            className={classes.logo}
                            src={`${image_url}kendal.png`} 
                            alt="logo-kendal" 
                        />
                        <Typography
                            className={classes.title}
                            variant="h3"
                        >
                            Selamat Datang Ke Desa Tirtomulyo <br />
                            Desa Wisata Penuh Keindahan
                        </Typography>
                    </Box>
                </Container>
            </Box>
        </Fragment>
    )
}

export default Banner
