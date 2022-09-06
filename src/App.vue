<template>
  <div id="app">
    <top></top>
    <router-view></router-view>
  </div>
</template>

<script>
import top from '@/components/Top'
export default {
  name: 'App',
  components: {
    top
  }
}
</script>
