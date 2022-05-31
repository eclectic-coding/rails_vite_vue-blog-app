<template>
  <div >

    <h1>Home {{ message }}</h1>

    <p class="mb-4 leading-loose">Welcome here</p>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      message: 'Vue'
    };
  }
};
</script>
