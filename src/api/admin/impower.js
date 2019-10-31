import request from "@/router/axios"

//返回数据的接口
export function fetchList (query) {
    return request({
      url: '/wechat/employee/page/info',
      method: 'get',
      params: query
    })
  }

//同意接口
export function Lock(id){
  return request({
    url:"/wechat/employee/getpass",
    method:"put",
    params:id
  })
}

//拒绝接口
export function reject(id){
  return request({
    url:"/wechat/employee/reject",
    method:"put",
    params:id
  })
}

//员工锁定
export function Staff(id){
  return request({
    url:"/wechat/employee/lock",
    method:"put",
    params:id
  })
}


