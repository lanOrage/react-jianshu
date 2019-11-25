import React,{PureComponent}from 'react'
import {WriterWrapper,WriterItem,WriterHeader,WriterMore,WriterIcon,WriterAuthor,WriterFollow} from '../style'
import {connect} from 'react-redux'
import {changeAuthor} from './../store/actions'
import icon from "../img/logo.png"

class Writer extends PureComponent{
    constructor(props){
        super(props)
        this.changeIcon= React.createRef();
    }
    handleClick = ()=>{
        this.props.changeAuthor()
    }
    render(){
        return (
            <WriterWrapper>
                <WriterHeader>
                    <span>推荐作者</span>
                    <span className="writer-change">
                        <span ref={this.changeIcon} 
                              className="iconfont" 
                              style={{fontSize:13}}
                              onClick={this.handleClick}
                        >&#xe6ad;</span>
                        换一批
                    </span>
                </WriterHeader>
                {
                    this.props.authorList.map((item,index)=>{
                        if((Math.floor(index/4)+1)===this.props.currentPage){
                            return (
                                <WriterItem key={-index}>
                                    <WriterIcon>
                                        <img src={icon} alt="icon"/>
                                    </WriterIcon>
                                    <WriterFollow><span>+</span>关注</WriterFollow>
                                    <WriterAuthor>{item.get('author')}</WriterAuthor>
                                    <p>写了1995.8k字 ▪ 24.0k喜欢</p>
                                </WriterItem>
                            )
                        }
                        return null
                    })
                }
                
                {/* <WriterItem>
                    <WriterIcon>
                        <img src={icon} alt="icon"/>
                    </WriterIcon>
                    <WriterFollow><span>+</span>关注</WriterFollow>
                    <WriterAuthor>作者</WriterAuthor>
                    <p>写了1995.8k字 ▪ 24.0k喜欢</p>
                </WriterItem>
                <WriterItem>
                    <WriterIcon>
                        <img src={icon} alt="icon"/>
                    </WriterIcon>
                    <WriterFollow><span>+</span>关注</WriterFollow>
                    <WriterAuthor>作者</WriterAuthor>
                    <p>写了1995.8k字 ▪ 24.0k喜欢</p>
                </WriterItem>
                <WriterItem>
                    <WriterIcon>
                        <img src={icon} alt="icon"/>
                    </WriterIcon>
                    <WriterFollow><span>+</span>关注</WriterFollow>
                    <WriterAuthor>作者</WriterAuthor>
                    <p>写了1995.8k字 ▪ 24.0k喜欢</p>
                </WriterItem> */}
                <WriterMore>
                    查看全部 >
                </WriterMore>
            </WriterWrapper>
        )
    }
}
export default connect(
    state=>({
        authorList:state.getIn(['HomeReducer','authorList']),
        currentPage:state.getIn(['HomeReducer','currentPage']),
        totalPage:state.getIn(['HomeReducer','totalPage'])
    }),
    {changeAuthor}
)(Writer)