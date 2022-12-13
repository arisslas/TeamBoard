<template>
  <div>
    <NavBar></NavBar>
    <router-view></router-view>
  </div>
</template>

<script>
import NavBar from './header/NavBar.vue'
import { mapActions} from 'vuex'
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  beforeMount(){
    this.getAllUsers()
  },
  methods: {
    ...mapActions('user', ['getAllUsers']),

  },
  components: { NavBar },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
