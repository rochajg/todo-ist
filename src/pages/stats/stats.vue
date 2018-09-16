<template>
  <main>
		<div class="row">
			<blockquote>Estatísticas das tarefas</blockquote>
      <ul class="collection">
        <li class="collection-item" v-for="todo in todos" :key="todo.id">{{todo.done}} - {{todo.title}}</li>
      </ul>
      </div>
		</div>
	</main>
</template>

<script>
export default {
	name: 'stats',
	data() {
    let todos = JSON.parse(localStorage.getItem('todos')) 
    console.log(todos)
		return {
				todos: todos
		}
	}
}
</script>
