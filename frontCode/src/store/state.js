
const state = {
  // 用戶名
  username: '',
  // token
  token: JSON.parse(sessionStorage.getItem('token')),
  // 用戶信息
  userInfo: JSON.parse(sessionStorage.getItem('userInfo')),
  // 頭像圖片地址
  porImgUrl: JSON.parse(sessionStorage.getItem('porImgUrl')),
}
export default state
