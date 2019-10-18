import axios from 'axios'
// import Qs from 'qs'
import Vue from 'vue'
import { Loading, Message } from 'element-ui'

const $axios = axios.create({
  // 設置超時時間
  timeout: 30000,
  // 基礎url，在請求url中自動添加前置鏈接
  // baseURL: 'http://10.244.186.86:8081'
})

Vue.prototype.$http = axios

let loading = null

// 請求攔截器
$axios.interceptors.request.use(
  config => {
    loading = Loading.service({ text: '拼命加載中' })
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// 響應攔截器
$axios.interceptors.response.use(
  response => {
    if(loading){
      loading.close()
    }
    const code = response.status
    if((code >= 200 && code < 300) || code === 304 ){
      return Promise.resolve(response.data)
    }else{
      return Promise.reject(response)
    }
  },
  error => {
    if(loading){
      loading.close()
    }
    // console.log(error)
    if(error.response){
      switch(error.response.status){
        case 404:
          Message.error('網絡請求不存在')
          break
        case 500:
          Message.error('服務器崩潰啦')
          break
        default:
          Message.error(error.response.data.message)
      }
    }else{
      // 請求超時或者網絡有問題
      if(error.message.includes('timeout')){
        Message.error('請求超時！請檢查網絡是否正常')
      }else{
        Message.error('請求失敗！請檢查網絡是否連接')
      }
    }
    return Promise.reject(error)
  }
)

// get post 請求方法
export default{
  post(url, data, headers){
    return $axios({
      method: 'post',
      url,
      data: data,
      headers: {
        'Content-Type': ( headers || 'application/json' )
        // 'Content-Type': 'application/json'
        // 'Content-Type': 'multipart/form-data'
      }
    })
  },

  get(url, params){
    return $axios({
      method: 'get',
      url,
      params
    })
  }
}