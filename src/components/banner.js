import React from 'react'
import {Link} from 'gatsby'
import  ImgBanner from '../../static/banner/banner_img.svg'

const Banner = ()=>{
    return (
        <>
            <section className="banner-section">
                <div className="grid-two-columns">
                    
                    <div className="left-col">
                        <div className="banner-content-wrapper">
                            <h1>
                                <span>The Features</span> 
                                <span>Belongs To Us</span>
                            </h1>
                            <p>
                                Lorem Ipsum is simply 
                                dummy text of the printing and 
                                typesetting industry.
                            </p>
                            <button>
                                <Link to="">
                                    Read More
                                </Link>
                            </button>
                        </div>
                    </div>

                    <div className="right-col banner-img">
                        <img src={ImgBanner}/>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Banner;