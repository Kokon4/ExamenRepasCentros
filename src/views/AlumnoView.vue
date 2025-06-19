<script>
import { mapState, mapActions } from 'pinia';
import { useStore } from '@/stores/store';
export default {
    data() {
        return {
            alumne: null
        };
    },
    props: {
        idAlumno: String
    },
    computed: {
        ...mapState(useStore, ['alumnos']),
    }, methods: {
        ...mapActions(useStore, ['getAlumne']),
    }, 
    async mounted() {
        this.alumne = await this.getAlumne(this.idAlumno);
    }
}
</script>

<template>
    <div v-if="alumne">
        <h2>Datos del Alumno {{ alumne.id }}</h2>
        <p><strong>Nom:</strong> {{ alumne.nom }}</p>
        <p><strong>NIA:</strong> {{ alumne.nia }}</p>
    </div>
    <div v-else>
        <p>Alumne no trobat.</p>
    </div>
</template>