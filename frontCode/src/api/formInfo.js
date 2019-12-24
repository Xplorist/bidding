import $axios from './index'

// 用戶名是否存在
export function ck_user_is_exist(data) {
  const url = '/api/user/ck_user_is_exist'
  return $axios.post(url, data)
}

// 提交註冊信息表單
export function register(data) {
  const url = '/api/user/register'
  return $axios.post(url, data)
}



// 查詢廠區列表
export function query_factory_list() {
  const url = '/api/baseInfo/query_factory_list'
  const data = {}
  return $axios.post(url, data)
}

// 查詢次集團列表
export function query_SECN_CMPY_list() {
  const url = '/api/baseInfo/query_SECN_CMPY_list'
  const data = {}
  return $axios.post(url, data)
}

// 查詢事業群列表
export function query_ENTRPS_GROUP_list(data) {
  const url = '/api/baseInfo/query_ENTRPS_GROUP_list'
  data = {
    'secn_cmpy_pkid': data
  }
  return $axios.post(url, data)
}

// 查詢產品處列表信息
export function query_PD_OFFICE_list(data) {
  const url = '/api/baseInfo/query_PD_OFFICE_list'
  data = {
    'entrps_group_pkid': data
  }
  return $axios.post(url, data)
}

// 查詢交貨地點
export function query_deliver_address_list() {
  const url = '/api/baseInfo/query_deliver_address_list'
  const data = {}
  return $axios.post(url, data)
}

// 查詢開標範圍
export function query_bid_range_list() {
  const url = '/api/baseInfo/query_bid_range_list'
  const data = {}
  return $axios.post(url, data)
}


// 查詢類型
export function query_pd_type_list() {
  const url = '/api/baseInfo/query_pd_type_list'
  const data = {}
  return $axios.post(url, data)
}

// 查詢單位名稱
export function query_dept_name_by_dept_no(depr_no, fctry_zone) {
  const url = '/api/baseInfo/query_dept_name_by_dept_no'
  const data = {
    "dept_no": depr_no,
    'fctry_zone': fctry_zone
  }
  return $axios.post(url, data)
}

// 拉取法人列表
export function fuzzy_search_legal_person(data) {
  // {"legal_person": ""}
  const url = '/api/baseInfo/fuzzy_search_legal_person'
  return $axios.post(url, data)
}