<template>
  <div id="app">
    <home/>
  </div>
</template>

<script>
import Home from "@/view/home"

export default {
  name: 'App',
  components: {Home}
}
</script>

<style>
body {
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
}

#app {
  padding: 0px;
  margin: 0px;
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  border: hidden;
}

::-webkit-scrollbar {
  display: none;
}
</style>
