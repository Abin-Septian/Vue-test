<template lang="pug">
.uk-margin-top.uk-card.uk-card-default.uk-card-body 
    form
        fieldset.uk-fieldset
            .uk-margin
                label ID
                input.uk-input(type="number" )
            .uk-margin
                label Name
                input.uk-input(type="text" )
            .uk-margin
                label Stock
                input.uk-input(type="number" )
            .uk-margin
                label SKU
                input.uk-input(type="text" )
    .uk-flex.uk-flex-right
        button.uk-button.uk-button-default.uk-margin-small-right(type="button") Cancel
        button.uk-button.uk-button-primary(type="button") Save

</template>

<script>
export default {
    name: '',

}
</script>