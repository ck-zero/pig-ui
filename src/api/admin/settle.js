//结算管理

import request from '@/router/axios'

export function fetchList (query) {
  return request({
    url: '/financial/settle/page/info',
    method: 'get',
    params: query
  }
  )
}

export function addObj (id) {
  return request({
    url: '/financial/settle/insert',
    method: 'post',
    params:id
  })
}

export function putObj (id) {
  return request({
    url: '/financial/settle/update',
    method: 'put',
    params:id
  })
}

export function appObj(query){
  return request({
    url:"/sup/supcust/info/like",
    method:"get",
    params: query
  })
}

