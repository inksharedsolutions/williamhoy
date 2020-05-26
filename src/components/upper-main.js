import React from 'react'
import {Link} from 'gatsby'
import Book1 from '../images/book_1_front.jpg'
import Book2 from '../images/book_2_front.jpg'

const UpperMain =()=>{
    return  (
        <>
            <section className="upper-main">
                <div className="container-gt separator-line">
                    <h1>Books</h1>
                    
                    <p className="middle-params">
                        Lorem Ipsum is simply dummy 
                        text ofthe printing and 
                        typesetting industry.
                    </p>

                    <div className="grid-two-columns" id="wrapper-two-books">
                        <div className="book-wraps">
                            <img src={Book1}/>
                            <button>
                                <Link>Read More</Link>
                            </button>
                        </div>

                        <div className="book-wraps">
                            <img src={Book2}/>
                            <button>
                                <Link>Read More</Link>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default UpperMain