import React from 'react'
import {Link} from 'gatsby'
import AuthorImg from '../../static/img/author_img.jpg'

const LowerMain = ()=>{
    return(
        <>
            <section className="author-section">
                <div className="container-gt">
                    <div className="grid-two-columns" id="author-container">
                        <div className="wrapper-auth-content auth-img-container">
                            <img src={AuthorImg} />
                        </div>

                        <div className="wrapper-auth-content">
                            <p>
                                Lorem Ipsum is simply dummy text 
                                of the printing and typesetting industry.
                            </p>

                            <h1>William Hoy</h1>

                            <span className="span-tagline">Author & Writer</span>

                            <button>
                                <Link to="">
                                    Read More
                                </Link>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default LowerMain 