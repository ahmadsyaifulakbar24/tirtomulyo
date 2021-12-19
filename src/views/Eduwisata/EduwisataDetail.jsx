import {makeStyles } from '@material-ui/core'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Banner2 from '../../components/banner2'
import { useParams } from "react-router-dom";
import { api_url, image_url } from '../../variable/BaseUrl'
import SliderContent from './SliderContent';
import './EduwisataDetail.css'
import EduwisataContent from './EduwisataContent';

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: theme.spacing(5)
    },
    title: {
        fontWeight: 600,
        paddingBottom: theme.spacing(3)
    },
    image: {
        width: "100%",
    },
    description: {
        marginTop: 15,
    }
}))

function EduwisataDetail() {
    const classes = useStyles()
    const { slug } = useParams()
    const [data, setData] = useState({})
    const contentDetailFromAPI = async() => {
        await axios.get(api_url + 'content/' + slug)
        .then((res) => {
            setData(res.data)
        })
    }

    useEffect(() => {
        contentDetailFromAPI()
    }, [])

    const gallery = {
        image1 : data.gallery_image_1,
        image2 : data.gallery_image_2,
        image3 : data.gallery_image_3
    }
    return (
        <div style={{ backgroundColor: "#F8f0C6" }}>
            <Banner2 
                img={data.header_image}
            />
            <img 
                style={{ marginTop: '-100px' }}
                className="header-image" 
                src={`${image_url}HeaderKonten.png`} alt="" 
            />
            <SliderContent
                gallery={ gallery }
                title={data.title}
            />
            <EduwisataContent
                content={data.content}
                funFact={data.fun_fact}
            />
        </div>
    )
}

export default EduwisataDetail
