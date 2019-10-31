import request from '@/router/axios'

//返回数据的接口  ----code_draw.vue
export function Londin(query){
    return request({
        url:"/financial/fin/page/info",
        method:"get",
        params:query
    })
}

//返回的数据的接口
export function fetchList(query){
    return request({
        url:"/financial/finance/withdraw/page/info",
        method:"get",
        params:query
    })
}

//同意按钮的接口
export function Lock(id){
    return request({
      url:"/financial/finance/withdraw/umpass",
      method:"put",
      params:id
    })
  }

//拒绝按钮的接口
export function reject(id){
  return request({
    url:"/financial/finance/withdraw/pass",
    method:"put",
    params:id
  })
}

