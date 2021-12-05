import { Container, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import React, { useState } from 'react'
import Banner2 from '../../components/banner2'
import EduwisataCard from './EduwisataCard'

const useStyle = makeStyles((theme) => ({
    root: {
        marginTop: theme.spacing(7)
    },
}))


function Eduwisata() {
    const classes = useStyle()
    const [data, setdata] = useState([
        {
            data:1,
        },
        {
            data:1,
        },
        {
            data:1,
        },
        {
            data:1,
        },
        {
            data:1,
        },
        {
            data:1,
        }
    ])

    return (
        <div>
            <Banner2 
                title="Eduwisata"
            />
            <Container className={classes.root}>
                <Grid 
                    container
                    spacing={5}
                >
                    {
                        data.map((item, index) => (
                            <Grid
                                item
                                lg={4}
                                sm={6}
                                xs={12}
                            >
                                <EduwisataCard />
                            </Grid>
                        ))
                    }
                </Grid>
            </Container>
        </div>
    )
}

export default Eduwisata
