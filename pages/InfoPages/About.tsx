import { AxiosResponse } from 'axios';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import router from 'next/router';
import qs from 'qs';
import React from 'react'
import { Categories, Footer, Nav } from '../../components';
import { fetchCategories } from '../../http';
import { ICategory, ICollectionResponse, IPagination } from '../../types';
import { debounce } from '../../utils';

import {BiMessageSquare} from 'react-icons/bi';
import {FaRegAddressBook} from 'react-icons/fa';
import undraw from '../../assets/undraw.svg';
import Image from 'next/image';


interface IPropType{
    categories:{
        items: ICategory[];
        pagination: IPagination;
    }
}


const About= ({categories, }: IPropType) => {

    
    const handleSearch = (query: string) => {
        router.push(`/?search=${query}`);
    }



  return (

    <div>

          <Head>
            <title>Jobzcareer About Us</title>
            <meta name="Find Jobs in Pakistan by using Jobzcareer, Government Jobs 2022, Army Jobs 2022, Navy Jobs 2022, Latest Jobs 2022"   content="Latest Jobs, Government Jobs, Army Jobs 2022, Navy Jobs 2022, Latest Jobs 2022"/>
            <link rel="icon" href="/favicon.ico" />
          </Head>

          <Nav categories={categories.items} handleOnSearch={debounce(handleSearch, 1500)}/>
          <Categories categories={categories.items}/>

            <div className='about-contianer'>

                <div className='about-content'>
                  <h1>About Us</h1>
                  <p>Jobz-Career is the Top-Rated Jobs site in the Pakistan with awesome Traffic and unique visitors every month. Jobz-Career strives to put job seekers first, giving them free access to search for jobs and research companies. Every day, we connect Thousands of people to new opportunities.
                    <br />
                    Please note that Jobz-Career and its affiliates are directly or indirectly owned by a Pvt. Ltd. company, Siggmaa Ltd.
                  </p>

                  <ul className='about-content-icons'>

                    <li>
                      <span className='about-content-icons-span'><BiMessageSquare size={25}/></span>
                        <p>Email: <span>jobzcareerpk@gmail.com</span></p>
                    </li>

                    <li>
                      <span className='about-content-icons-span'><FaRegAddressBook size={25}/></span>
                        <p>Phone No: <span>+9203106727874</span></p>
                    </li>


                  </ul>

                </div>

                <div className='about-image'>
                  <Image
                    src={undraw}
                    alt="about-us image"
                    width={400}
                  />
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


export default About