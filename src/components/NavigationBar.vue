<template>
  <!-- Dropdown Structure -->
  <ul id="dropdown" class="dropdown-content">
    <li><a href="#!" style="color: #039be5">one</a></li>
    <li><a href="#!" style="color: #039be5">two</a></li>
    <li class="divider"></li>
    <li><a href="#!" style="color: #039be5">three</a></li>
  </ul>
  <!-- sidenav structure -->
  <ul class="sidenav" id="mobile-demo">
    <li><a href="sass.html">Sass</a></li>
    <li><a href="badges.html">Components</a></li>
    <li><a href="collapsible.html">Javascript</a></li>
    <li><a href="mobile.html">Mobile</a></li>
    <li>
      <select>
        <option value="" disabled selected>Choose your option</option>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
      </select>
    </li>
  </ul>
  <nav>
    <div
      class="nav-wrapper"
      style="
        background: linear-gradient(
          139deg,
          rgba(1, 87, 155, 1) 0%,
          rgba(3, 155, 229, 1) 87%
        );
      "
    >
      <router-link
        to="/"
        style="margin-left: 1%; margin-top: -4px"
        class="brand-logo left"
        >Logo</router-link
      >
      <a href="#" data-target="mobile-demo" class="sidenav-trigger right"
        ><i class="material-icons">menu</i></a
      >
      <ul class="right hide-on-med-and-down">
        <li><a href="sass.html">Sass</a></li>
        <li><a href="badges.html">Components</a></li>
        <!-- Dropdown Trigger -->
        <li>
          <a class="dropdown-trigger" href="#!" data-target="dropdown"
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