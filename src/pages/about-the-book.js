import React from 'react'
import Layout from '../components/layout'
import Nav from '../components/nav'
import Banner from '../components/non-front-banner'
import BookInfo from '../components/book-info/book-info'
import { DiscussionEmbed } from "disqus-react"
import Book1 from '../images/book_front_1.png'
import Book2 from '../images/book_front_2.png'

const ATB = (props)=>{


    const slug =(props.location.href);
    
	const disqusConfig = {
	  shortname: 'william-hoy',
	  config: { identifier:  12, slug}
    }
    

	
	return (
		<>
		 	<Layout>
		 		<Nav pathExt={props.path}/>
		 		<Banner
                    spanFirst={`About The`}
                    contextHeading={`Book`}
                 
                 />

                <main className="wrapperMain">
                    <div 
                        className="container"
                        id="book-containers" >

                            <BookInfo
                                data={{
                                    title:`The Gifted One`,
                                    spanTitle: '',
                                    imgSrc: Book2,
                                    id:'the_gifted_one',
                                    content:
                                    `Two wooden pulleys are attached to a large wooden beam stretched across the temple ceiling. 
                                     The assistants pull the rope and raise the litter into a standing position on its end. Andre,
                                     strapped with leather restraints crossing his forehead, chest, waist, legs, arms, and hands, 
                                     facing the giant candles as he seeks the celestial spirt, he meditates.

                                     As Andre's body starts shaking violently, he lets out a terrifying shriek,
                                     and then, as if on cue, his body does limp and he is deathly silent.`,

                                    ebooks:{
                                        stratton : 'https://www.stratton-press.com/books/the-gifted-one/',
                                        barnes: 'https://www.barnesandnoble.com/w/the-gifted-one-william-d-hoy/1135498639?ean=9781643458120',
                                        amazon :'https://www.amazon.com/Gifted-One-William-D-Hoy-ebook/dp/B082MT8XMB/ref=tmm_kin_swatch_0?_encoding=UTF8&qid=&sr=', 
                                    },
                                    paperback:{
                                        amazon:'https://www.amazon.com/Gifted-One-William-D-Hoy/dp/1643453769/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=&sr=',
                                        barnes:'https://www.barnesandnoble.com/w/the-gifted-one-william-d-hoy/1135498639?ean=9781643453767',
                                        booksamillion:'https://www.booksamillion.com/p/Gifted-One/William-D-Hoy/9781643453767?id=7714171848832',
                                    },
                                    screenPlay: false
                                }}
                            />

                            <BookInfo  
                                data={{
                                    title:`Gotch'em`,
                                    spanTitle: "Johnny Taggett",
                                    imgSrc: Book1,
                                    id:'johnny_taggett',
                                    content:
                                    `Former New York cop, Johnny Taggett, our hero in this mystery novel 
                                     takes many turns and keeps you thinking, it holds your attention.
                                     In this self-indulged style of Dashiell Hammett’s Sam Spade or Raymond Chandler’s 
                                     Phillip Marlowe, writer William Hoy takes you thru the gumshoe’s story of intrigue,
                                     dirty back alleys, dirty ashtrays, dirty offices and lets us remember and reflect 
                                     on a time when pulp fiction was at its heyday.

                                     Taggett the perfect pulp tuff guy, told in a story of sweat and dirt,
                                     a man’s world where women are dames and anything else is eye candy. 
                                     This story also has some great characters in Chew - his partners,
                                     Chen and Jie, and Mrs Foulsworth who’s heavily veiled cover makes
                                     her as mysterious as this novel.

                                     Gangsters and mobs couldn’t clean up all this dirt but that’s 
                                     the way pulp fictions is supposed to be. Back to the dark nights
                                     and street lamp alleys where no one is safe but Taggett’s determined
                                     to bring his partner Murphy’s killer to justice.`,

                                    ebooks:{
                                        stratton : 'https://www.stratton-press.com/books/gotchem-johnny-taggett/',
                                        barnes: 'https://www.barnesandnoble.com/w/gotchem-william-d-hoy/1131520640?ean=9781643454818',
                                        amazon :'https://www.amazon.com/Gotchem-Taggett-William-D-Hoy-ebook/dp/B07RGS8LC4/ref=tmm_kin_swatch_0?_encoding=UTF8&qid=&sr=', 
                                    },
                                    paperback:{
                                        amazon:'https://www.amazon.com/Gotchem-Taggett-William-D-Hoy/dp/1643452851/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=&sr=',
                                        barnes:'https://www.barnesandnoble.com/w/beliefs-gardiner-noble/1134052027?ean=9781643455334',
                                        booksamillion:'https://www.booksamillion.com/p/Gotchem/William-D-Hoy/9781643452852?id=7714171848832',
                                    },
                                    screenPlay: true
                                }}
                            />

                            <div className="commentSection" >
                                <DiscussionEmbed {...disqusConfig} />
                            </div>
                    </div>	
                </main>


		 	</Layout>
		</>
	)
}


export default ATB;