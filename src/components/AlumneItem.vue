<script>
import { mapActions, mapState } from 'pinia';
import { useStore } from '../stores/store';
export default {
    computed: {
        ...mapState(useStore, ['alumnos']),
    },
    methods: {
        ...mapActions(useStore, ['eliminarAlumno','afegirAlumneEmail']),
        async eliminarAlumneLocal(id){
            if(confirm("Seguro que quieres eliminar el alumno?")){
                await this.eliminarAlumno(id);
            }
        },
        voreAlumne(id){
            this.$router.push(`/vore-alumno/${id}`);
        },
        afegirAlumne(alumne){
            this.$router.push('send-email');
            this.afegirAlumneEmail(alumne);
        }
    },
}
</script>

<template>
    <thead>
        <th>Id</th>
        <th>NIA</th>
        <th>Nombre</th>
        <th>Acciones</th>
    </thead>
    <tbody>
        <tr v-for="alumne in alumnos" :key="alumne.id">
            <td>{{ alumne.id }}</td>
            <td>{{ alumne.nia }}</td>
            <td>{{ alumne.nom }}</td>
            <td>
                <button class="btn btn-sm" @click="voreAlumne(alumne.id)" title="Ver alumno">
                    <i class="bi bi-eye"></i>
                </button>
                <button class ="btn btn-sm" @click="eliminarAlumneLocal(alumne.id)">Eliminar
                    <i class="bi bi-trash"></i>
                </button>
                <button class ="btn btn-sm" @click="afegirAlumne(alumne)">Enviar email
                    <i class="bi bi-envelope"></i>
                </button>
            </td>
        </tr>
    </tbody>
</template>