<template>

</template>

<script>
export default {
  name: "Home",
  mounted() {
    this.getLicenseKey()
  },
  methods: {
    getLicenseKey() {
      // https://www.charlesproxy.com/latest-release/download.do
      this.$http.post("https://www.zzzmode.com/api/v2/ck", {name: "啊啊"}, {}).then(response => {
        console.log(response)
      })
    }
  }
}
</script>

<style scoped>

</style>