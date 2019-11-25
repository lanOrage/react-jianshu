import * as loginStatus from './action-types'
import { fromJS } from 'immutable'

const defaultState=fromJS({
    user:"",
    pwd:""
})

export const LoginReducer=(state=defaultState,action)=>{
    switch(action.type){
        case loginStatus.LOGIN:
            return state.merge({
                "user":action.data.user,
                "pwd":action.data.pwd
            })
        case loginStatus.LOGOUT:
            return state.set("user","").set("pwd","")
        default:
            return state
    }
}

