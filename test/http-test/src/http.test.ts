import { test } from "vitest"
import { basicHttp } from "@elonehoo/http"

test('test http',()=>{
  basicHttp.request({
    url:'https://api.apishop.net/common/air/getCityPM25Detail',
    method:'POST',
    data:{
      apiKey: 'FF2EsRW263b44fea77620f637242b57efe1334cbe701e01',
      city: '广州市'
    }
  }).then(res =>{
    console.log(res.data)
  })
})
