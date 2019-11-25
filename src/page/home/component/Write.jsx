import React,{ PureComponent }from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'

class Write extends PureComponent{
    render(){
        if(this.props.user && this.props.pwd){
            return (
               <div>
                    写文章
               </div>
            )
        }else{
            return <Redirect to='/login'/>
        }
    }
}

export default connect(
    state=>({
        user:state.getIn(['LoginReducer','user']),
        pwd:state.getIn(['LoginReducer','pwd']),
    }),
    null
)(Write)