<template lang="pug">
.uk-margin-top.uk-card.uk-card-default.uk-card-body
    table.uk-table.uk-table-responsive.uk-table-divider.uk-table-striped
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
                    @click="edit()"
                    ) Edit
                    button.uk-button-small.uk-button-danger.uk-margin-small-right(
                    type="button",
                    @click="deleteData()"
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
        ...mapActions(['formControl', 'isUpdate']),
        edit() {
            this.isUpdate(true)
            this.formControl(true)
        },
        deleteData(){
            this.formControl(false)
        },
    }
};
</script>
