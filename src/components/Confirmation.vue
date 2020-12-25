<template lang="pug">
.uk-margin-top.uk-card.uk-card-default.uk-card-body 
    h3 Are you sure delete this product ?
    fieldset.uk-fieldset
            .uk-margin
                label ID
                input.uk-input(type="number" v-model="form.id" disabled)
            .uk-margin
                label Name
                input.uk-input(type="text" v-model="form.name" disabled)
            .uk-margin
                label Stock
                input.uk-input(type="number" v-model="form.stock" disabled)
            .uk-margin
                label SKU
                input.uk-input(type="text" v-model="form.sku" disabled)
    .uk-flex.uk-flex-right
        button.uk-button.uk-button-default.uk-margin-small-right(type="button" @click="cancel()") Cancel
        button.uk-button.uk-button-primary(type="button" @click="deleteAction(form.id)") Delete
</template>

<script>
import { mapActions } from "vuex";

export default {
    name: '',
    data() {
        return {
            form: {
                id: this.$store.state.Products.formProduct.id,
                name: this.$store.state.Products.formProduct.name,
                sku: this.$store.state.Products.formProduct.sku,
                stock: this.$store.state.Products.formProduct.stock,
            }
        }
    },
    methods: {
    ...mapActions(['formConfirmation', 'deleteData']),
        cancel() {
            this.formConfirmation(false);
            this.$store.commit('clearForm');
        },
        deleteAction(idProduct) {
            this.deleteData(idProduct);
            this.formConfirmation(false);
            this.$store.commit('clearForm');
        },
    }
}
</script>