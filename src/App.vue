<template>
  <div>
    <!-- navigation -->
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <RouterLink class="navbar-brand" to="/">VueLog</RouterLink>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <RouterLink class="nav-link active" aria-current="page" to="/"
                >Home</RouterLink
              >
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" to="/list">List</RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <!-- // navigation -->

    <div class="mt-5">
      <RouterView :ListData="ListData"></RouterView>
    </div>
    <!-- <List :ListData="ListData" /> -->
  </div>
</template>

<script>
// import List from "./components/List";
import ListData from "./assets/listData.js";

export default {
  name: "App",
  data() {
    return {
      ListData: ListData,
    };
  },
  components: {
    //List,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
