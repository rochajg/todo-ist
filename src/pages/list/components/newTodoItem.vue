<template>
  <main>
    <div class="row">
      <div class="col s12">
        <ul class="collapsible">
          <li>
            <div class="collapsible-header"><i class="material-icons">add</i>Adicionar Tarefa</div>
            <div class="collapsible-body">
              <input type="text" placeholder="Escreva sua tarefa aqui...">
              <input type="text" class="datepicker" placeholder="DD/MM/AAAA">
              <div class="right-align">
                <a href class="btn green"><i class="material-icons">add</i></a>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </main>
</template>

<script>
$(document).ready(function(){
  $('.datepicker').datepicker({
    format: 'dd/mm/yyyy',
    minDate: new Date()
  })
  $('.collapsible').collapsible()
})

export default {
  name: 'newTodoItem',
  props: {
    newTodo: {
      type: Object
    }
  }
}
</script>
