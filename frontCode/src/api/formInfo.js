import $axios from './index'

// 用戶名是否存在
export function ck_user_is_exist(data){
  const url = '/api/user/ck_user_is_exist'
  return $axios.post(url, data)
}

// 查詢廠區列表
export function query_factory_list(data){
  const url = '/api/baseInfo/query_factory_list'
  return $axios.post(url, data)
}

// 查詢次集團列表
export function query_SECN_CMPY_list(data){
  const url = '/api/baseInfo/query_SECN_CMPY_list'
  data = {'fctry_zone_pkid': data}
  return $axios.post(url, data)
}

// 查詢事業群列表
export function query_ENTRPS_GROUP_list(data){
  const url = '/api/baseInfo/query_ENTRPS_GROUP_list'
  data = {'secn_cmpy_pkid': data}
  return $axios.post(url, data)
}

// 查詢產品處列表信息
export function query_PD_OFFICE_list(data){
  const url = '/api/baseInfo/query_PD_OFFICE_list'
  data = {'entrps_group_pkid': data}
  return $axios.post(url, data)
}



// 提交註冊信息表單
export function register(data){
  const url = '/api/user/register'
  return $axios.post(url, data)
}