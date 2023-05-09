<template>
    <div>
        <Hello :message='msg'/>
 <div>
    <p>Counter: {{ counter }}</p>
    <p>Double Counter: {{ doubleCounter }}</p>
    <button @click="increment">Increment</button>
    <button @click="decrement">Decrement</button>
  </div>
    </div>
</template>
<script>
import Hello from './HelloWorld.vue'
import { mapState, mapGetters, mapActions } from 'vuex'

export default {
    components: {Hello},
    data() {
        return {
            msg: 'hello'
        };
    },
     computed: {
            ...mapState(['counter']),
            ...mapGetters(['doubleCounter'])
  },
  methods: {
    ...mapActions(['increment', 'decrement']),
  }

}

</script>