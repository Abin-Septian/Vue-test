<template lang="pug">
.uk-margin-top.uk-card.uk-card-default.uk-card-body
    table.uk-table.uk-table-responsive.uk-table-divider.uk-table-striped
        thead
            tr
                th #
                th Name
                th SKU
                th Action (Delete / Edit)
        tbody
            tr(v-for="(item, index) in data", v-bind:key="index")
                td {{ item.id }}
                td.uk-text-capitalize {{ item.name }}
                td {{ item.sku }}
                td
                    button.uk-button-small.uk-button-primary.uk-margin-small-right(
                    type="button",
                    @click=""
                    ) Edit
                    button.uk-button-small.uk-button-danger.uk-margin-small-right(
                    type="button",
                    @click=""
            ) Delete
</template>

<script>
    export default {
        name: "",
        props: {
            data: null,
        },
    };
</script>
