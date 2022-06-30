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
@font-face {
  font-family: "Ubuntu";
  src: local("Ubuntu"),
   url(./fonts/Ubuntu/Ubuntu-Regular.ttf) format("truetype");
}
html, body {
  font-family: 'Ubuntu', sans-serif;
}
#app {
  font-family: 'Ubuntu', sans-serif;
}
</style>
