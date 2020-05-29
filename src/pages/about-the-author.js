import React from 'react'
import Layout from '../components/layout'
import Nav from '../components/nav'
import Banner from '../components/non-front-banner'
import AuthorImg from '../../static/img/author_img.png'

const ATB = (props)=>{
	
	return (
		<>
		 	<Layout>
		 		<Nav pathExt={props.path}/>
                 <Banner 
                 spanFirst={`About The`}
                 contextHeading={`Author`}/>



		 		<div className="container">
				    <section className="body-author-contents columns">

                        <div className="heading-quote column">
                            <div className="author-image-container">
                                <img src={AuthorImg} />
                            </div>

                            <div className="heading-quote">
                                <h4>
                                    The joy and comfort a human being gets from studying any one of the sacred books is
                                    ... a confirmation of the existence of a supreme being.
                                </h4>
                                
                                <span className="ata-span-fx">author quote</span>
                            </div>
                        </div>


                        <article className="article-section column" id="author">
                            <p>
                                I, William D. Hoy was born in San Diego, California and raised in Chula Vista a 
                                suburb of San Diego, living on a farm until I entered high school.
                                Graduated from Chula Vista Senior High School, years later I got
                                my Bachelor’s Degree from Columbia College. I retired from the United
                                States Army as a Chief Warrant Officer Four with 26 years of active duty.
                            </p>

                            <p>
                                I made my entry into the movie business as an actor while living
                                in San Francisco, appearing in some famous movies such as, In pursuit 
                                of Happiness; Money Ball; Milk; Four Christmases; and some not so famous 
                                ones such as; Mail Order Bride; Her Best Move; Ellen Bond Secret Agent;
                                Subprime Children; Control Tower; Violent Jake; and a half a dozen non-fiction 
                                shorts with, The World Astonishing News a Duo-Communications Production. 
                                I'm part of the cast for the up-coming movie Octoroon still in Pre Post Production.
                            </p>

                            <p>
                                <span className="author-name">
                                    <span className="author-span-ft">Author |  Writer </span>
                                    William Hoy
                                </span>
                            </p>

                        </article>
              

                    </section>
                </div>

		 	</Layout>
		</>
	)
}


export default ATB;