<template>
  <div id="app">
    <loading 
        :active.sync="loading"
        is-full-page="true"
        loader="dots"
        background-color="#000"
        color="rgb(0, 123, 255)"
        height="128"
        width="128"
    ></loading>
    <form-product v-if="formShow" class="uk-container uk-container-small"></form-product>
    <br>
    <div class="uk-container uk-container-small">
        <button v-if="!formShow" @click="addData" class="uk-button uk-button-primary uk-text-capitalize">add data</button>
    </div>
    <table-data class="uk-container uk-container-small"/>
  </div>
</template>

<script>
import Loading from 'vue-loading-overlay';
import FormProduct from "./components/Form.vue";
import TableData from "./components/TableData.vue";
import { mapActions } from "vuex";

export default {
  name: "App",

  components: {
    FormProduct,
    TableData,
    Loading,
  },

  computed: {
        
        formShow () {
            return this.$store.state.Products.formShow
        },
        loading () {
          return this.$store.state.Products.loading
        }
    },

  data() {
    return {
      products: [ ],
    };
  },

  mounted() {
    this.getProducts();
  },

  methods: {
    ...mapActions(['formControl', 'isUpdate', 'getProducts']),
    addData() {
        this.isUpdate(false)
        this.formControl(true)
    }
  },
};
</script>
