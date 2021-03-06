import Layout from '@/page/index/'
export default [{
    path: '/wel',
    component: Layout,
    redirect: '/wel/index',
    children: [{
        path: 'index',
        name: '首页',
        component: () =>
            import ( /* webpackChunkName: "views" */ '@/page/wel')
    }]
}, {
    path: '/info',
    component: Layout,
    redirect: '/info/index',
    children: [{
        path: 'index',
        name: '个人信息',
        component: () =>
            import ( /* webpackChunkName: "page" */ '@/views/admin/user/info'),
    }]
},
{
    path: '/code_info',
    component: Layout,
    redirect: '/code_info/index',
    children: [{
        path: 'index',
        name: '比价',
        component: () =>
            import ( /* webpackChunkName: "page" */ '@/views/admin/code/code_info'),
    }]
},
// {
//     path: '/goBack',
//     component: Layout,
//     redirect: '/goBack/index',
//     children: [{
//         path: 'index',
//         name: '详情页',
//         component: () =>
//             import ( /* webpackChunkName: "page" */ '@/views/admin/putaway/goBack'),
//     }]
// },
]
