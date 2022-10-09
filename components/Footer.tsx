import Link from 'next/link';
import React from 'react'
import { ICategory} from '../types'
import {AiOutlineCopyrightCircle} from 'react-icons/ai';


interface IPropTypes{
  categories: ICategory[];
}



const Footer = ({categories}: IPropTypes) => {
  return (

      <div className='footer'>

        <div className='footer-container'>

          <div className='footer-categories'>

            {categories.map((category) => {
                return(
                <li key={category.id} className='footer-categories-list'>
                    <Link href={`/category/${category.attributes.Slug}`} >
                        {category.attributes.Title}
                    </Link>
                </li>
                )
            })}

          </div>

          <div className='footer-pages'>

            <ul>

              <li>
                <Link href="/">
                  <a >Latest Jobs</a>
                </Link>
              </li>

              <li>
                <Link href="/InfoPages/About">
                  <a >About Us</a>
                </Link>
              </li>

              <li>
                <Link href="/InfoPages/Contact">
                  <a >Contact Us</a>
                </Link>
              </li>

              <li>
                <Link href="/InfoPages/Privacy">
                  <a >Privacy & Policy</a>
                </Link>
              </li>

            </ul>

          </div>

        </div>


      <div className='downfooter'>
          <span>Copyright <p><AiOutlineCopyrightCircle size={20}/> 2022 JobsBlog</p></span>
          <p>Design and Developed By <a href="">Sarimxahid</a></p>
      </div>

    </div>
  )
}

export default Footer