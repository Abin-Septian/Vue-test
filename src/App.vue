<template>
  <div id="app">
    {{ loading }}
    <form-product v-if="formShow" class="uk-container uk-container-small"></form-product>
    <br>
    <div class="uk-container uk-container-small">
        <button v-if="!formShow" @click="addData" class="uk-button uk-button-primary uk-text-capitalize">add data</button>
    </div>
    <table-data class="uk-container uk-container-small"/>
  </div>
</template>

<script>
// import products from "./data/products.json";
import FormProduct from "./components/Form.vue";
import TableData from "./components/TableData.vue";
import { mapActions } from "vuex";

export default {
  name: "App",

  components: {
    FormProduct,
    TableData,
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
    // this.getData();
  },

  methods: {
    ...mapActions(['formControl', 'isUpdate']),
    addData() {
        this.isUpdate(false)
        this.formControl(true)
    }
  },
};
</script>
