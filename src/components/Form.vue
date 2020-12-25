<template lang="pug">
.uk-margin-top.uk-card.uk-card-default.uk-card-body 
    form
        fieldset.uk-fieldset
            .uk-margin
                label ID
                input.uk-input(type="number" v-model="formProduct.id" :disabled="isUpdate")
            .uk-margin
                label Name
                input.uk-input(type="text" v-model="formProduct.name")
            .uk-margin
                label Stock
                input.uk-input(type="number" v-model="formProduct.stock")
            .uk-margin
                label SKU
                input.uk-input(type="text" v-model="formProduct.sku")
    .uk-flex.uk-flex-right
        button.uk-button.uk-button-default.uk-margin-small-right(type="button" @click="cancel()") Cancel
        button.uk-button.uk-button-primary(type="button" @click="save({ formProduct, isUpdate })") {{ isUpdate ? 'Update' : 'Save' }}

</template>

<script>
import { mapActions } from "vuex";

export default {
    name: '',
    data() {
        return {
            formProduct: {
                id: this.$store.state.Products.formProduct.id,
                name: this.$store.state.Products.formProduct.name,
                sku: this.$store.state.Products.formProduct.sku,
                stock: this.$store.state.Products.formProduct.stock,
            }
        }
    },
    computed: {
        isUpdate () {
            return this.$store.state.Products.isUpdate
        },
    },
    methods: {
        ...mapActions(['formControl', 'saveData']),
        cancel() {
            this.formControl(false);
            this.$store.commit('clearForm');
        },
        save(payload) {
            this.saveData(payload);
            this.formControl(false);
            this.$store.commit('clearForm');
        },
    }
}
</script>