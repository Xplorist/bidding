import $axios from './index'

// 登錄
export function login(data){
  const url = '/api/user/login'
  return $axios.post(url, data)
}

// 查詢登錄用戶信息
export function login_user_info(data) {
  data = { 'username': data }
  const url = '/api/user/login_user_info'
  return $axios.postWithToken(url, data)
}

// 根據pkid查詢用戶信息
export function query_user_info_by_pkid(data) {
  data = { 'pkid': data }
  const url = '/api/user/query_user_info_by_pkid'
  return $axios.post(url, data)
}

// 修改用戶信息
export function update_user_info(data) {
  const url = '/api/user/update_user_info'
  return $axios.postWithToken(url, data)
}
