import { MDXRemoteSerializeResult } from "next-mdx-remote";

export interface ICollectionResponse<T>{
    
    data: T;

    meta: IResourceMeta

}

// for category
export interface ICategory{
    id: number;
    attributes: ICategoryAttribute;
}

// for category -- data for category
export interface ICategoryAttribute{
    Title: string;
    Slug: string;
    sub_categories: ISubCategoryCollection;
}

//  access subcategory array
export interface ISubCategoryCollection{
    data: IDatum[]
}

export interface IDatum{
    id:         number;
    attributes: IDatSubcategoryAttribute;
}

export interface IDatSubcategoryAttribute{
    Title:       string;
    Slug:        string;
}


export interface IPagination{
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
}


export interface IResourceMeta{

    pagination: IPagination;

}

// articles
export interface IArticle{
    id: number;
    attributes: IArticleAttribute;
}


export interface IAuthor{
    data:{
        attributes: {
            username: string;
            avatar:{
                data:{
                    attributes:{
                        formats:{
                            thumbnail:{
                                url: string;
                            }
                        }
                    }
                }
            }
        }
    }
}

export interface IImageData{
    data: {
        attributes:{
            url: string;
            formats:{
                small:{
                    url: string;
                }
            }
        }
    }
}


export interface IArticleAttribute{
    Title: string;
    body:  string |MDXRemoteSerializeResult;
    shortDescription: string;
    Image: IImageData;
    Slug: string;
    updatedAt: string;
    author: IAuthor;
    
}


export type TDirection = 1  | -1;


// search interface
export interface IQueryOptions {
    filters: any;
    sort: any;
    populate: any;
    pagination: {
        page: number
        pageSize: number
    }
}