<template>
  <p>
    <label>
      <input type="checkbox" v-model="todo.done"/>
      <span v-bind:class="{marked: todo.done}">{{todo.title}} - {{moment(todo.expires).format('DD/MM/YYYY')}}</span>
    </label>
  </p>
</template>

<script>
export default {
  name: 'todoItem',
  props: {
    todo: {
      type: Object,
      required: true
    }
  }
}
</script>

<style>
.marked {
  text-decoration: line-through;
}
</style>
