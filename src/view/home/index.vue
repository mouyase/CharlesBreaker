<template>
  <LicenseGetter/>
</template>

<script>
import LicenseGetter from "@/components/licenseGetter"

export default {
  name: "Home",
  components: {
    LicenseGetter
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