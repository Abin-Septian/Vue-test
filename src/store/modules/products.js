const state = {
    formShow: false,
    loading: false,
    isUpdate:false,
    products: [
        {
            id: 89,
            name: "fender Vintera 70s telecaster",
            stock: 20,
            sku: "AA01"
        },
        {
            id: 90,
            name: "american Professional II stratocaster",
            stock: 0,
            sku: "AA02"
        },
        {
            id: 12,
            name: "american professional II jazzmaster® Left-Hand",
            stock: 0,
            sku: "AA03"
        }
    ]
};

const getters = {
  allProduct: (state) => state.products
};

const actions = {
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
