  import state from '@/store/state'

  // 獲取頭像地址
  export function getPorImg() {
    const param1 = encodeURIComponent(state.userInfo.user_pic_file.file_save_path)
    const param2 = encodeURIComponent(state.userInfo.user_pic_file.file_save_name)
    const param3 = encodeURIComponent(state.userInfo.user_pic_file.file_origin_name)
    const baseUrl = 'http://10.244.186.86:8081/api/pic_show/load'
    const url = baseUrl + '?file_save_path=' + param1 + '&file_save_name=' + param2 + '&file_origin_name=' + param3
    return url
  }

  // 獲取圖檔附件
  export function getAccess(path, name, originName) {
    const param1 = encodeURIComponent(path)
    const param2 = encodeURIComponent(name)
    const param3 = encodeURIComponent(originName)
    const baseUrl = 'http://10.244.186.86:8081/api/pic_show/load'
    const url = baseUrl + '?file_save_path=' + param1 + '&file_save_name=' + param2 + '&file_origin_name=' + param3
    return url
  }