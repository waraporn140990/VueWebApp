import { createWebHistory, createRouter } from 'vue-router'
import  Home from "@/views/็็้Home.vue";
import Products from '@/views/Products.vue';
import About from '@/views/About.vue';
import NotFound from '@/views/NotFound.vue';
import ProductDetail from '@/views/ProductDetials.vue';
const routes =[
 {path: '/', component: Home },
 {path: '/about', component: About },
 {path: '/products', component: Products 
 },
 {
    path: '/productdetail/:productId',
    name: 'ProductDetail',
    component: ProductDetail,
    props: true,
 },
 {
   path: '/products/:id',
   name: 'ProductDetail',
   component: ProductDetail,
   props: true
 },
 {
  path: '/:catchall(.*)',
  name: 'NotFound',
  component: NotFound
},
];

const router = createRouter({
history: createWebHistory(),
routes,
});

export default router;
