import React from 'react'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Header from './common/header/header'
import {GlobalStyle} from './style';
import {IconFontStyle} from './static/iconfont/iconfont'
import {Provider} from 'react-redux'
import store from './redux/store'

import Home from './page/home/home'
import Detail from './page/detail/detail'

export default class App extends React.Component{
 render(){
    return (
      <Provider store={store}>
        <GlobalStyle/>
        <IconFontStyle/>
        {/* 简书header */}
        <Header/>
        {/* 简书body */}
        <BrowserRouter>
            <Switch>
              <>
              <Route path="/" component={Home}></Route>
              <Route path="/detail" component={Detail}></Route>
              </>
            </Switch>
        </BrowserRouter>
      </Provider>
    );
 }
}
