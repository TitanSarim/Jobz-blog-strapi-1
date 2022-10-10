import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import {AxiosResponse} from 'axios';
import qs from 'qs'
import * as ga from '../lib/google-analytics'
import {fetchCategories, fetchArticles} from '../http'
import {ICollectionResponse, ICategory, IArticle, IPagination, IQueryOptions} from '../types';

import {Categories, NavCategory, ArticleList, Pagination, Footer} from '../components'
import { useRouter } from 'next/router';
import { debounce } from '../utils';
import { useEffect } from 'react';
import Script from 'next/script';









interface IPropTypes{
  categories:{
    items: ICategory[];
  };

  articles:{
    items: IArticle[];
    pagination: IPagination;
  }

}

const router = useRouter()

  useEffect(() => {
   const handleRouterChnage = (url:any) =>{
    ga.pageview(url)
   }

   router.events.on('routeChangeComplete', handleRouterChnage);
   return () => {
     router.events.off('routeChangeComplete', handleRouterChnage);
   }

  }, [router.events])



const Home: NextPage<IPropTypes> = ({categories, articles}) => {

  const router = useRouter();

  const {page, pageCount} = articles.pagination;

  const handleSearch = (query: string)=>{
      router.push(`/?search=${query}`);
  }

  // console.log('categories', categories)

    return (


        <div>

          <Head>
            <title>Jobzcareer</title>
            <meta name="Find Jobs in Pakistan by using Jobzcareer, Government Jobs 2022, Army Jobs 2022, Navy Jobs 2022, Latest Jobs 2022"   content="Latest Jobs, Government Jobs, Army Jobs 2022, Navy Jobs 2022, Latest Jobs 2022"/>
            <link rel="icon" href="/favicon.ico" />
          </Head>

          <Script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`} strategy='afterInteractive'/>
              
              <Script id="google-analytics-script" strategy='afterInteractive'>
                {`
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());

                  gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');
                `}
            </Script>
          

          <NavCategory categories={categories.items} handleOnSearch={debounce(handleSearch, 1500)}/>
          <Categories categories={categories.items}/>
          <ArticleList articles={articles.items} />
          <Pagination page={page} pageCount={pageCount}/>
          <Footer categories={categories.items}/>

        </div>
    )
}


// ==========================================================
// ==========================================================

//  fetch data

export const getServerSideProps: GetServerSideProps = async ({query}) =>{

  // query parameters
  const options: Partial<IQueryOptions>= {
    populate: ['author.avatar'],
    sort: ['id:desc'],

    pagination: {
      page: query.page ? +query.page : 1,
      pageSize: 12
    }
  }

  const subQuery = {
    populate: ['sub_categories'],
  }

  // search query

  if(query.search){
    options.filters = {
      Title: {
        $containsi: query.search,
      }
    }
  }

  // fetch articles

  const queryString = qs.stringify(options)

  const subCategory = qs.stringify(subQuery)

  const {data: articles}: AxiosResponse<ICollectionResponse<IArticle[]>> = await fetchArticles(queryString);


  const {data: categories}: AxiosResponse<ICollectionResponse<ICategory[]>> = await fetchCategories(subCategory);


  // console.log('categories', categories)

  return{
    props:{
      categories:{
        items: categories.data,
      },

      articles:{
        items: articles.data,
        pagination: articles.meta.pagination
      }
    }
  }


}





export default Home