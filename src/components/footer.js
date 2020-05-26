import React from 'react'
import {Link} from 'gatsby'
import {faTwitter, faInstagram, faFacebook, faGoodreads } from '@fortawesome/fontawesome-free-brands'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


const Footer = ()=>{
    return(
        <>  
            <footer className="footer-section">
                <div className="container-gt" id="footer-info">
                    <h1>WH.</h1>
                    <p>
                        William Hoy loves to hear from readers. You can reach him via email. 
                        Feel free to send questions about writing, his works, interviews 
                        and other publicity matters.
                    </p> 

                    <nav>
                        <ul>
                            <li>
                                <a href="">
                                    <FontAwesomeIcon
                                        className='font-awesome'
                                        icon={faFacebook} />
                                </a>
                            </li>

                            <li>
                                <a href="">
                                    <FontAwesomeIcon
                                        className='font-awesome'
                                        icon={faTwitter} />
                                </a>
                            </li>

                            <li>
                                <a href="">
                                    <FontAwesomeIcon
                                        className='font-awesome'
                                        icon={faInstagram} />
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <FontAwesomeIcon 
                                        className='font-awesome'
                                        icon={faGoodreads} />
                                </a>
                            </li>
                        </ul>
                    </nav>

                    <div className="two-grid-column">
                        <p>Copyright 2020. Stratton Press</p>

                        <ul>
                            <li>
                                <Link to="">Privacy Policy</Link>
                            </li>

                            <li>
                                <Link to="">Terms & Condition</Link>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;


