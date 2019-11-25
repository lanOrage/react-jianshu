import React,{Suspense} from 'react'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Header from './common/header/header'
import {GlobalStyle} from './style';
import {IconFontStyle} from './static/iconfont/iconfont'
import {Provider} from 'react-redux'
import store from './redux/store'

import ErrorBoundary from './common/ErrorBoundary '
import Home from './page/home/home'
// import LoadableDetail from './page/detail/loadable'
import Login from './page/login/login'
import Write from './page/home/component/Write'

const LoadableDetail = React.lazy(()=>import('./page/detail/detail'))

export default class App extends React.Component{
 render(){
    return (
      <Provider store={store}>
        <GlobalStyle/>
        <IconFontStyle/>
        
        {/* 简书body */}
        <BrowserRouter>
              <ErrorBoundary>
                {/* 简书header */}
                <Header/>
                <Suspense fallback={<div>正在加载中...</div>}>
                  <Switch>
                    <Route path="/" exact component={Home}></Route>
                    <Route path="/login" component={Login}></Route>
                    <Route path="/write" component={Write}></Route>
                      <Route path="/detail/:id" component={LoadableDetail}></Route>
                  </Switch>
                </Suspense>
              </ErrorBoundary>      
        </BrowserRouter>
      </Provider>
    );
 }
}
