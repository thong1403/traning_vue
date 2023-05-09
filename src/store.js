import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        counter: 0
    },
    mutations: {
        increment(state) {
            state.counter++
        },
        decrement(state) {
            state.counter--
        }
    },
    actions: {
        increment(context) {
            context.commit('increment')
        },
        decrement(context) {
            context.commit('decrement')
        }
    },
    getters: {
        doubleCounter(state) {
            return state.counter * 2
        }
    }
})
  
export default store;