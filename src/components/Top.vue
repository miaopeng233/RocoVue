<template>
  <div class="Top">
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect"
      background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
      <el-menu-item v-for="site in ruter_list" :key="site.name" :index="site.url">
        {{ site.name }}
      </el-menu-item>
      <el-menu-item index="/login">登录</el-menu-item>
    </el-menu>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "Top",
  data() {
    return {
      ruter_list: [
        { name: "主页", url: "/" },
        { name: "2", url: "/MockTest" },
        { name: "3", url: "/Home" },
      ],
      activeIndex: '/'
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
      this.$router.push(key)
    },
  },
};
</script>

<style scoped>
.demo-block.demo-menu .el-menu-demo {
  padding-left: 55px;
}
</style>
