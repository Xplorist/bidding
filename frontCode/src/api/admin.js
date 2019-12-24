import $axios from './index'

// 根據訂單id查詢報價信息
export function query_user_au_list_pagi(data) {
  const url = '/api/admin/query_user_au_list_pagi'
  return $axios.postWithToken(url, data)
}

// 審核
export function user_au(data) {
  const url = '/api/admin/user_au'
  return $axios.postWithToken(url, data)
}
