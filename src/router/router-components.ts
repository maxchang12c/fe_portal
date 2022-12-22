const Home = () => import('@/views/Home.vue')
const Register = () => import('@/views/auth/Register.vue')
const SellerRegister = () => import('@/views/auth/SellerRegister.vue')
const Auth = () => import('@/views/auth/index.vue')

// const User = () => import('@/user');
// const UserList = () => import('@/user/main');
// const UserDetail = () => import('@/user/detail');
// const Error = () => import('@/error');

export const routes = [
  {
    path: '/',
    name: 'home',
    // redirect: 'user/list',
    component: Home,
    children: []
  },
  {
    path: '/',
    name: 'auth',
    component: Auth,
    redirect: 'auth/register',
    children: [
      { path: 'register', name: 'register', component: Register },
      { path: 'Seller/register', name: 'SellerRegister', component: SellerRegister }
    ]
  },
  {
    path: '/404',
    name: 'error',
    component: Error
  }
]
