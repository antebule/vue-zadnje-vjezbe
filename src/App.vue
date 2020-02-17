<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">People</router-link> |
      <router-link to="/details">Details</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app',
  data(){
    return {
      people: []
    }
  },
  created(){
    this.$store.dispatch('getPeople', 'https://swapi.co/api/people/');
    // this.people = this.$store.getters.people;
    // console.log(this.people);
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
