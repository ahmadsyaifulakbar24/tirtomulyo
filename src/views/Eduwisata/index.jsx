import { Container, Grid, useEventCallback } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Banner2 from '../../components/banner2'
import { api_url } from '../../variable/BaseUrl'
import EduwisataCard from './EduwisataCard'

const useStyle = makeStyles((theme) => ({
    root: {
        marginTop: theme.spacing(7)
    },
}))


function Eduwisata() {
    const classes = useStyle()
    const [data, setData] = useState([])

    const getContentFromAPI = async () => {
        await axios.get(api_url + 'content')
        .then((res) => {
            setData(res.data)
        })
    }

    useEffect(() => {
        getContentFromAPI()
    }, [])

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
                                key={index}
                            >
                                <EduwisataCard 
                                    data={item}
                                />
                            </Grid>
                        ))
                    }
                </Grid>
            </Container>
        </div>
    )
}

export default Eduwisata
