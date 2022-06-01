<template>
  <div>
    <Layout />
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
  }
};
</script>
