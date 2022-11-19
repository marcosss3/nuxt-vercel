<template>
  <Tutorial :text="text" />
</template>

<script>
export default {
  name: 'IndexPage',
  async asyncData({ $axios }) {
    const response = await $axios.$get('/api/test')
    return { text: response }
  },
}
</script>
