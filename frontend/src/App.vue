<template>
  <div id="app">
    <NavBarComp />
    <router-view />
    <FooterComp />
  </div>
</template>

<script>
import NavBarComp from "@/components/NavBarComp.vue"; // Make sure to provide the correct path to your NavBarComp.vue file
import FooterComp from "@/components/FooterComp.vue"; // Make sure to provide the correct path to your FooterComp.vue file

export default {
  components: {
    NavBarComp,
    FooterComp
  }
}
</script>

<style>
/* Your global styles here */
</style>
