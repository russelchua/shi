import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';
import MainFrame from './Feature/MainFrame/MainFrame.vue';

const children = [
  // {
  //   path: 'router/:parameter',
  //   loadComponent: () =>
  //     import('./core/component/router/router.component').then(
  //       (m) => m.RouterComponent
  //     ),
  // },
  {
    path: '',
    name: 'RedirectHome',
    redirect: '/main/home',
  },
  {
    path: 'home',
    component: () => import('./Feature/Home/Home.vue'),
    // alias: '',
  },
  {
    path: 'login',
    component: () => import('./Feature/Login/Login.vue'),
  },
  // {
  //   path: 'welcome',
  //   loadComponent: () =>
  //     import('./feature/function/function.component').then(
  //       (m) => m.FunctionComponent
  //     ),
  //   canActivate: [canActivateFunctionPage],
  //   resolve: {
  //     task: functionResolver
  //   },
  // },
  // {
  //   path: 'function',
  //   loadComponent: () =>
  //     import('./feature/function/function.component').then(
  //       (m) => m.FunctionComponent
  //     ),
  //   canActivate: [canActivateFunctionPage],
  //   resolve: {
  //     task: functionResolver
  //   },
  // },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/main',
    },
    {
      path: '/main',
      name: 'MainFrame',
      component: MainFrame,
      alias: '/',
      children: <RouteRecordRaw[]>children,
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/main',
    },
  ],
});

export default router;
