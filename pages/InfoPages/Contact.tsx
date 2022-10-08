import { AxiosResponse } from 'axios';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import router from 'next/router';
import qs from 'qs';
import React from 'react'
import { Categories, Footer, Nav, Form } from '../../components';
import {fetchCategories } from '../../http';
import {ICategory, ICollectionResponse, IPagination } from '../../types';
import { debounce } from '../../utils';

import {GoLocation} from 'react-icons/go';
import {BsTelephone} from 'react-icons/bs';
import {SiMinutemailer} from 'react-icons/si';
import {TbBrandGoogle} from 'react-icons/tb';


interface IPropType{
    categories:{
        items: ICategory[];
        pagination: IPagination;
    }
}


const Contact= ({categories, }: IPropType) => {

    
    const handleSearch = (query: string) => {
        router.push(`/?search=${query}`);
    }


  return (

    <div>

            <Head>
              <title>Jobzcareer Contact Us</title>
              <meta name="Find Jobs in Pakistan by using Jobzcareer, Government Jobs 2022, Army Jobs 2022, Navy Jobs 2022, Latest Jobs 2022"   content="Latest Jobs, Government Jobs, Army Jobs 2022, Navy Jobs 2022, Latest Jobs 2022"/>
                <link rel="icon" href="/favicon.ico" />
            </Head>

          <Nav categories={categories.items} handleOnSearch={debounce(handleSearch, 1500)}/>
          <Categories categories={categories.items}/>

            <div className='contact-contianer'>

                <div className='contactus-form'>

                 <Form/>

                </div>

                <div className='contactus-address'>

                  <h1>Contact Information</h1>

                  <p>We're open for any suggesstion or just to have a chat</p>

                  <div className='contactus-address-info'>
                    <ul>
                      <li>
                        <p className='address-icons'><GoLocation size={25}/></p>
                        <span>Address: <p>Pakistan, Bahawalpur</p></span>
                      </li>
                      <li>
                        <p className='address-icons'><BsTelephone size={25}/></p>
                        <span> Phone: <p>+92 82726192</p></span>
                      </li>
                      <li>
                        <p className='address-icons'><SiMinutemailer size={25}/></p>
                        <span>Email: <p>Sarimxahid123@gmail.com</p></span>
                      </li>
                      <li>
                        <p className='address-icons'><TbBrandGoogle size={25}/></p>
                        <span>Website: <p>www.example.com</p></span>
                      </li>
                    </ul>
                  </div>

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


export default Contact