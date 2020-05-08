import request from "@/router/axios"

//goBack.vue
export function getData(id){
  return request({
    url: '/item/stack/pc/id',
    method: 'get',
    params: id
  }) 
}

//返回数据的接口
export function fetchList (query) {
    return request({
      url: '/item/stack/page',
      method: 'get',
      params: query
    })
  }

  //同意
export function  putObj(id){
return request({
    url:"/item/stack/pc/upass",
    method:"put",
    params:id
})
}  

//拒绝
export function  reject(id){
    return request({
        url:"/item/stack/pc/pass",
        method:"put",
        params:id
    })
}

//一级分类
export function oneObj(query){
  return request({
      url:"/item/class/first",
      method:"get",
      params:query
  })
  }

//二级分类  
export function twoObj(id){
  return request({
      url:"/item/class/second",
      method:"get",
      params:id
  })
  }

  //二级分类 
export function threeObj(id){
  return request({
      url:"/item/class/third",
      method:"get",
      params:id
  })
  }

  //batch.vue 批量上传
  export function batchList (query) {
    return request({
      url: '/item/stack/log/page',
      method: 'get',
      params: query
    })
  }