<template>
  <div class="home"></div>
</template>

<script>
import { sendGetRequest } from '@/services/api.service'

export default {
  name: 'HomeView',
  data: vm => ({
    msg: vm.$t('home.title'),
  }),
  created() {
    sendGetRequest('https://dummyjson.com/products')
  },
}
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  flex-flow: column wrap;
  align-content: center;
  justify-content: center;
  height: 100%;

  &__title {
    margin-top: 24px;
  }
}
</style>
