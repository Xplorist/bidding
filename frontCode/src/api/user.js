import $axios from './index'
import axios from 'axios'

// 登錄
export function login(data){
  const url = '/api/user/login'
  return $axios.post(url, data)
}

// 查詢登錄用戶信息
export function login_user_info(data, token){
  const url = '/api/user/login_user_info'
  data = { 'username': data }
  return axios({
    method: 'post',
    url,
    data,
    headers: {
      'Content-Type': 'application/json',
      'token' : token
    }
  })
}
