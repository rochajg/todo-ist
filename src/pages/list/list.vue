<template>
  <main>
		<div class="row">
			<div class="col s12">
				<h3 class="center-align">Lista De Tarefas</h3>
			</div>
			<newTodoItem class="col s12" />
			<div class="col s12">
				<ul class="collection">
					<todoItem class="collection-item" v-for="todo in todos" 
					:key="todo.id"
					:todo="todo" />
				</ul>
			</div>
		</div>
	</main>
</template>

<script>
import todoItem from './components/todoItem.vue'
import newTodoItem from './components/newTodoItem.vue'

let nextTodoId = 1

export default {
	name: 'list',
	components: {todoItem, newTodoItem},
	data() {
		return {
			newTodo: {},
			todos: JSON.parse(localStorage.getItem('todos'))
		}
	},
	methods: {
		addTodo() {

		}
	}
}

let todos = []
let todo1 = {
	title: 'Comprar leite',
	date: new Date(),
	done: false,
	expires: new Date(2018, 9, 17),
	hidden: false
}, todo2 = {
	title: 'Buscar encomendas nos correios',
	date: new Date(),
	done: true,
	expires: new Date(2018, 9, 18),
	hidden: false
}
todos.push(todo1, todo2)
localStorage.setItem('todos', JSON.stringify(todos))
</script>
