import {combineReducers} from 'redux-immutable'
import {HeaderReducer} from '../common/header/store'//直接到index.js文件下取
import {HomeReducer} from '../page/home/store/reducer'//直接取reducer.js下的reducer

export default combineReducers({
    HeaderReducer,
    HomeReducer
})