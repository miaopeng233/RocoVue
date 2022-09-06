<template>
  <div class="home">
    <button @click="mockTest()">试试</button>
  </div>
</template>

<script>
export default {
  name: 'Home',
  methods: {
    mockTest() {
      this.$axios
        .get('https://v1.alapi.cn/api/music/search?keyword=我爱你')
        .then((res) => {
          console.log(res)
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }
}
</script>
