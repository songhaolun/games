<template>
  <el-submenu v-if="menu.children && menu.children.length >= 1" :index="'' + menu.id">
    <template slot="title">
      <i :class="menu.icon" ></i>
      <span slot="title">{{menu.name}}</span>
    </template>
    <MenuTree v-for="item in menu.children" :key="item.id" :menu="item"></MenuTree>
  </el-submenu>
  <el-menu-item v-else :index="'' + menu.id" @click="handleRoute(menu)">
    <i :class="menu.icon"></i>
    <span slot="title">{{menu.name}}</span>
  </el-menu-item>
</template>

<script>
import { getIFrameUrl, getIFramePath } from '@/utils/iframe'
export default {
  name: 'MenuTree',
  props: {
    menu: {
      type: Object,
      required: true
    }
  },
  methods: {
    handleRoute (menu) {
      let path = getIFramePath(menu.url)
      if (!path) {
        path = menu.url
      }
      this.$router.push('/' + path)
    }
  }
}
</script>

<style scoped lang="scss">
  // .el-submenu, .el-menu-item {
  //   background-color: #3c4b5a44;
  // }
</style>
