import { 
    Box, 
    Container, 
    makeStyles,
    Typography
} from '@material-ui/core'
import React, { Fragment } from 'react'

const useStyle = makeStyles((theme) => ({
    root : {
        backgroundImage: 'url("/assets/images/banner.jpg")',
        height: '30vh',
        width: '100%',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        backgroundRepeat: ' no-repeat',
        backgroundPositionY: -275,
        [theme.breakpoints.down('sm')] : {
            height: '20vh',
            backgroundPositionY: -250
        },
    },
    contentCenter: {
        position: 'absolute',
        top: 195,
        left: 0,
        display: 'block',
        width: '100%',
        height: '100%',
        color: 'white',
        textAlign: 'center',
        [theme.breakpoints.down('sm')] : {
            top: 105,
        },
    },
    title: {
        fontSize: 45,
        fontWeight: 600
    },
}))

function Banner2(props) {
    const classes = useStyle()

    return (
        <Fragment>
            <Box className={classes.root}>
                <Box className={classes.contentCenter}>     
                    <Container>
                        <Typography
                            className={classes.title}
                            variant="h3"
                        >
                            {props.title}
                        </Typography>
                    </Container>
                </Box>
            </Box>
        </Fragment>
    )
}

export default Banner2
