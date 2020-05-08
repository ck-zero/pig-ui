import request from "axios"

export function fetchList(query){
    return request({
     url:"/item/store/house/document/page",
     method:"get",
     params:query 
    })
}

export function putObj(id){
    return request({
     url:"/item/store/house/document/update",
     method:"put",
     params:id 
    })
}