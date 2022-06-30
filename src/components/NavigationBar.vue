<template>
  <!-- Dropdown Structure -->
  <ul id="dropdown" class="dropdown-content">
    <li><a href="#!" style="color: #00acc1">Rural Tourism</a></li>
    <li><a href="#!" style="color: #00acc1">Business Events</a></li>
  </ul>
  <!-- sidenav structure -->
  <ul class="sidenav" id="mobile">
    <li><a href="#!" style="color: white">Signature Attraction</a></li>
    <li><a href="#!" style="color: white">Things To Do</a></li>
    <li class="no-padding">
      <ul class="collapsible collapsible-accordion">
        <li>
          <a class="collapsible-header"
            ><span style="margin-left: 16px; color: white">Niche Market</span
            ><i class="material-icons right" style="color: white">arrow_drop_down</i></a
          >
          <div class="collapsible-body">
            <ul>
              <li><a href="#!" style="color: #00acc1">Rural Tourism</a></li>
              <li><a href="#!" style="color: #00acc1">Business Events</a></li>
            </ul>
          </div>
        </li>
      </ul>
    </li>
  </ul>
  <nav>
    <div class="nav-wrapper">
      <router-link
        to="/"
        style="margin-right: 1%; margin-top: -2px"
        class="brand-logo right"
        >Sabah Tourism</router-link
      >
      <a href="#" data-target="mobile" class="sidenav-trigger left"
        ><i class="material-icons">menu</i></a
      >
      <ul class="left hide-on-med-and-down">
        <li><a href="#!">Signature Attraction</a></li>
        <li><a href="#!">Things To Do</a></li>
        <!-- Dropdown Trigger -->
        <li>
          <a class="dropdown-trigger" href="#!" data-target="dropdown"
            >Niche Market<i class="material-icons right">arrow_drop_down</i></a
          >
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style>
.nav-wrapper {
  background: linear-gradient(
    139deg,
    rgba(0, 96, 100, 1) 0%,
    rgba(0, 172, 193, 1) 87%
  );
}
.sidenav{
  background: linear-gradient(
    139deg,
    rgba(0, 96, 100, 1) 0%,
    rgba(0, 172, 193, 1) 87%
  );
}
</style>