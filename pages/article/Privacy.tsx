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
                  <h3>At JobzCareer:</h3>
                  <p>accessible from https://jobzcareer.com, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Jobzcareer.com and how we use it.
                    <br />
                    <br />
                    If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.
                    <br />
                    <br />
                    This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in Jobzcareer.com. This policy is not applicable to any information collected offline or via channels other than this website. Our Privacy Policy was created with the help of the Free Privacy Policy Generator.
                  </p>
                </div>

                <div className='privacy-policy-content'>
                  <h3>Consent:</h3>
                  <p>By using our website, you hereby consent to our Privacy Policy and agree to its terms..</p>
                </div>

                <div className='privacy-policy-content'>
                  <h3>Information we collect:</h3>
                  <p>LThe personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.
                    <br />
                    <br />
                    If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide.
                    <br />
                    <br />
                    If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide.
                  </p>
                </div>

                <div className='privacy-policy-content'>
                  <h3>How we use your information:</h3>
                  <p>We use the information we collect in various ways, including to:
                    <br />
                    <br />
                    •	Provide, operate, and maintain our website.
                    <br />
                    <br />
                    •	Improve, personalize, and expand our website.
                    <br />
                    <br />
                    •	Understand and analyze how you use our website.
                    <br />
                    <br />
                    •	Develop new products, services, features, and functionality.
                    <br />
                    <br />
                    •	Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes.
                    <br />
                    <br />
                    •	Send you emails
                    <br />
                    <br />
                    •	Find and prevent fraud
                    <br />
                  </p>
                </div>


                <div className='privacy-policy-content'>
                  <h3>Log Files:</h3>
                  <p>Jobzcareer.com follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services' analytics. The information collected by log files include internet protocol (IP) addresses, browser type, 
                  <br />
                  <br />
                  Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users' movement on the website, and gathering demographic information.
                  </p>
                </div>

                <div className='privacy-policy-content'>
                  <h3>Cookies and Web Beacons:</h3>
                  <p>Like any other website, Jobzcareer.com uses 'cookies'. These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information.</p>
                </div>

                <div className='privacy-policy-content'>
                  <h3>Google DoubleClick DART Cookie:</h3>
                  <p>Google is one of a third-party vendor on our site. It also uses cookies, known as DART cookies, to serve ads to our site visitors based upon their visit to www.website.com and other sites on the internet. However, visitors may choose to decline the use of DART cookies by visiting the Google ad and content network Privacy Policy at the following URL – https://policies.google.com/technologies/ads</p>
                </div>

                <div className='privacy-policy-content'>
                  <h3>Advertising Partners Privacy Policies:</h3>
                  <p>You may consult this list to find the Privacy Policy for each of the advertising partners of Jobzcareer.com.
                    <br />
                    <br />
                    Third-party ad servers or ad networks uses technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on Jobzcareer.com, which are sent directly to users' browser. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on websites that you visit.
                    <br />
                    <br />
                    Note that Jobzcareer.com has no access to or control over these cookies that are used by third-party advertisers.
                  </p>
                </div>

                <div className='privacy-policy-content'>
                  <h3>Third Party Privacy Policies:</h3>
                  <p>Jobzcareer.com's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options.
                    <br />
                    <br />
                    You can choose to disable cookies through your individual browser options. To know more detailed information about cookie management with specific web browsers, it can be found at the browsers' respective websites.
                  </p>
                </div>

                <div className='privacy-policy-content'>
                  <h3>CCPA Privacy Rights (Do Not Sell My Personal Information):</h3>
                  <p>Under the CCPA, among other rights, California consumers have the right to
                    <br />
                    <br />
                    Request that a business that collects a consumer's personal data disclose the categories and specific pieces of personal data that a business has collected about consumers.
                    <br />
                    <br />
                    Request that a business delete any personal data about the consumer that a business has collected.
                    <br />
                    <br />
                    Request that a business that sells a consumer's personal data, not sell the consumer's personal data.
                    <br />
                    <br />
                    If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.
                  </p>
                </div>

                <div className='privacy-policy-content'>
                  <h3>GDPR Data Protection Rights:</h3>
                  <p>We would like to make sure you are fully aware of all of your data protection rights. Every user is entitled to the following:
                    <br />
                    <br />
                    The right to access – You have the right to request copies of your personal data. We may charge you a small fee for this service.
                    <br />
                    <br />
                    The right to rectification – You have the right to request that we correct any information you believe is inaccurate. You also have the right to request that we complete the information you believe is incomplete.
                    <br />
                    <br />
                    The right to erasure – You have the right to request that we erase your personal data, under certain conditions.
                    <br />
                    <br />
                    The right to restrict processing – You have the right to request that we restrict the processing of your personal data, under certain conditions.
                    <br />
                    <br />
                    The right to object to processing – You have the right to object to our processing of your personal data, under certain conditions.
                    <br />
                    <br />
                    The right to data portability – You have the right to request that we transfer the data that we have collected to another organization, or directly to you, under certain conditions.
                    <br />
                    <br />
                    If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.
                  </p>
                </div>

                <div className='privacy-policy-content'>
                  <h3>Children's Information:</h3>
                  <p>Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity.
                    <br />
                    <br />
                  Jobzcareer.com does not knowingly collect any Personal Identifiable Information from children under the age of 18. If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our records.
                  </p>
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