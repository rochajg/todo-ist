<template>
  <div>
    <mainHeader/>
    <main class="">
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import mainHeader from './template/mainHeader.vue'

export default {
  name: 'app',
  components: { mainHeader}
}
</script>

<style>
</style>
