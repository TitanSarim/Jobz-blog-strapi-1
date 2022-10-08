import React from 'react'
import Image from 'next/image';

import { IArticle } from '../types'

import BlogCard from './BlogCard';

import images from '../assets/images.jpg';


interface IPropTypes{
    articles: IArticle[];
}


const ArticleList = ({articles}: IPropTypes) => {
    
  return (

    <div className='all-articles-container'>

        <div className='all-articles-card-compinent'>
            {articles.map((article)=> {

                return(
                        <BlogCard article={article} key={article.id}/>                                      
                )

            })}
        </div>


        <div className='article-details-ads'>
                        <p>Lorem ipsum, dolor sit 
                            amet consectetur adipisicing 
                            elit. Repellat asperiores 
                        itaque voluptate ad consectetur voluptas et vitae fugit nesciunt, perspiciatis sapiente quod, nobis corrupti quo dolores placeat blanditiis ipsa eveniet!
                        </p>
        </div>

    </div>
  )
}

export default ArticleList