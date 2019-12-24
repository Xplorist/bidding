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

// 忘記密碼：生成驗證碼
export function generate_code(data) {
  const url = '/api/user/generate_code'
  return $axios.post(url, data)
}

// 驗證驗證碼
export function check_code(data) {
  const url = '/api/user/check_code'
  return $axios.post(url, data)
}

// 更新密碼
export function update_password(data) {
  const url = '/api/user/update_password'
  return $axios.post(url, data)
}


