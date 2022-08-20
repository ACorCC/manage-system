import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('../views/Home.vue')
    }
  ]
})

router.beforeEach((to, from, next) => {
  console.log('next----');
  const role = localStorage.getItem('username');
  console.log(role);
  if (to.path === '/login') next()
  if (!role && to.path !== '/login') {
    console.log('need to login at first');
    next('/login');
  } else if (to.meta.permission) {
    console.log('to', to);
    // 如果是管理员权限则可进入，这里只是简单的模拟管理员权限而已
    role === 'admin'
      ? next()
      : next('/403');
  } else if (role === 'admin') {
    console.log('to2', to);
    next();
  } else {
    console.log('错误的账号');
    next('/login');
  }
});

export default router
