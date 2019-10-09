// import axios from 'axios'
import qs from 'qs'
import $url from '@/config'

let apiUrl = $url.TEST_URL // 接口基础地址
if (process.env.NODE_ENV === 'production') {
  if (process.env.BUILD_ENV === 't') {
    apiUrl = $url.TEST_URL
  } else {
    apiUrl = $url.PROD_URL
  }
}

class API {
  // get
  get(msg) {
    msg.type = 'GET'
    return new Promise((resolve, reject) => {
      this.http(msg).then(res => {
        resolve(res.data)
      }).catch(error => {
        reject(error)
      })
    })
  }

  post(msg) {
    msg.type = 'POST'
    return new Promise((resolve, reject) => {
      this.http(msg).then(res => {
        resolve(res.data)
      }).catch(error => {
        reject(error)
      })
    })
  }

  putB(msg) {
    msg.type = 'PUT'
    return new Promise((resolve, reject) => {
      this.http(msg).then(res => {
        resolve(res.data)
      }).catch(error => {
        reject(error)
      })
    })
  }
  http(msg) {
    let _headers = {
      'Content-Type': 'application/json;charset=UTF-8',
      'Accept': 'application/json; charset=utf-8'

    }
    Object.assign(_headers, msg.headers)
    let baseURL = msg.baseUrl || apiUrl
    return axios({
      method: msg.type,
      baseURL: baseURL,
      url: msg.url,
      params: msg.type === 'GET' || msg.type === 'DELETE' ? msg.params : null,
      data: msg.type !== 'GET' && msg.type !== 'DELETE' ? msg.params : null,
      timeout: 600000,
      headers: _headers
    })
  };
}

const api = new API()
export default api
