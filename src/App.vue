<template>
  <div id="app">
    {{ loading }}
    <div style="border: 1px solid red">
      the form will be placed here and will be shown only when creating or
      editing. dont forget to perform its fields validation.
    </div>
    <button @click="addData">ADD data</button>
    <table-data :data="products" />
  </div>
</template>

<script>
import products from "./data/products.json";
import TableData from "./components/TableData.vue";

export default {
  name: "App",

  components: {
    TableData,
  },

  data() {
    return {
      products: [
        {
          id: 89,
          name: "fender Vintera 70s telecaster",
          stock: 20,
          sku: "AA01",
        },
        {
          id: 90,
          name: "american Professional II stratocaster",
          stock: 0,
          sku: "AA02",
        },
        {
          id: 12,
          name: "american professional II jazzmaster® Left-Hand",
          stock: 0,
          sku: "AA03",
        },
      ],
      loading: false,
    };
  },

  mounted() {
    this.getData();
  },

  methods: {
    getData() {
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
    },
  },
};
</script>
