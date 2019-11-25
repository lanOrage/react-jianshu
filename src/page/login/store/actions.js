import * as loginStatus from './action-types'

export const handleLogin=(data)=>({type:loginStatus.LOGIN,data})
export const handleLogout=()=>({type:loginStatus.LOGOUT})

// 这里登录本应该发送ajax请求，到后台验证，验证通过了就派发handleLogin这个action执行操作