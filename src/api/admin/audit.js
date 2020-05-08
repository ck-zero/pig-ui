import request from "@/router/axios"

//返回数据的接口
export function fetchList (query) {
    return request({
      url: '/sup/supcust/enter/page/info',
      method: 'get',
      params: query
    })
  }

//同意接口
export function Lock(id){
  return request({
    url:"/sup/supcust/enter/pass",
    method:"put",
    params:id
  })
}

//拒绝接口
export function reject(id){
  return request({
    url:"/sup/supcust/enter/unpass",
    method:"put",
    params:id
  })
}


