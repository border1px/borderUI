<template>
  <ul>
    <li v-for="todo in todos" :key="todo.id">
      <slot :todo="todo">{{todo.text}}</slot>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'bo-test',
  props: {
    todos: {
      type: Array
    }
  }
}
</script>