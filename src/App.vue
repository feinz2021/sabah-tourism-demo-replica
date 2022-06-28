<template>
  <NavBar />
  <router-link to="/">Home</router-link> |
  <router-link to="/about">About</router-link>
  <router-view />
</template>

<script>
import NavBar from "@/components/NavigationBar.vue";
export default {
  components: { NavBar },
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
