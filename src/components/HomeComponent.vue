<template>
  <div class="home-component">
    <input 
      type="text" 
      class="home-component__input" 
      placeholder="ex : Do the laundry"
      @keyup.enter="addTodo" />
    <div class="list-todo">
      <template  v-for="todo of todos">
        <todo :todo="todo.name" :key="todo.id" @remove="removeTodo(todo)"/>
      </template>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex';
import Todo from './Todo.vue';

export default {
  name: 'home-component',
  components: {
    Todo,
  },
  methods: {
    addTodo (e) {
      this.$store.commit('addTodo', e.target.value)
      e.target.value = ''
    },
    removeTodo (todo) {
      console.log(todo);
      this.$store.commit('removeTodo', todo.id)
    },
  },
  computed: 
  mapState({
    todos: state => state.todos,
  }),
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.home-component {
  width: 500px;
  margin: auto;
  position: relative;
  box-shadow: 0px 3px  7px 	#D3D3D3; 

  &__input {
    padding: 10px 50px;
    outline: none;
    border:none;
    font-size: 2em;
    width: 400px;
    color: grey;  
    border-bottom: 1px solid #ccc;
  }
}
</style>
