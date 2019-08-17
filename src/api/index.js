// 配置API接口地址
var root;
//var root = 'http://localhost/'
process.env.NODE_ENV === 'development' ? root = 'http://localhost/' : root = 'http://www.blanc.moe'
// 引用axios
var axios = require('axios')
function apiAxios (method, url, params, success) {
  //console.log(method, url, params, success)
  if(params){
    if(window.localStorage.data){
      params = {"condition":params,userCode:window.localStorage.data}
    }else{
      params = {"condition":params}
    }
    //console.log(JSON.stringify(params))
  }
  axios({
    method: method,
    url: url,
    dataType: 'JSON',
    //data: method === 'POST' || method === 'PUT' ? params : null,
    //params: method === 'GET' || method === 'DELETE' ? params : null,
    data:params,
    //params:params,
    baseURL: root,
  })
    .then(function (res) {
         success(res.data)
    })
    .catch(function (error) {
      let res = error
      if (error) {
        console.error('api error, HTTP CODE: ' + res)
      }
    })
}
// 返回在vue模板中的调用接口
export default {
  get: function (url, params, success) {
    return apiAxios('GET', url, params, success)
  },
  post: function (url, params, success) {
    return apiAxios('POST', url, params, success)
  },
  // put: function (url, params, success) {
  //   return apiAxios('PUT', url, params, success)
  // },
  // delete: function (url, params, success) {
  //   return apiAxios('DELETE', url, params, success)
  // }
}
