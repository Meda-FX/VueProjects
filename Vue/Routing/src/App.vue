<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <a class="navbar-brand" href="#">Voodoo Child</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <router-link class="nav-link" :to="'/'"> Home </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="'/contact'"> Contact </router-link>
          </li>
        </ul>
        <span class="navbar-text">
          Navbar text with an inline element
        </span>
      </div>
    </nav>

    <div class="mt-3">
      <!-- Make the data dynamic instead of using 'PostExample' -->
      <!-- <PostExample /> -->
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import PostExample from "./components/Posts";
import Contact from "./components/Contact";

export default {
  name: "App",
  components: {
    PostExample,
    Contact
  }
};
</script>

<style>
@import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
</style>
