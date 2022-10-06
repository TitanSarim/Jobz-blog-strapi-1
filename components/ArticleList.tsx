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


        <div className='home-page-add'>

            <Image
                src={images}
                alt="add image"
            />

        </div>

    </div>
  )
}

export default ArticleList