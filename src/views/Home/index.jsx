import { CssBaseline } from '@material-ui/core'
import React, { Fragment } from 'react'
import Banner from './Banner'
import Comment from './Comment'
import Content from './Content'
import Gallery from './Gallery'
import Packages from './Packages'

function Home() {
    return (
        <Fragment>
            <CssBaseline />
            <Banner />
            <Packages />
            <Content />
            <Gallery />
            <Comment />
        </Fragment>
    )
}

export default Home
