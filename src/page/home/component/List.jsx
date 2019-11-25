import React,{PureComponent}from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import {ListItem,ListItemHeader,ListItemArticle,ListItemFun,ListMore} from '../style'
import {getArticleList,getMoreList} from '../store/actions'
// import logo from '../img/logo.png'  这种方法也可以不过固定一张照片罢了
class List extends PureComponent{
    componentDidMount(){
        this.props.getArticleList()
    }
    render(){
        return (
            <>
            {
                    this.props.articleList.map((item,index)=>{
                        let title=item.get('title')
                        let content=item.get('content')
                        // let id=item.get('id')
                        let author=item.get('author')
                        let imgUrl=item.get('imgUrl')//这里我把require('../img/logo.png')改成了'./img/logo.png'才能获取，资源在public下
                        return (
                            <Link key={-index} to={'/detail/'+(index+1)}>
                                <ListItem>
                                    <ListItemHeader>{title}</ListItemHeader>
                                    <img src={imgUrl} alt="list-img" className="list-img"/>
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
                            </Link>
                        )
                    })
            }
            <ListMore onClick={
                ()=>{
                    const {listPage,getMoreList}=this.props//取出的是当前已经获取到的页码
                    return getMoreList(listPage)
                }}
            >
            阅读更多
            </ListMore>
            </>
        )
    }
}


export default connect(
    state=>({
        articleList:state.getIn(['HomeReducer','articleList']),
        listPage:state.getIn(['HomeReducer','listPage'])
    }),
    {getArticleList,getMoreList}
)(List)