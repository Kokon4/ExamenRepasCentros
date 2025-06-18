
<script>
import AlumneItem from "@/components/AlumneItem.vue";
import { useStore } from "../stores/store";
import { mapState, mapActions } from "pinia";

export default {
  data() {
    return {
    grupSeleccionat: null
    };
  },
  methods: {
    ...mapActions(useStore, ['carregarGrupos','carregarFamilias','carregarAlumnosGrupo']),
    mostrarNomNoId(familiaId){
      const nomFamilia = this.familias.find(familia => familia.id  == familiaId);
      return nomFamilia ? nomFamilia.nom : '';
    },
    async mostrarAlumnos(group){
      this.grupSeleccionat = group;
      await this.carregarAlumnosGrupo(group.id);
    }
  },
  computed: {
    ...mapState(useStore, ['groups','familias','alumnos']),
  },
  components: {
    AlumneItem
  },
  async mounted(){
    await this.carregarGrupos();
  }
};

</script>
<template>
  <div class="row">
    <div class="col-sm-7 col-md-7 col-lg-7">
      <h1>Listado de grupos</h1>
      <table class="table table-striped table-hover">
        <thead class="thead-dark bg-primary">
          <tr>
            <th>Id</th>
            <th>Código</th>
            <th>Nombre</th>
            <th>Grado</th>
            <th>Familia</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="group in groups" :key="group.id" @click="mostrarAlumnos(group)">
            <td>{{ group.id }}</td>
            <td>{{ group.codi }}</td>
            <td>{{ group.nom }}</td>
            <td>{{ group.grau }}</td>
            <td>{{ mostrarNomNoId(group.familia) }}</td>
            <td>
              <button class="btn btn-sm" title="Editar grupo">
                <i class="bi bi-pencil"></i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="col-sm-5 col-md-5 col-lg-5">
      <h2 v-if ="grupSeleccionat"> Alumnos grupo {{ grupSeleccionat?.nom }}</h2>
      <AlumneItem v-if="grupSeleccionat" />
      <h3 v-else>Selecciona un grupo</h3>
    </div>
  </div>
</template>
