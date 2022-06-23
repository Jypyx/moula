import {
  getProductsApi,
  getSingleProductApi,
  getCategoriesApi,
  getSingleCategoryApi,
  getSearchProductApi,
} from '@/services/products.service'

const SET_PRODUCTS = 'SET_PRODUCTS'
const SET_CURRENT_PRODUCT = 'SET_CURRENT_PRODUCT'
const SET_CATEGORIES = 'SET_CATEGORIES'
const SET_CURRENT_CATEGORY = 'SET_CURRENT_CATEGORY'
const SET_SEARCH = 'SET_SEARCH'
const SET_LOADING = 'SET_LOADING'
const ADD_TO_CART = 'ADD_TO_CART'
const RESET_STATE = 'RESET_STATE'

const getDefaultState = () => {
  return {
    products: [],
    categories: [],
    currentProduct: null,
    currentCategory: null,
    cart: [],
    search: '',
    loading: false,
  }
}

const state = getDefaultState()

const mutations = {
  [SET_PRODUCTS]: (state, products) => {
    state.products = products
  },
  [SET_CURRENT_PRODUCT]: (state, product) => {
    state.currentProduct = product
  },
  [SET_CATEGORIES]: (state, categories) => {
    state.categories = categories
  },
  [SET_CURRENT_CATEGORY]: (state, category) => {
    state.currentCategory = category
  },
  [SET_SEARCH]: (state, search) => {
    state.search = search
  },
  [SET_LOADING]: (state, loading) => {
    state.loading = loading
  },
  [ADD_TO_CART]: (state, product) => {
    state.cart.push(product)
  },
  [RESET_STATE]: state => {
    Object.assign(state, getDefaultState())
  },
}

const actions = {
  async getProducts({ commit }) {
    const { products } = await getProductsApi()
    commit(SET_PRODUCTS, products)
  },
  async getCurrentProduct({ commit }, payload) {
    const data = await getSingleProductApi(payload)
    commit(SET_CURRENT_PRODUCT, data)
  },
  async getCategories({ commit }) {
    const data = await getCategoriesApi()
    commit(SET_CATEGORIES, data)
  },
  async getCurrentCategory({ commit }, payload) {
    const data = await getSingleCategoryApi(payload)
    commit(SET_CURRENT_CATEGORY, data)
  },
  async searchProduct({ commit }, payload) {
    const { products } = await getSearchProductApi(payload)
    commit(SET_PRODUCTS, products)
  },
  setSearch({ commit }, payload) {
    commit(SET_SEARCH, payload)
  },
  setLoading({ commit }, payload) {
    commit(SET_LOADING, payload)
  },
  addProductToCart({ commit }, payload) {
    commit(ADD_TO_CART, payload)
  },
  resetState({ commit }) {
    commit(RESET_STATE)
  },
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
}
