<template>
  <h2 class="ui-title">{{ title }}</h2>
</template>

<script>
export default {
  name: 'UiTitle',
  props: {
    title: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.ui-title {
  font-weight: 800;
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}
</style>
