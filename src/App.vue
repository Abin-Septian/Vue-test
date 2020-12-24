<template>
  <div id="app">
    {{ loading }}
    <form-product v-if="formShow" class="uk-container uk-container-small"></form-product>
    <br>
    <button v-if="!formShow" @click="addData" class="uk-margin-large-left uk-button-small uk-button-primary uk-text-capitalize">add data</button>
    <table-data :data="allProduct" class="uk-container uk-container-small"/>
  </div>
</template>

<script>
// import products from "./data/products.json";
import FormProduct from "./components/Form.vue";
import TableData from "./components/TableData.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "App",

  components: {
    FormProduct,
    TableData,
  },

  computed: {
      ...mapGetters(['allProduct']),
      formShow () {
          return this.$store.state.Products.formShow
      },
  },

  data() {
    return {
      products: [ ],
      loading: false,
    };
  },

  mounted() {
    // this.getData();
  },

  methods: {
        ...mapActions(['formControl']),
        addData() {
            this.formControl()
        }
    /* getData() {
      // TO DO
      // change this to promise API, so the loading state will be shows on UI
      this.loading = true;
      this.products = [...products];
      this.loading = false;
    },
    addData() {
      // TO DO
      // create and call a product data form component to perform the task
    },

    editData(product) {
      // TO DO
      // reuse and call that newly created product data form component to perform the task
    },

    handleCancellationTask() {
      // TO DO
      // cancel an editing or creating process has to be done here
    },

    handleSave(data) {
      // TO DO
      // push newly created data or update the list
    },

    deleteData(data) {
      // TO DO
      // destroy the data from the list
    }, */
  },
};
</script>
