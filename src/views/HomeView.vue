<template>
  <div class="container">
    <!-- carousel -->
    <div
      class="carousel"
      id="carousel"
      style="margin-top: 5%"
      data-aos="fade-down"
      data-aos-duration="800"
      data-aos-easing="ease-in-sine"
    >
      <a class="carousel-item" v-for="image in images" :key="image"
        ><img class="carouselCrop" :src="image"
      /></a>
    </div>
    <div class="progress" style="margin-top: 5%">
      <div class="determinate" :style="sliderIndicator"></div>
    </div>

    <div class="row" style="margin-top: 5%">
      <!-- image 1 -->
      <div class="col s12 m12 l6">
        <div
          class="card"
          data-aos="fade-right"
          data-aos-duration="300"
          data-aos-easing="ease-in-sine"
        >
          <div class="card-image">
            <img :src="images[0]" />
            <span class="card-title"
              >Photo by
              <a
                href="https://unsplash.com/@andywang02021?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
                >Andy Wang</a
              >
              on
              <a
                href="https://unsplash.com/s/photos/sabah?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
                >Unsplash</a
              ></span
            >
          </div>
          <div class="card-content">
            <p>I</p>
          </div>
        </div>
      </div>
      <!-- image 2 -->
      <div class="col s12 m12 l6">
        <div
          class="card"
          data-aos="fade-right"
          data-aos-duration="600"
          data-aos-easing="ease-in-sine"
        >
          <div class="card-image">
            <img :src="images[1]" />
            <span class="card-title"
              >Photo by
              <a
                href="https://unsplash.com/@fahrulazmi?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
                >Fahrul Azmi</a
              >
              on
              <a
                href="https://unsplash.com/s/photos/sabah?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
                >Unsplash</a
              ></span
            >
          </div>
          <div class="card-content">
            <p>I</p>
          </div>
        </div>
      </div>
      <!-- image 3 -->
      <div class="col s12 m12 l6">
        <div
          class="card"
          data-aos="fade-right"
          data-aos-duration="900"
          data-aos-easing="ease-in-sine"
        >
          <div class="card-image">
            <img :src="images[2]" />
            <span class="card-title"
              >Photo by
              <a
                href="https://unsplash.com/es/@goldensson?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
                >Haydn Golden</a
              >
              on
              <a
                href="https://unsplash.com/s/photos/sabah?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
                >Unsplash</a
              ></span
            >
          </div>
          <div class="card-content">
            <p>I</p>
          </div>
        </div>
      </div>
      <!-- image 4 -->
      <div class="col s12 m12 l6">
        <div
          class="card"
          data-aos="fade-right"
          data-aos-duration="1200"
          data-aos-easing="ease-in-sine"
        >
          <div class="card-image">
            <img :src="images[3]" />
            <span class="card-title"
              >Photo by
              <a
                href="https://unsplash.com/@jhb_photo?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
                >Joël Brunner</a
              >
              on
              <a
                href="https://unsplash.com/s/photos/sabah?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
                >Unsplash</a
              ></span
            >
          </div>
          <div class="card-content">
            <p>I</p>
          </div>
        </div>
      </div>
      <!-- image 5 -->
      <div class="col s12 m12 l6">
        <div
          class="card"
          data-aos="fade-right"
          data-aos-duration="1500"
          data-aos-easing="ease-in-sine"
        >
          <div class="card-image">
            <img :src="images[4]" />
            <span class="card-title"
              >Photo by
              <a
                href="https://unsplash.com/@linglivestolaugh?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
                >Ling Tang</a
              >
              on
              <a
                href="https://unsplash.com/s/photos/sabah?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
                >Unsplash</a
              ></span
            >
          </div>
          <div class="card-content">
            <p>I</p>
          </div>
        </div>
      </div>
      <!-- image 6 -->
      <div class="col s12 m12 l6">
        <div
          class="card"
          data-aos="fade-right"
          data-aos-duration="1800"
          data-aos-easing="ease-in-sine"
        >
          <div class="card-image">
            <img :src="images[5]" />
            <span class="card-title"
              >Photo by
              <a
                href="https://unsplash.com/@chaotic_nic?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
                >Nicole</a
              >
              on
              <a
                href="https://unsplash.com/s/photos/sabah?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
                >Unsplash</a
              ></span
            >
          </div>
          <div class="card-content">
            <p>I</p>
          </div>
        </div>
      </div>
      <!-- image 7 -->
      <div class="col s12 m12 l6">
        <div
          class="card"
          data-aos="fade-right"
          data-aos-duration="1800"
          data-aos-easing="ease-in-sine"
        >
          <div class="card-image">
            <img :src="images[6]" />
            <span class="card-title"
              >Photo by
              <a
                href="https://unsplash.com/@patwhelen?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
                >Pat Whelen</a
              >
              on
              <a
                href="https://unsplash.com/s/photos/sabah?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
                >Unsplash</a
              ></span
            >
          </div>
          <div class="card-content">
            <p>I</p>
          </div>
        </div>
      </div>
      <!-- image 8 -->
      <div class="col s12 m12 l6">
        <div
          class="card"
          data-aos="fade-right"
          data-aos-duration="1800"
          data-aos-easing="ease-in-sine"
        >
          <div class="card-image">
            <img :src="images[7]" />
            <span class="card-title"
              >Photo by
              <a
                href="https://unsplash.com/@patwhelen?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
                >Pat Whelen</a
              >
              on
              <a
                href="https://unsplash.com/s/photos/sabah?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
                >Unsplash</a
              ></span
            >
          </div>
          <div class="card-content">
            <p>I</p>
          </div>
        </div>
      </div>
      <!-- image 9 -->
      <div class="col s12 m12 l6">
        <div
          class="card"
          data-aos="fade-right"
          data-aos-duration="1800"
          data-aos-easing="ease-in-sine"
        >
          <div class="card-image">
            <img :src="images[8]" />
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
            <p>I</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <footer class="page-footer">
    <div class="container">
      <div class="row">
        <div class="col l6 s12">
          <h5 class="white-text">Footer Content</h5>
          <p class="grey-text text-lighten-4">
            You can use rows and columns here to organize your footer content.
          </p>
        </div>
        <div class="col l4 offset-l2 s12">
          <h5 class="white-text">Links</h5>
          <ul>
            <li><a class="grey-text text-lighten-3" href="#!">Link 1</a></li>
            <li><a class="grey-text text-lighten-3" href="#!">Link 2</a></li>
            <li><a class="grey-text text-lighten-3" href="#!">Link 3</a></li>
            <li><a class="grey-text text-lighten-3" href="#!">Link 4</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="footer-copyright">
      <div class="container">
        © 2014 Copyright Text
        <a class="grey-text text-lighten-4 right" href="#!">More Links</a>
      </div>
    </div>
  </footer>
</template>

<script>
import AOS from "../../node_modules/aos";
// import M from "@materializecss/materialize";
export default {
  components: {},
  data() {
    return {
      images: [
        require("@/assets/andy-wang-wvd6teqldgA-unsplash.jpg"),
        require("@/assets/fahrul-azmi-JK8f7i1L4bc-unsplash.jpg"),
        require("@/assets/haydn-golden-GRRdN9pM2d4-unsplash.jpg"),
        require("@/assets/joel-brunner-mNWDTud3AaI-unsplash.jpg"),
        require("@/assets/ling-tang-XjUhALD9HO4-unsplash.jpg"),
        require("@/assets/nicole-U_ifpWgkVXs-unsplash.jpg"),
        require("@/assets/pat-whelen-dxtDJqWJ3Xo-unsplash.jpg"),
        require("@/assets/pat-whelen-ZLxLcx73IyQ-unsplash.jpg"),
        require("@/assets/ryan-o-niel-ywQLwGDrrZY-unsplash.jpg"),
      ],
      interval: "",
      currentImage: 1,
      totalImages: "",
    };
  },
  computed: {
    sliderIndicator() {
      return "width: " + (this.currentImage / this.totalImages) * 100 + "%";
    },
  },
  mounted() {
    AOS.init();
    window.M.AutoInit();
    console.log(this.sliderIndicator);

    let elem = document.getElementById("carousel");
    let carousel = window.M.Carousel.getInstance(elem);
    window.M.Carousel.init(elem, {
      // specify options here
    });

    this.totalImages = this.images.length;

    this.interval = setInterval(() => {
      if (this.currentImage === this.totalImages) this.currentImage = 1;
      else this.currentImage++;
      console.log(this.currentImage);
      carousel.next(1);
    }, 3000);
  },
  unmounted() {
    clearInterval(this.interval);
    console.log("interval cleared");
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
.carousel .carousel-item {
  width: 500px !important;
  height: 400px !important;
}
.carouselCrop {
  object-fit: cover;
  width: 400px;
  height: 400px;
}
</style>
