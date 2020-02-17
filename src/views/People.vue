<template>
  <div class="people">
    <div v-for="(person,index) in people" :key="index" @click="showDetails(person.url)">
      {{ person.name }}
    </div>
    <button @click="newPeople">More</button>
  </div>
</template>

<script>

export default {
  name: 'People', 
  computed: {
    people(){
      return this.$store.getters.people;
    }
  },
  methods: {
    showDetails(url){
      this.$store.dispatch('getDetails', url);
      this.$router.push('/details');
    },
    newPeople(){
      this.$store.dispatch('getPeople', this.$store.getters.next);
    }
  },
  created(){
    this.$store.commit('personDetails', {})
  }
}
</script>
