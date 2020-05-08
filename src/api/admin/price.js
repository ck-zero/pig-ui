import request from '@/router/axios'

//返回数据的接口  ----code_draw.vue
export function Londin(query){
    return request({
        url:"/item/purchas/page",
        method:"get",
        params:query
    })
}