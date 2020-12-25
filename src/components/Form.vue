<template lang="pug">
.uk-margin-top.uk-card.uk-card-default.uk-card-body 
    form(@keyup.enter="save" @keyup.esc="cancel")
        fieldset.uk-fieldset
            .uk-margin
                label ID
                input.uk-input(type="number" v-model="formProduct.id")
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
                id: '',
                name: '',
                stock: '',
                sku: '',
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
            this.formControl(false)
            Object.assign(this.$data, this.$options.data());
        },
        save(payload) {
            this.formControl(false)
            this.saveData(payload)
            Object.assign(this.$data, this.$options.data());
        },
    }
}
</script>