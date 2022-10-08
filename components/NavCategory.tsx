import React,{useState} from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { ICategory } from '../types'

import {IoIosArrowDown} from 'react-icons/io'
import {HiOutlineMenuAlt2} from 'react-icons/hi'

import logo from '../assets/logo.png'
import { ImSearch } from 'react-icons/im';





interface IPropTypes{
    categories: ICategory[];
    handleOnSearch: (query: string) => void
  }

const NavCategory = ({categories, handleOnSearch}: IPropTypes) => {

    const [showMediaIcon, setShowMediaIcons] = useState(false); 


  return (
    <>
    <nav className='main-nav'>


            <div className='nav-logo'>
                <Image src={logo} alt="Website Logo" width={190} height={50}/>
            </div>

        <div className={showMediaIcon ? "menu-link  mobile-menu-link" : "menu-link"}>


            <ul>
                <li className='navbtns'>
                    <Link href='/'> 
                        <a>Home</a>
                    </Link>
                </li>
                
                <li className='navbtns'>
                    <Link href="/">
                        <a>Latest</a>
                    </Link>
                </li>

                <li className='dropdown'>
                    <button className='dropbtn'>
                        Category
                        <span><IoIosArrowDown size={22}/></span>
                    </button>
                        <div className='dropdown-content'>

                        {categories.map((category) =>(
                            <Link href={`/category/${category.attributes.Slug}`} key={category.id}>
                                {category.attributes.Title}
                            </Link>
                        ))}

                        </div>
                </li>

                <li className='navbtns'>
                    <Link href="InfoPages/About">
                        <a>About Us</a>
                    </Link>
                </li>

                <li className='navbtns'> 
                    <Link href="InfoPages/Contact">
                        <a>Contact Us</a>
                    </Link>
                </li>

                <li className='navbtns'> 
                    <Link href="InfoPages/Privacy">
                        <a>privacy & Policy</a>
                    </Link>
                </li>

            </ul>


        </div>

        <div className='nav-search'>
            <div className='search-bar-container'>
                <div className='search-bar-input'>
                    <input 
                        type="text" 
                        placeholder='Enter Skills or job title'
                        onChange={(e) => handleOnSearch(e.target.value)}
                    />
                    <span className='searchicon'><ImSearch size={24}/></span>
                </div>
                <button className='search-bar-btn'>Search Job</button>

            </div>
        </div>

        <div className='hambergmenu' onClick={()=> setShowMediaIcons(!showMediaIcon)}>
            <HiOutlineMenuAlt2 className='hamburgicon'/>
        </div>

    </nav>
    
    </>
  )
}



export default NavCategory