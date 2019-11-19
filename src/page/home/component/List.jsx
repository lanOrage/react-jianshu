import React,{Component}from 'react'
import {connect} from 'react-redux'

import {ListItem,ListItemHeader,ListItemArticle,ListItemFun} from '../style'

class List extends Component{
    render(){
        return (
            <>
            {
                    this.props.articleList.map((item)=>{
                        let title=item.get('title')
                        let content=item.get('content')
                        let id=item.get('id')
                        let img=item.get('imgUrl')
                        let author=item.get('author')
                        return (
                            <ListItem key={id}>
                                <ListItemHeader>{title}</ListItemHeader>
                                <img src={img} alt="list-img" className="list-img"/>
                                <ListItemArticle>
                                    <p>{content}</p>
                                </ListItemArticle>
                                <ListItemFun>
                                    <span className="iconfont" style={{fontSize:16}}>&#xe64a;</span>4.12
                                    <span>{author}</span>
                                    <span className="iconfont" style={{fontSize:16}}>&#xe604;</span>评论
                                    <span className="iconfont" style={{fontSize:16}}>&#xe65b;</span>824
                                </ListItemFun>
                            </ListItem>
                        )
                    })
            }
            </>
        )
    }
}


export default connect(
    state=>({
        // articleList:state.get('HomeReducer').get('articleList')
        articleList:state.getIn(['HomeReducer','articleList'])
    }),
    null
)(List)