import React from 'react'
import Link from 'next/link'
import { ICategory} from '../types'



interface IPropTypes{
  categories: ICategory[];
  // subCategories: ISubCategories[];
}

const Categories = ({categories}: IPropTypes) => {
  return (

    <div className='categories-container'>

      {categories.map((category) => {

          return(

          <li key={category.id} className='categories-dropdown'>

            <button className='category-btn'>
              <Link href={`/category/${category.attributes.Slug}`} >
                  {category.attributes.Title}
              </Link>
            </button>

           {/* <div className='category-dropdown-content'>
              {categories.map((category) =>(
                <Link href="">
                  <span>

                    {category.attributes.sub_categories.data.map((item)=>(
                      <a key={item.id}>{item.attributes.Title}</a>
                    ))}

                  </span>
                </Link>
              ))}
            </div> */}

          </li>
          

          )

      })}

    </div>
  )
}

export default Categories


