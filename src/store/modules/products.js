const state = {
    formShow: false,
    loading: false,
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
    formControl (context) {
        context.commit('formControl')
    }
};

const mutations = {
    formControl (state) {
        state.formShow = !state.formShow
    }
};

export default {
  state,
  getters,
  actions,
  mutations
};
