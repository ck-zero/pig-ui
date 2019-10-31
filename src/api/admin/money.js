import request from '@/router/axios'

//返回数据的接口  ----code_draw.vue
export function Londin(query){
    return request({
        url:"/financial/finance/synthesize/page/info",
        method:"get",
        params:query
    })
}



