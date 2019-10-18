
const state = {
  username: '',
  token: JSON.parse(sessionStorage.getItem('token')),
  userInfo: JSON.parse(sessionStorage.getItem('userInfo')),
  porImgUrl: JSON.parse(sessionStorage.getItem('porImgUrl')),
}
export default state
