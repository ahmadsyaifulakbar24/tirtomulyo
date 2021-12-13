import React, { Fragment } from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { image_url } from '../../variable/BaseUrl';
import { makeStyles } from '@material-ui/styles';

const useStyle = makeStyles((theme) => ({
    root: {
        marginTop: 100
    },
    ornament3 : {
        position: 'absolute',
        width: '30%',
        top: '3%',
        right: '-10%',
        animationName: `$aniorna3`,
        animationDuration: '4s',
        animationIterationCount: 'infinite',
        overflowX: 'hidden',
        overflowY: 'hidden'
    },
    "@keyframes aniorna3": {
        "100%": {
          transform: 'rotate(360deg)'        }
    },
    title: {
        fontSize: 50,
        fontWeight: 600,
    },
    image: {
        width: '100%',
        padding: theme.spacing(0, 5, 0, 5),
        [theme.breakpoints.down('sm')]: {
            padding: theme.spacing(0, 1, 0, 1),
        },
    }
}))

function SliderContent(props) {
    const classes = useStyle()
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    };
    return (
        <Fragment>
            <div className={`${classes.root} konten row`}>
                <img 
                    className={classes.ornament3}
                    src={`${image_url}ornament3.png`} 
                    alt={`${image_url}ornament3.png`} 
                />
                <h1 className="col-12 mt-3 mb-3 nama-konten">{props.title}</h1>
                <div className="galeri col-12 mb-5">
                    <h4 
                        data-aos="fade-up" 
                        style={{ 
                            fontSize: '27px',
                            marginTop: 0,
                        }}
                    >
                        Galeri
                    </h4>
                    <div data-aos="fade-up">
                        <Slider {...settings}>
                            <div>
                                <img 
                                    src={props.gallery.image1} 
                                    alt={props.gallery.image1}
                                    className={classes.image}
                                />
                            </div>
                            <div>
                                <img 
                                    src={props.gallery.image2} 
                                    alt={props.gallery.image2}
                                    className={classes.image}
                                />
                            </div>
                            <div>
                                <img 
                                    src={props.gallery.image3} 
                                    alt={props.gallery.image3}
                                    className={classes.image}
                                />
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default SliderContent
