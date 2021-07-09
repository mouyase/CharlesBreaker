<template>
  <div class="license-getter"></div>
</template>

<script>
export default {
  name: "LicenseGetter",
  mounted() {
  },
  methods: {
    getLicenseKey() {
      // https://www.charlesproxy.com/latest-release/download.do
      this.$http.post("https://charles-api.yojigen.tech/c1", {name: "AA"}, {}).then(response => {
        console.log(response)
      })
      this.$http.post("https://charles-api.yojigen.tech/c2", {name: "BB"}, {}).then(response => {
        console.log(response)
      })
    }
  }
}
</script>

<style scoped>

</style>