import {BLURSEARCH,FOCUSEDSEARCH,SHOWSEARCHLIST,MOUSEENTER,MOUSELEAVE,NEXTPAGE} from './action-types'
import {fromJS} from 'immutable'
import axios from 'axios'

export const focusedSearch = ()=>({type:FOCUSEDSEARCH})
export const blurSearch = ()=>({type:BLURSEARCH})
export const mouseEnter = ()=>({type:MOUSEENTER})
export const mouseLeave = ()=>({type:MOUSELEAVE})
export const nextPage = ()=>({type:NEXTPAGE})
const showSearchList = data=>({
    type:SHOWSEARCHLIST,
    data:fromJS(data),
    totalPage:Math.floor(data.length/9)+1
})

export const getSearchList=()=>{
    return async dispatch=>{
        // 发送ajax请求，获取数据
        const response = await axios.get('http://localhost:3000/data');
        const data=response.data;
        dispatch(showSearchList(data))
    }
}
