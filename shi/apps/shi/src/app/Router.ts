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
    name: 'RedirectLogin',
    redirect: '/main/login',
  },
  {
    path: 'login',
    component: () => import('./Feature/Login/Login.vue'),
    // alias: '',
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
  // {
  //   path: 'balance',
  //   loadComponent: () =>
  //     import('./feature/balance/balance.component').then(
  //       (m) => m.BalanceComponent
  //     ),
  // },
  // {
  //   path: 'balance-result',
  //   loadComponent: () =>
  //     import('./feature/balance/balance-result.component').then(
  //       (m) => m.BalanceResultComponent
  //     ),
  //   resolve: {
  //     balance: balanceResolver
  //   },
  // },
  // {
  //   path: 'deposit',
  //   loadComponent: () =>
  //     import('./feature/deposit/deposit.component').then(
  //       (m) => m.DepositComponent
  //     ),
  // },
  // {
  //   path: 'deposit-result',
  //   loadComponent: () =>
  //     import('./feature/deposit/deposit-result.component').then(
  //       (m) => m.DepositResultComponent
  //     ),
  //   resolve: {
  //     deposit: depositResolver
  //   },
  // },
  // {
  //   path: 'designated-transfer',
  //   loadComponent: () =>
  //     import(
  //       './feature/designated-transfer/designated-transfer.component'
  //     ).then((m) => m.DesignatedTransferComponent),

  // },
  // {
  //   path: 'designated-transfer-confirm',
  //   loadComponent: () =>
  //     import(
  //       './feature/designated-transfer/designated-transfer-confirm.component'
  //     ).then((m) => m.DesignatedTransferConfirmComponent),
  //   resolve: {
  //     confirmData: updateTransactionInfoResolver
  //   },
  // },
  // {
  //   path: 'designated-transfer-result',
  //   loadComponent: () =>
  //     import(
  //       './feature/designated-transfer/designated-transfer-result.component'
  //     ).then((m) => m.DesignatedTransferResultComponent),
  //   resolve: {
  //     resultData: executeTransactionInfoResolver
  //   },
  // },
  // {
  //   path: 'non-designated-transfer',
  //   loadComponent: () =>
  //     import(
  //       './feature/non-designated-transfer/non-designated-transfer.component'
  //     ).then((m) => m.NonDesignatedTransferComponent),
  // },
  // {
  //   path: 'non-designated-transfer-confirm',
  //   loadComponent: () =>
  //     import(
  //       './feature/non-designated-transfer/non-designated-transfer-confirm.component'
  //     ).then((m) => m.NonDesignatedTransferConfirmComponent),
  //   resolve: {
  //     createNonAgreedTransfer: createNonAgreedTransferResolver
  //   },
  // },
  // {
  //   path: 'non-designated-transfer-result',
  //   loadComponent: () =>
  //     import(
  //       './feature/non-designated-transfer/non-designated-transfer-result.component'
  //     ).then((m) => m.NonDesignatedTransferResultComponent),
  //   resolve: {
  //     nonDesignatedTransfer: nonDesignatedTransferResolver
  //   },
  // },
  // {
  //   path: 'password-change',
  //   loadComponent: () =>
  //     import('./feature/password-change/password-change.component').then(
  //       (m) => m.PasswordChangeComponent
  //     ),
  // },
  // {
  //   path: 'password-change-result',
  //   loadComponent: () =>
  //     import('./feature/password-change/password-change-result.component').then(
  //       (m) => m.PasswordChangeResultComponent
  //     ),
  // },
  // //tour-link
  // {
  //   path: 'tour',
  //   loadComponent: () =>
  //     import('./feature/tour/tour.component').then(
  //       (m) => m.TourComponent
  //     ),
  // },
  // {
  //   path: 'OTP-application',
  //   loadComponent: () =>
  //     import('./feature/OTP-application/otp-application.component').then(
  //       (m) => m.OTPApplicationComponent
  //     ),
  // },
  // {
  //   path: 'OTP-application-result',
  //   loadComponent: () =>
  //     import(
  //       './feature/OTP-application/otp-application-result.component'
  //     ).then((m) => m.OTPApplicationResultComponent),
  //     resolve: {
  //       otp: otpResolver
  //     },
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
