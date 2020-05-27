import React from 'react'
import Layout from '../components/layout'
import Nav from '../components/nav'
import Banner from '../components/non-front-banner'
import BookInfo from '../components/book-info/book-info'
import { DiscussionEmbed } from "disqus-react"

const ATB = (props)=>{


    const slug =(props.location.href);
	const disqusConfig = {
	  shortname: 'gardinernoble',
	  config: { identifier:  12, slug}
    }
    

	
	return (
		<>
		 	<Layout>
		 		<Nav pathExt={props.path}/>
		 		<Banner/>


                <main className="wrapperMain">
                    <div 
                        className="container"
                        id="book-containers" >


                            <BookInfo
                                data={{
                                    title:`Susies Submissions`,
                                    spanTitle: '',
                                    imgSrc: '',
                                    id:'susies_submisision',
                                    content:
                                    `Susie’s Submissions is an anthology of three stories about attractive middle-aged women who have been abandoned by their
                                    husbands. “The Price,” “The Office,” and “The Hot Tub” depict three women who are all named Susie,
                                    and all three are physically and emotionally similar.
                                    The author, Gardiner Noble, hopes this book will help men and
                                    husbands to be less critical of women and never take them for granted.`,

                                    ebooks:{
                                        stratton : 'https://www.stratton-press.com/books/susies-submissions/',
                                        barnes: 'https://www.barnesandnoble.com/w/susies-submissions-gardiner-noble/1134052029?ean=9781643457567',
                                        amazon :'https://www.amazon.com/Susies-Submissions-Gardiner-Noble-ebook/dp/B07Z46HBBT/ref=tmm_kin_swatch_0?_encoding=UTF8&qid=1571252796&sr=1-1', 
                                    },
                                    paperback:{
                                        amazon:'https://www.amazon.com/Susies-Submissions-Gardiner-Noble/dp/1643456318/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=1571252796&sr=1-1',
                                        barnes:'https://www.barnesandnoble.com/w/susies-submissions-gardiner-noble/1134052029?ean=9781643456317',
                                        booksamillion:'https://www.booksamillion.com/p/Susies-Submissions/Gardiner-Noble/9781643456539?id=7714171848832',
                                    }
                                }}
                            />

                            <BookInfo  
                                data={{
                                    title:`Beliefs`,
                                    spanTitle: '',
                                    imgSrc: '',
                                    id:'beliefs',
                                    content:
                                    `The book suggests alternate interpretations of various scientific and religious dogmas.`,

                                    ebooks:{
                                        stratton : 'https://www.stratton-press.com/books/beliefs/',
                                        barnes: 'https://www.barnesandnoble.com/w/beliefs-gardiner-noble/1134052027?ean=9781643457536',
                                        amazon :'https://www.amazon.com/Beliefs-Gardiner-Noble-ebook/dp/B07Z44C55F/ref=tmm_kin_swatch_0?_encoding=UTF8&qid=1571251847&sr=8-1', 
                                    },
                                    paperback:{
                                        amazon:'https://www.amazon.com/Beliefs-Gardiner-Noble/dp/1643455338/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=1571251847&sr=8-1',
                                        barnes:'https://www.barnesandnoble.com/w/beliefs-gardiner-noble/1134052027?ean=9781643455334',
                                        booksamillion:'https://www.booksamillion.com/p/Beliefs/Gardiner-Noble/9781643455334?id=7714171848832',
                                    }
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