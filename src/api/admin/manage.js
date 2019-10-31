import request from "@/router/axios"

//返回数据的接口
export function fetchList (query) {
    return request({
      url: '/sup/supcust/page/info',
      method: 'get',
      params: query
    })
  }

//供应商比例按钮接口
export function  putObj(id){
  return request({
    url:"/sup/supcust",
    method:"put",
    params:id
  })
}