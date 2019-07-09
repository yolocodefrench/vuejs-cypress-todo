<template>
  <div class="home">
    <div class="todo-home">
      <h1>todo</h1>
      <home-component/>
    </div>
    <div class="me">
      <p>Created By : Pierre Chéné</p>
      <p>09/07/2019</p>
      <a href="https://github.com/yolocodefrench/vuejs-cypress-todo">github</a>
    </div>
  </div>
</template>

<script>
import HomeComponent from '@/components/HomeComponent.vue'

export default {
  name: 'home',
  components: {
    HomeComponent
  }
}
</script>
<style lang="scss" scoped>
.home {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 95vh;

  & > .todo-home {
     & > h1 {
      margin-top: 25px;
      text-align: center;
      font-size: 2.5em;
      font-family: sans-serif;
      color: #FF5733;
    }
  }

  & > .me {
    display: flex;
    flex-direction: column;
    align-items: center;
    p {
      font-family: sans-serif;
    }
  }  
}
</style>

