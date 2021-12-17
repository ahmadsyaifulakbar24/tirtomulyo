import { Container, Grid, makeStyles, useMediaQuery, useTheme } from '@material-ui/core'
import React from 'react'
import Banner2 from '../../components/banner2'
import BookingCard from './BookingCard'

const useStyle = makeStyles((theme) => ({
    root: {
        marginTop: theme.spacing(4)
    },
    gridItem: {
        paddingTop: theme.spacing(3)
    }
}))

function Booking() {
    const classes = useStyle()
    return (
        <div>
            <Banner2 
                title="Pemesanan"
            />
            <Container className={classes.root}>
                <Grid
                    container
                    spacing={5}
                >
                    <Grid
                        className={classes.gridItem}
                        item
                        lg={6}
                        sm={6}
                        xs={12}
                    >
                        <BookingCard />
                    </Grid>
                    <Grid
                        className={classes.gridItem}
                        item
                        lg={6}
                        sm={6}
                        xs={12}
                    >
                        <BookingCard />
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default Booking
