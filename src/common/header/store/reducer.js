import { FOCUSEDSEARCH,BLURSEARCH,SHOWSEARCHLIST,MOUSEENTER,MOUSELEAVE,NEXTPAGE } from './action-types'
import { fromJS } from 'immutable'

const defaultState = fromJS({
    focused:false,
    mouseIn:false,
    searchList:[],
    currentPage:1,
    totalPage:1
})
export const HeaderReducer=(state=defaultState,action)=>{
    switch(action.type){
        case FOCUSEDSEARCH:
            return state.set('focused',true)//immutable对象的set方法，会结合之前的immutable对象的值和新设置的值产生一个全新的对象
        case BLURSEARCH:
            return state.set('focused',false)
        case SHOWSEARCHLIST:
            // return state.set('searchList',action.data).set('totalPage',action.totalPage)也可以，就是性能不高
            return state.merge({//合并，不需要多次调用set方法
                searchList:action.data,
                totalPage:action.totalPage
            })
        case MOUSEENTER:
            return state.set('mouseIn',true)
        case MOUSELEAVE:
            return state.set('mouseIn',false)
        case NEXTPAGE:
            let currentPage=state.get('currentPage')
            let totalPage=state.get('totalPage')
            // 换页码即显示下一页内容
            if(++currentPage>totalPage){
                currentPage=1
            }
            return state.set('currentPage',currentPage)
        default:
            return state
    }
}