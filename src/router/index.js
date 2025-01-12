import { createRouter, createWebHistory } from 'vue-router'
import Application from '@/application/Application.vue';
import LoginView from '@/views/LoginView.vue';
import RegistrationView from '@/views/RegistrationView.vue';
import { isTokenValid } from '@/services/user/TokenService'
import NProgress from 'nprogress'
NProgress.configure({ showSpinner: false })

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: LoginView,
      meta: { loginPage: true }
    },
    {
      path: '/registration',
      name: 'registration',
      component: RegistrationView,
    },
    {
      path: '/main',
      name: 'application',
      component: Application,
      meta: { requiresAuth: true }, // Define a rota como protegida
      children: [
        {
          path: 'dashboard',
          name: 'dashboard',
          component: () => import('@/application/views/HomeView.vue')
        },
    
        // NORMS ROUTES
        {
          path: 'norms',
          name: 'norms',
          component: () => import('@/application/views/norms/NormsView.vue')
        },
        {
          path: 'norms/systems',
          name: 'systems',
          component: () => import('@/application/views/norms/systems/SystemsView.vue')
        },
    
        // PROGRAM ROUTES
        {
          path: 'programs',
          name: 'programs',
          component: () => import('@/application/views/programs/ProgramsView.vue')
        },
    
        // PROCESS ROUTES
        {
          path: 'process',
          name: 'process',
          component: () => import('@/application/views/process/ProcessView.vue')
        },
        {
          path: 'process/preview/:id',
          name: 'process-preview',
          component: () => import('@/application/views/process/PreviewProcessView.vue')
        },
        {
          path: 'process/oportunities',
          name: 'oportunities',
          component: () => import('@/application/views/process/oportunities/OportunitiesView.vue')
        },
        {
          path: 'process/risks',
          name: 'risks',
          component: () => import('@/application/views/process/risks/RisksView.vue')
        },
        // CONFORMITIES ROUTES
        {
          path: 'conformities',
          name: 'conformities',
          component: () => import('@/application/views/conformities/ConformitiesView.vue')
        },
        {
          path: 'conformities/preview/:id',
          name: 'conformity-preview',
          component: () => import('@/application/views/conformities/PreviewConformity.vue')
        },
    
        // AUDITS ROUTES
        {
          path: 'audits',
          name: 'audits',
          component: () => import('@/application/views/audits/AuditsView.vue')
        },
        {
          path: 'unconformity/preview/:id',
          name: 'audit-preview',
          component: () => import('@/application/views/audits/PreviewAuditView.vue')
        },
    
        // DOCUMENTATION ROUTES
        {
          path: 'documentations',
          name: 'documentations',
          component: () => import('@/application/views/documentation/DocumentationView.vue')
        },
    
        // TRAININGS ROUTES
        {
          path: 'trainings',
          name: 'trainings',
          component: () => import('@/application/views/trainings/TrainingsView.vue')
        },
        {
          path: 'training/preview/:id',
          name: 'training-preview',
          component: () => import('@/application/views/trainings/PreviewTrainingView.vue')
        },
    
        // REPORTS ROUTES
        {
          path: 'reports',
          name: 'reports',
          component: () => import('@/application/views/reports/ReportsView.vue')
        },
    
        // NOTIFICATIONS ROUTES
        {
          path: 'notifications',
          name: 'notifications',
          component: () => import('@/application/views/notifications/NotificationsView.vue')
        },
    
        // PROFILE ROUTES
        {
          path: 'profile',
          name: 'profile',
          component: () => import('@/application/views/profile/ProfileView.vue')
        },
      ]
    }
  ]
})

router.beforeEach(async (to, from, next) => {
  const valid = await isTokenValid()

  // Verifica se a rota requer autenticação
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!valid) {
      // Se o token expirou ou não existe, redireciona para a página de login
      next({ name: 'login' })
    } else {
      // Start the route progress bar.
      NProgress.start()
      // Se o token é válido, permite o acesso à rota
      next()
    }
  }
  // Verifica se é a rota de login
  else if (to.matched.some((record) => record.meta.loginPage)) {
    if (valid) {
      // Se o token não expirou, redireciona para a página de dashboard
      next({ name: 'dashboard' })
    } else {
      // Se o token expirou, permite o acesso à rota
      next()
    }
  } else {
    // Para rotas que não requerem autenticação, permite o acesso
    next()
  }
})

router.afterEach(() => {
  // Complete the animation of the route progress bar.
  NProgress.done()
})


export default router;
