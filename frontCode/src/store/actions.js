const actions = {
  // 獲取 token
  get_token({ commit }, data) {
    commit('SET_TOKEN', data)
  },
  // 獲取用戶名
  get_username({ commit }, data) {
    commit('SET_USERNAME', data)
  },
  // 獲取用戶信息
  get_userInfo({ commit }, data) {
    commit('SET_USERINFO', data)
  },
  // 獲取頭像地址
  get_porImgUrl({commit}, data) {
    commit('SET_PORIMGURL', data)
  }
}
export default actions