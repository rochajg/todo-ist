<template>
  <main>
		<div class="row">
			<blockquote>Lista de Tarefas</blockquote>
		</div>
	</main>
</template>

<script>
export default {
	name: 'list',
	data() {
		return {
				
		}
	}
}

let todos = []
let todo = {
	title: 'Comprar leite',
	date: new Date(),
	done: false,
	expires: new Date(2018, 9, 17),
	hidden: false
}
todos.push(todo)
localStorage.setItem('todos', JSON.stringify(todos))
</script>
