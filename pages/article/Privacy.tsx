import { AxiosResponse } from 'axios';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import router from 'next/router';
import qs from 'qs';
import React from 'react'
import { Categories, Footer, Nav } from '../../components';
import {fetchCategories } from '../../http';
import {ICategory, ICollectionResponse, IPagination } from '../../types';
import { debounce } from '../../utils';





interface IPropType{
    categories:{
        items: ICategory[];
        pagination: IPagination;
    }
}


const Privacy= ({categories, }: IPropType) => {

    
    const handleSearch = (query: string) => {
        router.push(`/?search=${query}`);
    }



  return (

    <div>

            <Head>
                <title>Jobzcareer Privacy & Policy</title>
                <meta name="Find Jobs in Pakistan by using Jobzcareer, Government Jobs 2022, Army Jobs 2022, Navy Jobs 2022, Latest Jobs 2022"   content="Latest Jobs, Government Jobs, Army Jobs 2022, Navy Jobs 2022, Latest Jobs 2022"/>
                <link rel="icon" href="/favicon.ico" />
            </Head>

          <Nav categories={categories.items} handleOnSearch={debounce(handleSearch, 1500)}/>
          <Categories categories={categories.items}/>

            <div className='privacy-policy-container'>

                <h1>Privacy & Policy</h1>

                <div className='privacy-policy-content'>
                  <h3>Heading:</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, repellat sit 
                    minus sequi exercitationem error harum impedit placeat corrupti eaque accusamus 
                    repellendus dicta tempora porro reprehenderit nostrum vitae distinctio atque.</p>
                </div>

                <div className='privacy-policy-content'>
                  <h3>Heading:</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, repellat sit 
                    minus sequi exercitationem error harum impedit placeat corrupti eaque accusamus 
                    repellendus dicta tempora porro reprehenderit nostrum vitae distinctio atque.</p>
                </div>

                <div className='privacy-policy-content'>
                  <h3>Heading:</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, repellat sit 
                    minus sequi exercitationem error harum impedit placeat corrupti eaque accusamus 
                    repellendus dicta tempora porro reprehenderit nostrum vitae distinctio atque.</p>
                </div>

                <div className='privacy-policy-content'>
                  <h3>Heading:</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, repellat sit 
                    minus sequi exercitationem error harum impedit placeat corrupti eaque accusamus 
                    repellendus dicta tempora porro reprehenderit nostrum vitae distinctio atque.</p>
                </div>


                <div className='privacy-policy-content'>
                  <h3>Heading:</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, repellat sit 
                    minus sequi exercitationem error harum impedit placeat corrupti eaque accusamus 
                    repellendus dicta tempora porro reprehenderit nostrum vitae distinctio atque.</p>
                </div>

                <div className='privacy-policy-content'>
                  <h3>Heading</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, repellat sit 
                    minus sequi exercitationem error harum impedit placeat corrupti eaque accusamus 
                    repellendus dicta tempora porro reprehenderit nostrum vitae distinctio atque.</p>
                </div>

                <div className='privacy-policy-content'>
                  <h3>Heading</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, repellat sit 
                    minus sequi exercitationem error harum impedit placeat corrupti eaque accusamus 
                    repellendus dicta tempora porro reprehenderit nostrum vitae distinctio atque.</p>
                </div>

            </div>
            <Footer categories={categories.items}/>
    </div>

  

  )

}

export const getServerSideProps: GetServerSideProps = async ({query}) =>{


    const subQuery = {
        populate: ['sub_categories'],
      }

      
    const subCategory = qs.stringify(subQuery)


    const {data: categories}: AxiosResponse<ICollectionResponse<ICategory[]>> = await fetchCategories(subCategory);


   

    return{
        props:{
            categories:{
                items: categories.data,
              },
        }
        
    }
    

}


export default Privacy