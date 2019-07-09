import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: [], 
  },
  mutations: {
    addTodo(state, todo) {
      todo = {id: state.todos.length, name:todo}
      state.todos.push(todo);
    },
    removeTodo(state, id) {
      state.todos = state.todos.filter(item => item.id !== id);
    }
  },
  actions: {

  }
})
