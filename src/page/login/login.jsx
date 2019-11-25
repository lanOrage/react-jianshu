import React,{PureComponent}from 'react'
import {Link} from 'react-router-dom'

import {LoginWrapper,LoginChunk,Input,Button} from './style'
import { connect } from 'react-redux'
import {handleLogin} from './store/actions'

class Login extends PureComponent{
    constructor(props){
        super(props)
        this.user=React.createRef()
        this.pwd=React.createRef()
    }
    render(){
        return (
            <LoginWrapper>
                <LoginChunk>
                    <h2>登&nbsp;&nbsp;录</h2>
                    <p>用户名：</p>
                    <Input ref={this.user} placeholder="请输入用户名"/>
                    <br/>
                    <p>密码：</p>
                    <Input ref={this.pwd} placeholder="请输入密码" type="password"/>
                    <Button as={Link} to='/' onClick={()=>this.checkLogin(this.user.current.value,this.pwd.current.value)}>登&nbsp;&nbsp;录</Button>
                </LoginChunk>
            </LoginWrapper>
        )
    }
    checkLogin=(user,pwd)=>{
        this.props.handleLogin({user,pwd})
    }
}


export default connect(
    null,
    {handleLogin}
)(Login)