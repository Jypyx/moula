import { sendGetRequest } from '@/services/api.service'

export const getProductsApi = (params = '') => {
  return sendGetRequest(`https://dummyjson.com/products?${params}`)
}

export const getSingleProductApi = (id, params = '') => {
  return sendGetRequest(`https://dummyjson.com/products/${id}?${params}`)
}

export const getCategoriesApi = (params = '') => {
  return sendGetRequest(`https://dummyjson.com/products/categories?${params}`)
}

export const getSingleCategoryApi = (category, params = '') => {
  return sendGetRequest(`https://dummyjson.com/products/category/${category}?${params}`)
}

export const getSearchProductApi = (query, params = '') => {
  return sendGetRequest(`https://dummyjson.com/products/search?q=${query}&${params}`)
}
