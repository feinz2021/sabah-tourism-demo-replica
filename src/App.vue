<template>
  <NavBar />
  <router-view />
  <FooterPage />
</template>

<script>
import NavBar from "@/components/NavigationBar.vue";
import FooterPage from "@/components/FooterPage.vue";
export default {
  components: { NavBar, FooterPage },
  data() {
    return {};
  },
  mounted() {
    window.M.AutoInit();
  },
};
</script>

<style>
</style>
