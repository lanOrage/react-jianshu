import React,{Component}from 'react'
import List from './component/List'
import Recommend from './component/Recommend'
import Topic from './component/Topic'
import Writer from './component/Writer'


import {HomeWrapper,HomeLeft,HomeRight} from './style'
import banner from './img/logo.png'

export default class Home extends Component{
    render(){
        return (
            <>
                <HomeWrapper>
                    <HomeLeft>
                        <img src={banner} alt="banner-img" className="banner-img"/>
                        <Topic></Topic>
                        <List></List>
                    </HomeLeft>
                    <HomeRight>
                        <Recommend></Recommend>
                        <Writer></Writer>
                    </HomeRight>
                </HomeWrapper>
                <footer style={footer}>
                    <span>关于简书 · 联系我们 · 加入我们 · 简书出版 · 品牌与徽标 · 帮助中心 · 合作伙伴</span>
                    <p>©2012-2019 上海佰集信息科技有限公司 / 简书 / 沪ICP备11018329号-5 / Smrz 沪公网安备31010402002252号 /</p>
                    <p>简书网举报电话：021-34770013 / 亲爱的市民朋友，
                    上海警方反诈劝阻电话“962110”系专门针对避免您财产被骗受损而设，请您一旦收到来电，立即接听 /
                    </p>
                </footer>
            </>
        )
    }
}
// style
const footer={
    width:1200,
    margin:'0 auto',
    padding:'35px 0',
    lineHeight:'30px',
    color:'#777',
    fontSize:12
}