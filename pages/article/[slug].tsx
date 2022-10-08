import { AxiosResponse } from 'axios';
import { GetServerSideProps } from 'next';
import Image from 'next/image';
import Head from 'next/head';
import router from 'next/router';
import qs from 'qs';
import { MDXRemote,  MDXRemoteSerializeResult} from 'next-mdx-remote';
import React from 'react'
import { Categories, Footer, NavArticle } from '../../components';
import { fetchArticlesBySlug, fetchCategories } from '../../http';
import { IArticle, ICategory, ICollectionResponse, IPagination } from '../../types';
import { debounce, formateDate, serializeMarkDown } from '../../utils';




interface IPropType{
    article: IArticle;
    notFound?: boolean;

    categories:{
        items: ICategory[];
        pagination: IPagination;
    }
}


const slug= ({categories, article, notFound=false}: IPropType) => {

    
    const handleSearch = (query: string) => {
        router.push(`/?search=${query}`);
    }

    console.log(article)

  return (

    <>

            <Head>
                <title>{article.attributes.Title}</title>
                <title>Jobzcareer About Us</title>
                <meta name="Find Jobs in Pakistan by using Jobzcareer, Government Jobs 2022, Army Jobs 2022, Navy Jobs 2022, Latest Jobs 2022"   content="Latest Jobs, Government Jobs, Army Jobs 2022, Navy Jobs 2022, Latest Jobs 2022"/>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <NavArticle categories={categories.items} handleOnSearch={debounce(handleSearch, 1500)}/>
            <Categories categories={categories.items}/>

            <div className='article-details-container'>   

                <div className='article-details-wrapper'>

                    <div className='article-details-title'>
                        {article.attributes.Title}
                    </div>

                    <div className='article-details-author'>

                        <div className='article-details-auhtor-image'>
                            <img src={`https://storage.googleapis.com/jobz-career-jobz-blog/Screenshot_2022_10_08_165903_e37c8b73d1/Screenshot_2022_10_08_165903_e37c8b73d1.svg`}
                                height={35}
                                width={35}
                            />
                        </div>

                        <div className='article-details-author-name'>
                            {article.attributes.author.data.attributes.username} <span>on</span> &nbsp;
                            
                        </div>

                        <div className='article-details-date'>
                            <span>{formateDate(article.attributes.updatedAt)}</span>
                        </div>

                    </div>

                    <div className='article-details-body'>
                            <MDXRemote
                                {...(article.attributes.body as MDXRemoteSerializeResult)}  
                                
                            />
                    </div>

                    <div>

                        {/* <div className='article-details-image'>    
                            <img
                                src={`http://localhost:1337${article.attributes.Image.data.attributes.url}`}  
                                alt={article.attributes.Title}
                                height={600}
                                width={710}

                            />
                        </div> */}

                    </div>


                </div>

                <div className='article-details-ads'>
                        <p>Lorem ipsum, dolor sit 
                            amet consectetur adipisicing 
                            elit. Repellat asperiores 
                        itaque voluptate ad consectetur voluptas et vitae fugit nesciunt, perspiciatis sapiente quod, nobis corrupti quo dolores placeat blanditiis ipsa eveniet!
                        </p>
                </div>

                

            </div>
            <Footer categories={categories.items}/>
    </>

  )

}

export const getServerSideProps: GetServerSideProps = async ({query}) =>{

    const queryString = qs.stringify({

        populate: ['Image', 'author.avatar'],
        filters:{
            Slug:{
                $eq: query.slug
            }
        }
    })


    const subQuery = {
        populate: ['sub_categories'],
      }

      
    const subCategory = qs.stringify(subQuery)

    const {data: article}: AxiosResponse<ICollectionResponse<IArticle[]>> = await fetchArticlesBySlug (queryString);

    const {data: categories}: AxiosResponse<ICollectionResponse<ICategory[]>> = await fetchCategories(subCategory);

    
    

    if(article.data.length === 0){
        return {
            notFound: true,
        };
    }

    return{
        props:{
            article: await serializeMarkDown(article.data[0]),

            categories:{
                items: categories.data,
              },
        }
        
    }
    

}


export default slug