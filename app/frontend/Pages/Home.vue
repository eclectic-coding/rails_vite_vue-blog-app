<template>
  <div>
    <Layout />
    <a :href="routes.home">Linking</a>
    <h1>Home {{ message }}</h1>

    <p class="mb-4 leading-loose">Welcome here</p>
  </div>
</template>

<script>
import Layout from "../Layouts/Main.vue";

export default {
  name: "Home",
  components: {
    Layout,
  },
  data() {
    return {
      message: 'Vue'
    };
  },
  computed: {
    routes(){
      return {
        home: this.$api.static.home.path()
      }
    }
  },
  mounted() {
    console.log(this.$api.static.home.path());
  }
};
</script>
