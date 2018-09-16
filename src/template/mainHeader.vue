<template>
  <main>
    <div class="navbar-fixed">
      <nav>
        <div class="nav-wrapper">
          <a href="/" class="brand-logo">ToDo-ist</a>
          <a href data-target="mobile-menu" class="sidenav-trigger"><i class="material-icons">menu</i></a>
          <ul class="right hide-on-med-and-down">
            <li><router-link to="/">Início</router-link></li>
            <li><router-link to="list">Lista</router-link></li>
            <li><router-link to="stats">Estatísticas</router-link></li>
          </ul>
        </div>
      </nav>
    </div>  
    <ul class="sidenav" id="mobile-menu">
      <li><router-link to="/">Início</router-link></li>
      <li><router-link to="list">Lista</router-link></li>
      <li><router-link to="stats">Estatísticas</router-link></li>
    </ul>
  </main>
</template>

<script>
  $(document).ready(function(){
    $('.sidenav').sidenav();
  })

export default {
  name: 'mainHeader',
  data () {
    return {
    }
  }
}
</script>

<style lang="scss">
</style>
