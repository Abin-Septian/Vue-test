<template lang="pug">
.uk-margin-top.uk-card.uk-card-default.uk-card-body
    table.uk-table.uk-table-divider.uk-table-striped
        thead
            tr
                th #
                th Name
                th SKU
                th Action
        tbody
            tr(v-for="(item, index) in allProduct", v-bind:key="index")
                td {{ item.id }}
                td.uk-text-capitalize {{ item.name }}
                td {{ item.sku }}
                td
                    button.uk-button-small.uk-button-primary.uk-margin-small-right(
                    type="button",
                    @click="edit(item.id)"
                    ) Edit
                    button.uk-button-small.uk-button-danger.uk-margin-small-right(
                    type="button",
                    @click="deleteData(item.id)"
                    ) Delete
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
    name: "",
    computed: {
        ...mapGetters(['allProduct']),
    },
    methods: {
        ...mapActions(['formControl', 'formConfirmation', 'isUpdate', 'editData']),
        edit(idProduct) {
            this.isUpdate(true)
            this.formControl(true)
            this.formConfirmation(false)
            this.editData(idProduct)
        },
        deleteData(idProduct){
            this.formControl(false)
            this.editData(idProduct)
            this.formConfirmation(true)
        },
    }
};
</script>
