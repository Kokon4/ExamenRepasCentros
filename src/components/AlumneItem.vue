<script>
import { mapActions, mapState } from 'pinia';
import { useStore } from '../stores/store';
export default {
    computed: {
        ...mapState(useStore, ['alumnos']),
    },
    methods: {
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
                <button class="btn btn-sm" title="Editar alumno">
                    <i class="bi bi-pencil"></i>
                </button>
            </td>
        </tr>
    </tbody>
</template>