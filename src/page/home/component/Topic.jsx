import React,{PureComponent}from 'react'
import {connect} from 'react-redux'
import {TopicWrapper,TopicItem} from '../style'
import {getTopicList} from '../store/actions'
// import logo from '../img/logo.png'

class Topic extends PureComponent{
    componentDidMount(){
        this.props.getTopicList()
    }
    render(){
        return (
            <TopicWrapper>
                {
                    this.props.topicList.map((item)=>{
                        // const {imgUrl,text,id}=item不能解构!!是mmutable对象数组
                        let text=item.get('text')
                        let id=item.get('id')
                        let imgUrl=item.get('imgUrl')//这里我把require('../img/logo.png')改成了'./img/logo.png'才能获取，资源在public下
                        return (
                        <TopicItem key={id}>
                            <img src={imgUrl} alt={text} className="topic-img"/>
                            {text}
                        </TopicItem>
                        )
                    })
                }
                <a href="www.baidu.com" className="topic-a">更多热门专题 ></a>
            </TopicWrapper>
        )
    }
}

export default connect(
    state=>({
        topicList:state.get('HomeReducer').get('topicList')
    }),
    {getTopicList}
)(Topic)