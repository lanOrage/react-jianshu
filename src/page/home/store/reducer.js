import { fromJS } from 'immutable'
import * as types from './action-types'

const authorList=[
    {'author':'evan1'},
    {'author':'evan2'},
    {'author':'evan3'},
    {'author':'evan4'},
    {'author':'evan5'},
    {'author':'evan6'},
    {'author':'evan7'},
    {'author':'evan8'},
    {'author':'evan9'},
    {'author':'evan10'},
]
const defaultState = fromJS({
    topicList:[],
    articleList:[],
    listPage:0,
    authorList,//作者
    currentPage:1,//同样控制 换一批
    totalPage:Math.ceil(authorList.length/4),
})
export const HomeReducer=(state=defaultState,action)=>{
    switch(action.type){
        case types.SETARTICLELIST:
            return state.set('articleList',fromJS(action.data))
        case types.TOPICLIST:
            return state.set('topicList',fromJS(action.data))
        case types.MORELIST:
            return state.merge({
                'articleList':state.get('articleList').concat(fromJS(action.data)),
                'listPage':fromJS(action.listPage)
            })
        case types.CHANGEAUTHOR:
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