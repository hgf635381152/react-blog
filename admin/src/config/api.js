let ipUrl = 'http://localhost:7001/admin/'

let servicePath = {
  checkLogin: ipUrl + 'checkLogin',  // 检查用户名密码
  getTypeInfo: ipUrl + 'getTypeInfo' // 获得文章类别信息
}

export default servicePath