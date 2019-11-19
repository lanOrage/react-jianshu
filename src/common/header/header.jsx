import React,{ Component } from 'react'
import {connect} from 'react-redux'
import { CSSTransition } from 'react-transition-group'
import { HeaderAction } from './store'
import {
        HeaderWrapper,Logo,Nav,NavItem,Search,NavSearch,Addition,Button
        ,SearchInfo,SearchTittle,SearchSwitch,SearchItem,SearchInfoList
} from './style'

class Header extends Component{
    constructor(props){
        super(props)
        this.changeIcon= React.createRef();
        this.step=1
    }
    handleMouseEnter=()=>{
        this.props.mouseEnter()
    }
    handleMouseLeave=()=>{
        this.props.mouseLeave()
    }
    handleClick=()=>{
        this.props.nextPage()
        const node=this.changeIcon.current
        let originAngle = node.style.transform.replace(/^([0-9]+)deg$/)
        if(!originAngle){
            originAngle='rotate(0deg)'
        }
        const deg=/([0-9]+)deg/.exec(originAngle)
        console.log(deg[1])
        // 这个是旋转来旋转去的样子
        // if(deg[1].includes('360')){
        //     this.changeIcon.current.style.transform='rotate(0deg)'
        // }else{
        //     this.changeIcon.current.style.transform='rotate(360deg)'
        // }
        this.changeIcon.current.style.transform=`rotate(${360*(this.step++)}deg)`

    }
    handleFocus=()=>{
        this.props.focusedSearch()
        this.props.searchList.size===0 && this.props.getSearchList()//所以这里使用.length得不到数组大小
        // 补充：
        // Immutable中List: 有序索引集，类似JavaScript中的Array。长度要用size获取
    }
    render(){
        return (
            <HeaderWrapper>
                <Logo/>
                <Nav>
                    <NavItem className='active'>首页</NavItem>
                    <NavItem>下载APP</NavItem>
                    <NavItem className='right'>登录</NavItem>
                    <NavItem className='right'>
                        <span className="iconfont" style={{fontSize:25}}>&#xe636;</span>
                    </NavItem>
                    
                    <Search>
                            <CSSTransition
                                in={this.props.focused}
                                timeout={300}
                                classNames='slide'
                            >{/* 动画加在input框身上 */}
                                <NavSearch className={this.props.focused? 'focused':null}
                                    onFocus={this.handleFocus}
                                    onBlur={this.props.blurSearch}
                                />
                            </CSSTransition>
                            <span className={this.props.focused? 'iconfont focused':'iconfont'} style={{fontSize:20}}>&#xe637;</span>    
                            <SearchInfo 
                                className={this.props.focused||this.props.mouseIn?'show':'hidden'}
                                onMouseEnter={this.handleMouseEnter}
                                onMouseLeave={this.handleMouseLeave}
                            >
                                <SearchTittle>
                                    热门搜索
                                    <SearchSwitch onClick={this.handleClick}>
                                        <span ref={this.changeIcon} className="iconfont" style={{fontSize:13}}>&#xe6ad;</span>
                                        换一批
                                    </SearchSwitch>
                                        
                                </SearchTittle>
                                <SearchInfoList>
                                    {
                                        this.props.searchList.map((item,index)=>{
                                            if((1+Math.floor(index/9))===this.props.currentPage){
                                                return <SearchItem key={item}>{item}</SearchItem>
                                            }
                                            return null
                                        })
                                    }
                                </SearchInfoList>
                            </SearchInfo>
                    </Search>
                    
                    <Addition>
                        <Button className='writing'>
                            <span className="iconfont">&#xe60e;</span>
                            &nbsp;写文章
                        </Button>
                        <Button className='register'>注册</Button>
                    </Addition>
                </Nav>
            </HeaderWrapper>
        )
    }
}
const {focusedSearch,blurSearch,getSearchList,mouseEnter,mouseLeave,nextPage}=HeaderAction
export default connect(
    state =>({
        focused:state.get('HeaderReducer').get('focused'),
        searchList:state.get('HeaderReducer').get('searchList'),
        currentPage:state.get('HeaderReducer').get('currentPage'),
        mouseIn:state.get('HeaderReducer').get('mouseIn'),
        totalPage:state.get('HeaderReducer').get('totalPage'),
    }),
    {focusedSearch,blurSearch,getSearchList,mouseEnter,mouseLeave,nextPage}
)(Header)
