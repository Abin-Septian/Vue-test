<template>
  <div id="app">
    <loading 
        :active.sync="loading"
        :is-full-page="isFullPage"
        loader="dots"
        background-color="#000"
        color="rgb(0, 123, 255)"
        :height="128"
        :width="128"
    ></loading>
    <form-product v-if="formShow" class="uk-container uk-container-small"></form-product>
    <form-confirmation v-if="formConfirm" class="uk-container uk-container-small"></form-confirmation>
    <br>
    <div class="uk-container uk-container-small">
        <button v-if="!formShow && !formConfirm" @click="addData()" class="uk-button uk-button-primary uk-text-capitalize">add data</button>
    </div>
    <table-data class="uk-container uk-container-small"/>
  </div>
</template>

<script>
import Loading from 'vue-loading-overlay';
import FormProduct from "./components/Form.vue";
import FormConfirmation from "./components/Confirmation.vue";
import TableData from "./components/TableData.vue";
import { mapActions } from "vuex";

export default {
  name: "App",

  components: {
    FormProduct,
    FormConfirmation,
    TableData,
    Loading,
  },

  computed: {
    formShow () {
        return this.$store.state.Products.formShow
    },
    formConfirm () {
        return this.$store.state.Products.formConfirm
    },
    loading () {
        return this.$store.state.Products.loading
    }
},

  data() {
    return {
      products: [ ],
      isFullPage : true,
    };
  },

  mounted() {
    this.getProducts();
  },

  methods: {
    ...mapActions(['formControl', 'formConfirmation', 'isUpdate', 'getProducts']),
    addData() {
        this.isUpdate(false);
        this.formControl(true);
        this.formConfirmation(false);
        this.$store.commit('clearForm');
    }
  },
};
</script>
