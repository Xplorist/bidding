import $axios from './index'
import axios from 'axios'
import store from '@/store'

// 【發單方】
// 保存訂單
export function saveBill(data, token) {
  const url = '/api/bill/saveBill'
  return axios({
    method: 'post',
    url,
    data,
    headers: {
      'Content-Type': 'application/json',
      'token': token
    }
  })
}
// 發佈訂單
export function submitBill(data, token) {
  const url = '/api/bill/submitBill'
  return axios({
    method: 'post',
    url,
    data,
    headers: {
      'Content-Type': 'application/json',
      'token': token
    }
  })
}
// 查詢訂單
export function query_bill_list_send_user(bill_status, pageIndex, pageSize) {
  const url = '/api/bill/query_bill_list_send_user'
  const data = {
    bill_status: bill_status,
    pageIndex: pageIndex,
    pageSize: pageSize
  }
  const token = store.state.token
  return axios({
    method: 'post',
    url,
    data,
    headers: {
      'Content-Type': 'application/json',
      'token': token
    }
  })
}

// 查詢訂單狀態對應數量
export function query_status_bill_num_send_user() {
  const url = '/api/bill/query_status_bill_num_send_user'
  const data = {}
  const token = store.state.token
  return axios({
    method: 'post',
    url,
    data,
    headers: {
      'Content-Type': 'application/json',
      'token': token
    }
  })
}

// 查詢保存的訂單信息
export function query_bill_by_pkid(pkid) {
  const data = {
    "pkid": pkid
  }
  const url = '/api/bill/query_bill_by_pkid'
  return $axios.post(url, data)
}

// 【接單方】
// 查詢訂單信息
export function query_bill_list_recv_user(bill_status, pageIndex, pageSize) {
  const data = {
    bill_status: bill_status,
    pageIndex: pageIndex,
    pageSize: pageSize
  }
  const url = '/api/bill/query_bill_list_recv_user'
  const token = store.state.token
  return axios({
    method: 'post',
    url,
    data,
    headers: {
      'Content-Type': 'application/json',
      'token': token
    }
  })
}

// 查詢訂單狀態對應數量
export function query_status_num_recv_user() {
  const url = '/api/bill/query_status_num_recv_user'
  const data = {}
  const token = store.state.token
  return axios({
    method: 'post',
    url,
    data,
    headers: {
      'Content-Type': 'application/json',
      'token': token
    }
  })
}

// 【主頁】
// 查詢訂單信息（未登錄狀態）
export function query_bill_list_not_login(data) {
  const url = '/api/bill/query_bill_list_not_login'
  return $axios.post(url, data)
}

// 查詢訂單信息（接單方）
export function query_bill_list_recv_main(data) {
  const url = '/api/bill/query_bill_list_recv_main'
  const token = store.state.token
  return axios({
    method: 'post',
    url,
    data,
    headers: {
      'Content-Type': 'application/json',
      'token': token
    }
  })
}
