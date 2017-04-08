<template>
  <!-- Don't drop "q-app" class -->
  <div id="q-app">
    <router-view></router-view>
  </div>
</template>

<script>
import store from './vuex/store'
export default {
  store
}
</script>

<style></style>
