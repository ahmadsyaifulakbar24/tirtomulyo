import React, { Fragment, useEffect, useState } from 'react'
import ReactHtmlParser from "react-html-parser";
import Slider from 'react-slick';
import { parse } from "himalaya";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { image_url } from '../../variable/BaseUrl';

function EduwisataContent(props) {
    const [funFact, setFF] = useState([]);

    useEffect(() => {
        if (props.funFact) {
            const json = parse(props.funFact);
            let parsed = json[0];
            let ff = [];
            // hacky stuff for parse text on html list to list object
            for (var i in parsed.children) {
                var child = parsed.children[i]
                for (var j=0; j<5; j++){
                    if (child.children){
                        child = child.children[0]
                    }
                }
                ff.push(child.content)
            }
            setFF(ff);
        }
    }, [props]);

    const settings = {
        className: "center",
        centerMode: true,
        slidesToShow: 3,
        speed: 500,
    };

    return (
        <Fragment>
            <div className="fakta">
                <h1 data-aos="fade-down">Fakta!</h1>
                <div data-aos="fade-down">
                    <Slider {...settings}>
                        {funFact.map((value, index) => {
                        return (
                            <div>
                                <div 
                                    className="card" 
                                    key={index}
                                    style={{ 
                                        display: 'inline-block'
                                    }}
                                >
                                    <h4>{value}</h4>
                                </div>
                            </div>
                        );
                        })}
                    </Slider>
                </div>
            </div>

            <div
                className="tempatisi"
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
            >
                <div className="isi">
                    <img className="ornament1" src={`${image_url}/ornament1.png`} alt="" />
                    <img className="ornament2" src={`${image_url}/ornament2.png`} alt="" />

                    <div>{ReactHtmlParser(props.content)}</div>
                </div>
            </div>
        </Fragment>
    )
}

export default EduwisataContent
