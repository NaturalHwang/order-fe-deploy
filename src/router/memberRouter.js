import MemberCreate from '@/views/MemberCreate.vue'
import MyPage from '@/views/MyPage'
import LoginPage from '@/views/LoginPage.vue'
import MemberList from '@/views/MemberList.vue'

export const memberRouter = [
    {
        path:'/member/create',
        name:'MemberCreate',
        component: MemberCreate
    },
    {
        path:'/mypage',
        name:'MyPage',
        component: MyPage
    },
    {
        path:'/login',
        name:'LoginPage',
        component: LoginPage
    },
    {
        path:'/member/list',
        name:'MemberList',
        component: MemberList
    }
]