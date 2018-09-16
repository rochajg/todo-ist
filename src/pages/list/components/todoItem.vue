<template>
  <li class="row">
    <label class="col s1">
      <input type="checkbox" v-model="todo.done"/>
      <span></span>
    </label>
    <div class="col s9">
      <span class="row">
        <span class="col s8" v-bind:class="{marked: todo.done}">{{todo.title}}</span>
        <span class="col s4" v-bind:class="{marked: todo.done}">{{moment(todo.expires).format('DD/MM/YYYY')}}</span>
      </span>
    </div>
    <span class="col s2">
      <a class="waves-effect waves-light red lighten-1 btn btn-small"><i class="tiny material-icons">delete</i></a>
    </span>
  </li>
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
