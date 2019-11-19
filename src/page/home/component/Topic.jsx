import React,{Component}from 'react'
import {connect} from 'react-redux'
import {TopicWrapper,TopicItem} from '../style'
class Topic extends Component{
    render(){
        return (
            <TopicWrapper>
                {
                    this.props.topicList.map((item)=>{
                        // const {imgUrl,text,id}=item不能解构!!是mmutable对象数组
                        let imgUrl=item.get('imgUrl')
                        let text=item.get('text')
                        let id=item.get('id')
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
    null
)(Topic)