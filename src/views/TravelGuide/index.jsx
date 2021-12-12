import { Box, Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import React, { Fragment } from 'react'
import Banner2 from '../../components/banner2'
import GuideContent from './GuideContent'

const useStyle = makeStyles((theme) => ({
    root: {
        marginTop: theme.spacing(7)
    }, 
}))

function TravelGuide() {
    const classes = useStyle()

    return (
        <Fragment>
            <Banner2 title="Panduan Wisata" />\
            <GuideContent />
        </Fragment>
    )
}

export default TravelGuide
