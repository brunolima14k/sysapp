const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: 'dashboard', component: () => import('pages/Index.vue') },
      { path: '', component: () => import('pages/Principal.vue') },
      { path: 'exibicao', component: () => import('pages/Exibicao.vue') },
      { path: 'horario', component: () => import('pages/Horario.vue') },
      { path: 'cadastro', component: () => import('pages/Cadastro.vue') }
    ]
  },
  {
    path: '/login',
    component: () => import('pages/Login.vue')
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
