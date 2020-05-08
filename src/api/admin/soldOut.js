import request from "@/router/axios"

//返回数据的接口
export function fetchList (query) {
    return request({
      url: '/item/it/page/info',
      method: 'get',
      params: query
    })
  }

  export function  putObj(query){
    return request({
      url:"/item/shelf/add",
      method:"post",
      params:query
    })
  }

  export function  postObj(obj){
    return request({
      url:"/item/shelf/add",
      method:"post",
      data:obj
    })
  }