// 存储数据的方法
export const setItem = (key, value) => {
  // 判断传过来的数据类型
  if (typeof value === 'object') {
    // 转换数据
    value = JSON.stringify(value)
  }
  // 其他数据类型
  window.localStorage.setItem(key, value)
}

// 获取数据的方法
export const getItem = (key) => {
  const data = window.localStorage.getItem(key)
  try {
    // 转换数据成功
    return JSON.parse(data)
  } catch (e) {
    // console.log(e);
    // 转换数据出错,直接返回数据
    return data
  }
}

// 删除数据的方法
export const removeItem = (key) => {
  window.localStorage.removeItem(key)
}
