import React,{Component} from 'react'

export default class ErrorBoundary extends Component{
    // 错误边界是一种 React 组件，
    // 这种组件可以捕获并打印发生在其子组件树任何位置的 JavaScript 错误，
    // 并且它会渲染出备用 UI，而不是渲染那些崩溃了的子组件树。
    /*
    如果一个 class 组件中定义了 static getDerivedStateFromError() 或 componentDidCatch() 
    这两个生命周期方法中的任意一个（或两个）时，那么它就变成一个错误边界。
    */ 
    state={
        hasError:false
    }
    static getDerivedStateFromError(error) {
        // 更新 state 使下一次渲染能够显示降级后的 UI
        return { hasError: true };
    }
    render(){
        if (this.state.hasError) {
            // 你可以自定义降级后的 UI 并渲染
            return <h1>啊偶~出错啦...</h1>;
          }
        return this.props.children; 
    }
}