import * as types from './action-types'
import axios from 'axios'


const showArticleList = (articleList)=>({type:types.SETARTICLELIST,data:articleList})

export const getArticleList=(id)=>{
    return async dispatch=>{
        // 发送ajax请求，获取数据
        const response = await axios.get('http://localhost:3000/data?id='+id)
        const articleList=response.data.articleList
        console.log(articleList)

        dispatch(showArticleList(articleList))
    }
}

const showTopicList = (topicList)=>({type:types.TOPICLIST,data:topicList})

export const getTopicList=()=>{
    return async dispatch=>{
        // 发送ajax请求，获取数据
        const response = await axios.get('http://localhost:3000/data')
        const data=response.data
        let topicList=data.topicList
        dispatch(showTopicList(topicList))
    }
}

const showMoreList = (moreList,listPage)=>({type:types.MORELIST,data:moreList,listPage})

export const getMoreList = (listPage)=>{
    return async dispatch=>{
        const response=await axios.get(`/api/homeList.json?listPage=${listPage+1}`)
        const moreList=response.data.data
        console.log(moreList)
        dispatch(showMoreList(moreList,listPage+1))//基于后端的分页，即后端分好页之后，前端直接通过页码获取对应数据
    }
}

export const changeAuthor = ()=>({
    type:types.CHANGEAUTHOR
})