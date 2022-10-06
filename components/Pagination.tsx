import qs from 'qs';
import React from 'react'
import { TDirection } from '../types'
import {useRouter} from 'next/router';





interface IpropType{
    page: number;
    pageCount: number;
    redirectUrl?: string;
}


const Pagination = ({page, pageCount, redirectUrl = '/'}: IpropType) => {
    
    const router = useRouter();


    const isNextDisabled = ():any => {
        return page >= pageCount;
    }

    const isPrevDisabled = ():any => {
        return page <= 1;
    }
  
  const handlePaginate = async(direction: TDirection) =>{

    if(direction === 1 && isNextDisabled()){
        return;

    }

    if(direction === -1 && isPrevDisabled()){
        return;

    }

    const queryString = qs.stringify({
        ...router.query,
        page: page + direction,
    });

    router.push(`${redirectUrl}?${queryString}`);

  }
  
    return (

    <div className='pagination-container'>

        <button onClick={() => handlePaginate(-1)} className={` ${"pagination-btn"} ${isPrevDisabled() ? "disabled" : " "}`}>
            Previous
        </button>

        <button onClick={() => handlePaginate(1)} className={` ${"pagination-btn"} ${isNextDisabled() ? "disabled" : " "}`}>
            Next
        </button>

    </div>
  )
}

export default Pagination

function isPrevDisabled() {
    throw new Error('Function not implemented.')
}
