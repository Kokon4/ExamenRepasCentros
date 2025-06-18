<script>
import { useStore } from './stores/store';
import { mapActions,mapState } from 'pinia';
export default {
  data(){

  },
  async mounted(){
    await this.carregarFamilias();
  },
  computed: {
    ...mapState(useStore, ['groups','familias','alumnos']),
  },
  methods:{
    ...mapActions(useStore, ['carregarGrupos','carregarFamilias','carregarAlumnos']),
  }
}
</script>

<template>
  <header>
    <div class="wrapper">
      <h1>Gestion de tiendas</h1>
      <nav>
        <RouterLink to="/">Home</RouterLink> | 
        <RouterLink to="/grupos">Grupos</RouterLink> |
        <RouterLink to="/add-grupo">Nuevo Grupo</RouterLink> |
        <RouterLink to="/send-email">Enviar Email</RouterLink> |
      </nav>
    </div>
  </header>
  <RouterView />
  <footer>
    <p>Kico carbonell Recuperacion 2023-24</p>
  </footer>
</template>

<style>
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.css");
</style>
