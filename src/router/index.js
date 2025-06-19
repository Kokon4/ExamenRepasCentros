import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import GroupsView from '../views/GroupsView.vue'
import GroupForm from '../views/GroupForm.vue'
import EmailView from '../views/EmailView.vue'
import AlumnoView from '../views/AlumnoView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/grupos',
      name: 'grupos',
      component: GroupsView,
    },
    {
      path: '/add-grupo',
      name: 'grupoForm',
      component: GroupForm,
    },
    {
      path: '/send-email',
      name: 'send-email',
      component: EmailView,
    },
    {
      path: '/vore-alumno/:idAlumno',
      name: 'vore-alumno',
      component: AlumnoView,
      props: true
    },
    {
      path: '/editar-grup/:idGrupo',
      name: 'editar-grup',
      component: GroupForm,
      props: true
    }
  ],
})

export default router
