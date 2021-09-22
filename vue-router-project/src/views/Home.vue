<template>
  <div id="home">
    <router-link :to="{path: `/item-detail`, query: {isSelect: false}}">ItemDetail.vueへ</router-link>
    <button @click="itemaude">k</button>
  </div>
</template>

<script>
export default {
  methods: {
    itemaude(){
      this.$router.push({query: {isSelect: false}});
    }
  }
}
</script>