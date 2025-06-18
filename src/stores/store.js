import { defineStore } from "pinia";
import axios from 'axios';

const API_URL = 'http://localhost:3000';

export const useStore = defineStore('store', {
    state() {
        return {
            groups: [],
            alumnos: [],
            familias: [],
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
      
    },
})