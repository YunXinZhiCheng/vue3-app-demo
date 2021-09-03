// 导入axios
import axios from 'axios'

// 创建axios实例
const request = axios.create({
  baseURL: 'http://localhost:3005',

  // 请求拦截器
  // 响应拦截器
})

// 导出axios实例
export default request
