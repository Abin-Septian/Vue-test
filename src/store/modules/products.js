
import axios from "axios";

const state = {
    formShow: false,
    formConfirm: false,
    loading: false,
    isUpdate:false,
    products: [],
    formProduct: {
        id: '',
        name: '',
        sku: '',
        stock: '',
    }
};

const getters = {
  allProduct: (state) => state.products
};

const actions = {
    async getProducts({ commit }) {
        await axios.get('/products.json', 
        {
            baseURL: window.location.origin
        })
        .then(response => {
            commit('setProducts', response.data)
        })
    },
    formControl: ({ commit }, context) => {
        commit('formControl', context);
    },
    formConfirmation: ({ commit }, context) => {
        commit('formConfirmation', context);
    },
    isUpdate: ({ commit }, context) => {
        commit('isUpdate', context);
    },
    saveData: ({ commit }, payload) => {
        commit('saveData', payload);
    },
    editData: ({ commit }, idProduct) => {
        commit('editData', idProduct);
    },
    deleteData: ({ commit }, idProduct) => {
        commit('deleteData', idProduct);
    }
};

const mutations = {
    setProducts (state, post) {
        state.loading = true;

        setTimeout(() => {
            state.products = post;
            state.loading = false;
        }, 2000);
    },
    formControl (state, context) {
        state.formShow = context
    },
    formConfirmation (state, context) {
        state.formConfirm = context
    },
    clearForm(){
        state.formProduct.id = '';
        state.formProduct.name = '';
        state.formProduct.sku = '';
        state.formProduct.stock = '';
    },
    isUpdate (state, context) {
        state.isUpdate = context
    },
    saveData (state, payload) {
        if (payload.isUpdate == true){
            state.products = [
                ...state.products.filter(element => element.id !== payload.formProduct.id),
                payload.formProduct
             ]
        } else {
            state.products.push(payload.formProduct);
        }
    },
    editData (state, idProduct) {
        const item = state.products.find(item => item.id === idProduct);

        state.formProduct.id = item.id;
        state.formProduct.name = item.name;
        state.formProduct.sku = item.sku;
        state.formProduct.stock = item.stock;
    },
    deleteData (state, idProduct) {
        const i = state.products.map(item => item.id).indexOf(idProduct);
        
        state.products.splice(i, 1);
    },
    bindId (state, value) {
        state.products.formProduct.id = value
    },
    bindName (state, value) {
        state.products.formProduct.name = value
    },
    bindSKU (state, value) {
        state.products.formProduct.sku = value
    },
    bindStock (state, value) {
        state.products.formProduct.stock = value
    }
};

export default {
  state,
  getters,
  actions,
  mutations
};
