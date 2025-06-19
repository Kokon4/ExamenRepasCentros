<template>
  <div class="row">
    <div class="col-sm-12 col-md-12 col-lg-12">
      <h1>Alumnos a enviar un email</h1>
      <table class="table table-striped table-hover">
        <thead class="thead-dark bg-primary">
          <tr>
            <th>Id</th>
            <th>NIA</th>
            <th>Nombre</th>
            <th>Grupo</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="alumne in alumnosEnviarEmail" :key="alumne.id">
            <td>{{ alumne.id }}</td>
            <td>{{ alumne.nia }}</td>
            <td>{{ alumne.nom }}</td>
            <td>{{ alumne.grup }}</td>
            <td>
              <button class="btn btn-sm btn-danger" @click="eliminarEmailList(alumne.id)">
                <i class="bi bi-trash"></i> Eliminar
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <button @click="enviarEmails()" class="btn btn-primary">Enviar email</button>
    </div>
  </div>
</template>

<script>
import { useStore } from '@/stores/store';
import { mapActions, mapState } from 'pinia';
export default {
  async mounted() {
    await this.carregarLlistaEmails();
  },
  computed:{
    ...mapState(useStore,['alumnosEnviarEmail'])
  },
  methods: {
  ...mapActions(useStore, ['carregarLlistaEmails','eliminarEmailList','enviarEmail']),
  }
};
</script>
