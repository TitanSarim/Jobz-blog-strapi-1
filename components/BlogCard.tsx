import Link from 'next/link';
import React from 'react'
import Image from 'next/image';
import {formateDate} from '../utils'

import {IArticle} from '../types';




import images from '../assets/images.jpg';



interface IPropTypes{
    article: IArticle;
}



const BlogCard = ({article}: IPropTypes) => {
  return (

    <div className='article-card-container'>

        <div className='article-card-wrapper'>

                <div className='article-card-title'>
                    <Link href={`/article/${article.attributes.Slug}`}>
                        <button>{article.attributes.Title}</button>
                    </Link>
                </div>

                <div className='article-card-detials'>
                    <div className='article-card-auhtor-image'>
                        <Image src={`https://powerful-meadow-03273.herokuapp.com/${article.attributes.author.data.attributes.avatar.data.attributes.formats.thumbnail.url}`}
                            height={35}
                            width={35}
                        />
                    </div>

                    <div className='article-card-auhtor-name'>
                        {article.attributes.author.data.attributes.username} on &nbsp;
                        
                    </div>

                    <div className='article-card-auhtor-date'>
                        <span>{formateDate(article.attributes.updatedAt)}</span>
                    </div>

                </div>


                <div className='article-card-shordesc'>
                    {article.attributes.shortDescription.slice(0, 250)} {' '}
                    {article.attributes.shortDescription.length > 250 ? ' . . . ' : ''}
                </div>

                <div className='article-card-apply-btn'>
                    <Link href={`/article/${article.attributes.Slug}`}>
                        <button>Apply</button>
                    </Link>
                </div>

        </div>

    </div>
  )
}

export default BlogCard