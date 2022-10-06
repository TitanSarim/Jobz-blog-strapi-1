import axios from "axios";

const api = axios.create({
    baseURL: process.env.API_BASE_URL,

    headers:{
        Authorization: `Bearer ${process.env.BACKEBND_API_KEY}`
    }
})


// get categories and subcategories from api
export const fetchCategories = async (subCategory: string) => api.get(`/api/categories?${subCategory}`)


////http://localhost:1337/api/sub-categories?filters[category][slug][$eq]=armed-forces
// export const fetchSubCategories = async (queryString: string) => api.get(`/api/sub-categories?${queryString}`)


// get articles from api
export const fetchArticles = async (queryString: string) => api.get(`/api/articles?${queryString}`)

export const fetchArticlesBySlug = async (queryString: string) => api.get(`/api/articles?${queryString}`)