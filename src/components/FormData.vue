<template>
  <form @keyup.enter="save" @keyup.esc="cancel">
    <!-- fields -->
  </form>
</template>

<script>
export default {
  props: {
    formData: {
      type: Object,
      default: () => {
        return {};
      },
    },
  },

  data() {
    return {
      data: {},
    };
  },

  methods: {
    save() {
      // TODO handle save
    },
    cancel() {
      // TODO handle cancellation
    },
  },
};
</script>
