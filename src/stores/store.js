import { defineStore } from "pinia";
import axios from 'axios';

const API_URL = 'http://localhost:3000';

export const useStore = defineStore('store', {
    state() {
        return {
            groups: [],
            alumnos: [],
            familias: [],
            alumnosEnviarEmail: []
        }
    },
    actions:{
      async carregarGrupos(){
        const response = await axios.get(`${API_URL}/grupos`);
        this.groups = response.data;
      },
      async carregarAlumnosGrupo(grupoId){
        const response = await axios.get(`${API_URL}/alumnos?grup=${grupoId}`);
        this.alumnos = response.data;
      },
      async carregarFamilias(){
        const response = await axios.get(`${API_URL}/familias`);
        this.familias = response.data;
      },
      async eliminarAlumno(id){
        await axios.delete(`${API_URL}/alumnos/${id}`);
        this.alumnos = this.alumnos.filter(alumne => alumne.id !== id);
      },
      async getAlumne(id){
        const response = await axios.get(`${API_URL}/alumnos/${id}`);
        return response.data;
      },
      carregarLlistaEmails(){
        const emailsGuardats = localStorage.getItem('emails');
        //O Array buit o el que ens torna el localstorage
        this.alumnosEnviarEmail = emailsGuardats ? JSON.parse(emailsGuardats) : [];
      },
      afegirAlumneEmail(alumne){
        this.alumnosEnviarEmail.push(alumne);
        localStorage.setItem('emails', JSON.stringify(this.alumnosEnviarEmail));
      },
      eliminarEmailList(id){
        if(confirm("Seguro que quieres eliminar el alumno?")){
          this.alumnosEnviarEmail = this.alumnosEnviarEmail.filter(alumne => alumne.id !== id);
          localStorage.setItem('emails', JSON.stringify(this.alumnosEnviarEmail));
        }
      },
      enviarEmail(){
        alert('Emails enviats');
        this.alumnosEnviarEmail = [];
        localStorage.setItem('emails', JSON.stringify(this.alumnosEnviarEmail));
      },
      async afegirGrup(grup){
        const response = await axios.post(`${API_URL}/grupos`, grup);
        this.groups.push(response.data);
      },
      async editarGrup(grup){
        const response = await axios.put(`${API_URL}/grupos/${grup.id}`, grup);
        const index = this.groups.findIndex(grup => grup.id === response.data.id);
        this.groups.splice(index, 1, response.data);
      },
      async editarNomGrup(grup){
        //En payload enviem el camp volem cambiar
        const payload = {nombre: grup.nombre};
        //Fem la peticio
        const response = await axios.put(`${API_URL}/grupos/${grup.id}`, payload);
        //Agafem el index
        const index = this.groups.findIndex(grup => grup.id === response.data.id);
        // I fem el splice
        this.groups.splice(index, 1, response.data);
      }
    },
})