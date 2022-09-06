<template>
  <div>
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'MockTest', // 局部注册的组件名，自己测试的话可以直接在已有的组件中执行方法
  data() {
    return {
      msg: '南街北巷'
    }
  },
  mounted: function () {
    // 组件挂载后自动执行方法
    this.getMock()
  },
  methods: {
    getMock() {
      // 使用axios请求
      this.$axios.get('/test').then(function (res) {
        console.log(res.data)
      })
    }
  }
}
</script>
