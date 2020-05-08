import request from "axios"

export function fetchList(query){
    return request({
     url:"/item/shelf/page/info",
     method:"get",
     params:query 
    })
}

export function putObj(id){
    return request({
     url:"/item/shelf/update",
     method:"put",
     params:id 
    })
}