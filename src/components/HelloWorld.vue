<template>
<div>
  <h1>computed and watch</h1>
  <button @click="handleClick">{{number}}</button>
  <h1>Passing</h1>
  <span>{{message}}</span>
  <div v-for="user in users" :key="user.id">
    {{user.name}}
  </div>
</div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'HelloWorld',
  props: ['message'],
  data () {
    return {
      coutn: 0,
      b: 1,
      users: []
    }
  },
  
  created() {
    this.coutn = 5
    console.log(this.coutn);
  },
  mounted() {
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(data => {this.users = data.data
    console.log(this.users)
    })
    .catch(err => console.log(err))
  },
  beforeUpdate() {
    console.log('count update:' + this.coutn);
  },
  updated() {
    console.log('update thành công')
  },
  computed: {
    number: function () {
      return  this.coutn + this.b  
    }
  },
watch: {
  coutn(newCoutn){
    console.log(`số mới ${newCoutn}`);
  }
},
methods: {
  handleClick(){
    this.coutn ++
  }
},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
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
