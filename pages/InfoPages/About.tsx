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
            <title>Jobs Blog About Us</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
          </Head>

          <Nav categories={categories.items} handleOnSearch={debounce(handleSearch, 1500)}/>
          <Categories categories={categories.items}/>

            <div className='about-contianer'>

                <div className='about-content'>
                  <h1>About Us</h1>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum asperiores 
                    consequatur porro numquam, voluptas sit? Dolore animi vero accusantium eum eveniet 
                    consequatur reiciendis placeat autem tempora quia. Nisi, eum est. Lorem ipsum dolor sit amet, 
                    consectetur adipisicing elit. Fugit exercitationem et tempora? Corrupti molestiae voluptatum vero, 
                    dolorum porro dolorem consequuntur nulla nisi, saepe id voluptate est, quidem vel sed repudiandae.</p>

                  <ul className='about-content-icons'>

                    <li>
                      <span className='about-content-icons-span'><BiMessageSquare size={25}/></span>
                        <p>Email: <span>Sarimxahid123@gmail.com</span></p>
                    </li>

                    <li>
                      <span className='about-content-icons-span'><FaRegAddressBook size={25}/></span>
                        <p>Phone No: <span> +94334523778343</span></p>
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