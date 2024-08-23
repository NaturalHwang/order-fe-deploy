import ProductList from '@/views/ProductList.vue'
import ProductListManage from '@/views/ProductListManage.vue'
import ProductCreate from "@/views/ProductCreate.vue";

export const productRouter = [
    {
        path:'/',
        name:'Home',
        component: ProductList
    },
    {
        path:'/product/list',
        name:'ProductList',
        component: ProductList
    },
    {
        path:'/product/manage',
        name:'ProductListManage',
        component: ProductListManage
    },
    {
        path: '/product/create', // 호출
        name: 'ProductCreate',
        component: ProductCreate
    },
]