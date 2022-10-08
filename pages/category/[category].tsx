import { AxiosResponse } from 'axios'
import { GetServerSideProps } from 'next'
import Head  from 'next/head'
import { useRouter } from 'next/router'
import qs from 'qs'
import React from 'react'


import {Nav, Categories, ArticleList, Pagination, Footer} from '../../components'
import { fetchArticles, fetchCategories} from '../../http'
import { IArticle, ICategory, ICollectionResponse, IPagination, IQueryOptions,  } from '../../types'
import { MakeCategory, capatilizaFirstLeter, debounce } from '../../utils'




interface IPropType{
  categories:{
    items: ICategory[];
    pagination: IPagination;
  },

  articles:{
    items: IArticle[];
    pagination: IPagination;
  };

  slug: string;
}


const category = ({categories, articles, slug}: IPropType) => {

  const router = useRouter()

  const {category: categorySlug} =  router.query
  const {page, pageCount} = articles.pagination;

  const formatedCategory = () =>{
    return capatilizaFirstLeter(MakeCategory(slug));
  }

  const handleSearch = (query: string)=>{
    router.push(`/category/${categorySlug}/?search=${query}`);
  }


  return (
    <div>

          <Head>
            <title>Jobs Blog {formatedCategory()}</title>
            <meta name="Find Jobs in Pakistan by using Jobzcareer, Government Jobs 2022, Army Jobs 2022, Navy Jobs 2022, Latest Jobs 2022"   content="Latest Jobs, Government Jobs, Army Jobs 2022, Navy Jobs 2022, Latest Jobs 2022"/>
          </Head>

          <Nav categories={categories.items} handleOnSearch={debounce(handleSearch, 1500)}/>
          <Categories categories={categories.items}/>
          <ArticleList articles={articles.items} />
          <Pagination page={page} pageCount={pageCount} redirectUrl={`/category/${categorySlug}`}/>
          <Footer categories={categories.items}/>

    </div>
  )
}



export const getServerSideProps: GetServerSideProps = async ({query}) =>{


  // QUERY PARAMETER 
  const options: Partial<IQueryOptions> = {
    populate: ['author.avatar'],
    sort: ['id:desc'],
    filters:{
      category:{
        slug: query.category,
      },
    },
    pagination: {
      page: query.page ? +query.page : 1,
      pageSize: 12,
    },
  };

  // search query

  if(query.search){
    options.filters = {
      Title: {
        $containsi: query.search,
      }
    }
  }


  
  const subQuery = {
    populate: ['sub_categories'],
  }
  

  const queryString = qs.stringify(options)
  const subCategory = qs.stringify(subQuery)

  const {data: articles}: AxiosResponse<ICollectionResponse<IArticle[]>> = await fetchArticles(queryString);
  
  const {data: categories}: AxiosResponse<ICollectionResponse<ICategory[]>> = await fetchCategories(subCategory);


    return{
      props:{
        categories:{
          items: categories.data,
          pagination: categories.meta.pagination
        },

        articles:{
          items: articles.data,
          pagination: articles.meta.pagination
        },

        slug: query.category,
    }

  }

}

export default category