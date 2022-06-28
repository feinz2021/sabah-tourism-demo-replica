<template>
  <!-- Dropdown Structure -->
  <ul id="dropdown1" class="dropdown-content">
    <li><a href="#!">one</a></li>
    <li><a href="#!">two</a></li>
    <li class="divider"></li>
    <li><a href="#!">three</a></li>
  </ul>
  <nav>
    <div class="nav-wrapper" style="background: linear-gradient(139deg, rgba(1,87,155,1) 0%, rgba(3,155,229,1) 87%);">
      <router-link to="/" style="margin-left: 1%; margin-top: -4px" class="brand-logo left">Logo</router-link>
      <ul class="right hide-on-med-and-down">
        <li><a href="sass.html">Sass</a></li>
        <li><a href="badges.html">Components</a></li>
        <!-- Dropdown Trigger -->
        <li>
          <a class="dropdown-trigger" href="#!" data-target="dropdown1"
            >Dropdown<i class="material-icons right">arrow_drop_down</i></a
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
</style>