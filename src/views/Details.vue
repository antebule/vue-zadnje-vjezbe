<template>
  <div class="about">
    <h1>This is a details page</h1>
    <div>
      <p>Name: <b>{{ person.name }}</b></p>
      <p>Height: <b>{{ person.height }}</b></p>
      <p>Mass: <b>{{ person.mass }}</b></p>
      <p>Gender: <b>{{ person.gender }}</b></p>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      // person: {}
    }
  },
  computed: {
    person(){
      return this.$store.getters.details;
      // console.log(this.person);
    }
  },
}
</script>
