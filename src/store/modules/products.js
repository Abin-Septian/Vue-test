
import axios from "axios";

const state = {
    formShow: false,
    loading: false,
    isUpdate:false,
    products: []
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
    isUpdate: ({ commit }, context) => {
        commit('isUpdate', context);
    },
    saveData: ({ commit }, payload) => {
        commit('saveData', payload);
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
    isUpdate (state, context) {
        state.isUpdate = context
    },
    saveData (state, payload) {
        if (payload.isUpdate == true){
            // var idx = state.products.findIndex(product => product.id === payload.formProduct.id)

            console.log(payload.formProduct.id)
        } else {
            state.products.push(payload.formProduct);
        }
    }
};

export default {
  state,
  getters,
  actions,
  mutations
};
