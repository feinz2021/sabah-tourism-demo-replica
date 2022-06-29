<template>
  <div
    style="
      background-image: url('../assets/fahrul-azmi-JK8f7i1L4bc-unsplash.jpg');
    "
  ></div>
  <div class="container">
    <div class="row">
      <!-- image 1 -->

      <div class="col s12 m6 l4">
        <div class="card" data-aos="fade-right">
          <div class="card-image">
            <img src="../assets/ryan-o-niel-ywQLwGDrrZY-unsplash.jpg" />
            <span class="card-title"
              >Photo by
              <a
                href="https://unsplash.com/@ryanoniel?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
                >Ryan 'O' Niel</a
              >
              on
              <a
                href="https://unsplash.com/s/photos/sabah?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
                >Unsplash</a
              ></span
            >
          </div>
          <div class="card-content">
            <p>
              I am a very simple card. I am good at containing small bits of
              information. I am convenient because I require little markup to
              use effectively.
            </p>
          </div>
          <div class="card-action">
            <a href="#">This is a link</a>
          </div>
        </div>
      </div>
      <!-- image 2 -->
      <div class="col s12 m6 l4">
        <div class="card">
          <div class="card-image">
            <img src="../assets/ryan-o-niel-ywQLwGDrrZY-unsplash.jpg" />
            <span class="card-title"
              >Photo by
              <a
                href="https://unsplash.com/@ryanoniel?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
                >Ryan 'O' Niel</a
              >
              on
              <a
                href="https://unsplash.com/s/photos/sabah?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
                >Unsplash</a
              ></span
            >
          </div>
          <div class="card-content">
            <p>
              I am a very simple card. I am good at containing small bits of
              information. I am convenient because I require little markup to
              use effectively.
            </p>
          </div>
          <div class="card-action">
            <a href="#">This is a link</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AOS from "../../node_modules/aos";
export default {
  components: {},
  mounted() {
    AOS.init();
  },
};
</script>
<style>
body {
  display: flex;
  min-height: 100vh;
  flex-direction: column;

  background-image: url("../assets/fahrul-azmi-JK8f7i1L4bc-unsplash.jpg");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
}
</style>
