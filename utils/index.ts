import { serialize } from "next-mdx-remote/serialize";
import { IArticle } from "../types";

export const formateDate = (dateString: string): string => {

    const date = new Date(dateString).toLocaleDateString('en-US',{
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

    return date;

}


export const MakeCategory = (slug: string) => {
    if(typeof slug === 'string') {
        return slug.split('-').join(' ');
    }

    return '';
};

export const capatilizaFirstLeter = (str: string): string => {
    return str.charAt(0).toUpperCase() + str.slice(1)
}



//  debounce function for search
export const debounce =  (fn: (query: string) => void, timeout = 500) => {

    let timer: NodeJS.Timeout; 


    const debounced = (...args: any) =>{
        clearTimeout(timer);

        timer = setTimeout(() =>{
            fn.apply(this, args)
        }, timeout)
    }

    return debounced

}


// for markdown
export const serializeMarkDown = async (item: IArticle) =>{
    const body = await serialize(item.attributes.body as string)
    return {
        ...item,
        attributes:{
            ...item.attributes,
            body,
        }
    }
}
