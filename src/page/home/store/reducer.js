import { fromJS } from 'immutable'

const defaultState = fromJS({
    topicList:[
        {id:1,imgUrl:require("../img/logo.png"),text:"文字"},
        {id:2,imgUrl:require("../img/logo.png"),text:"文字"},
        {id:3,imgUrl:require("../img/logo.png"),text:"文字"},
        {id:4,imgUrl:require("../img/logo.png"),text:"文字"},
        {id:5,imgUrl:require("../img/logo.png"),text:"文字"},
        {id:6,imgUrl:require("../img/logo.png"),text:"文字"},
        {id:7,imgUrl:require("../img/logo.png"),text:"文字"},
        {id:8,imgUrl:require("../img/logo.png"),text:"文字"},
        {id:9,imgUrl:require("../img/logo.png"),text:"文字"},
        {id:10,imgUrl:require("../img/logo.png"),text:"文字"},
        {id:11,imgUrl:require("../img/logo.png"),text:"文字"},
        {id:12,imgUrl:require("../img/logo.png"),text:"文字"},
        {id:13,imgUrl:require("../img/logo.png"),text:"文字"},
        {id:14,imgUrl:require("../img/logo.png"),text:"文字"},
        {id:15,imgUrl:require("../img/logo.png"),text:"文字"},

    ],
    articleList:[
        {id:1,author:"兰锦敏",imgUrl:require("../img/logo.png"),content:"再也不用担心电脑内存不够用了，这些网站功能逆天到可以代替软件！都是亲朋好友介绍和自己辛苦找来的，希望能帮到大家工作和生活，有更好的请在评论区也给...",title:"推荐8个超强大工具网站，可以代替你电脑中所有软件"},
        {id:2,author:"兰锦敏",imgUrl:require("../img/logo.png"),content:"再也不用担心电脑内存不够用了，这些网站功能逆天到可以代替软件！都是亲朋好友介绍和自己辛苦找来的，希望能帮到大家工作和生活，有更好的请在评论区也给...",title:"推荐8个超强大工具网站，可以代替你电脑中所有软件"},
        {id:3,author:"兰锦敏",imgUrl:require("../img/logo.png"),content:"再也不用担心电脑内存不够用了，这些网站功能逆天到可以代替软件！都是亲朋好友介绍和自己辛苦找来的，希望能帮到大家工作和生活，有更好的请在评论区也给...",title:"推荐8个超强大工具网站，可以代替你电脑中所有软件"},
        {id:4,author:"兰锦敏",imgUrl:require("../img/logo.png"),content:"再也不用担心电脑内存不够用了，这些网站功能逆天到可以代替软件！都是亲朋好友介绍和自己辛苦找来的，希望能帮到大家工作和生活，有更好的请在评论区也给...",title:"推荐8个超强大工具网站，可以代替你电脑中所有软件"},
        {id:5,author:"兰锦敏",imgUrl:require("../img/logo.png"),content:"再也不用担心电脑内存不够用了，这些网站功能逆天到可以代替软件！都是亲朋好友介绍和自己辛苦找来的，希望能帮到大家工作和生活，有更好的请在评论区也给...",title:"推荐8个超强大工具网站，可以代替你电脑中所有软件"},
        {id:6,author:"兰锦敏",imgUrl:require("../img/logo.png"),content:"再也不用担心电脑内存不够用了，这些网站功能逆天到可以代替软件！都是亲朋好友介绍和自己辛苦找来的，希望能帮到大家工作和生活，有更好的请在评论区也给...",title:"推荐8个超强大工具网站，可以代替你电脑中所有软件"},
        {id:7,author:"兰锦敏",imgUrl:require("../img/logo.png"),content:"再也不用担心电脑内存不够用了，这些网站功能逆天到可以代替软件！都是亲朋好友介绍和自己辛苦找来的，希望能帮到大家工作和生活，有更好的请在评论区也给...",title:"推荐8个超强大工具网站，可以代替你电脑中所有软件"},
        {id:8,author:"兰锦敏",imgUrl:require("../img/logo.png"),content:"再也不用担心电脑内存不够用了，这些网站功能逆天到可以代替软件！都是亲朋好友介绍和自己辛苦找来的，希望能帮到大家工作和生活，有更好的请在评论区也给...",title:"推荐8个超强大工具网站，可以代替你电脑中所有软件"},
        {id:9,author:"兰锦敏",imgUrl:require("../img/logo.png"),content:"再也不用担心电脑内存不够用了，这些网站功能逆天到可以代替软件！都是亲朋好友介绍和自己辛苦找来的，希望能帮到大家工作和生活，有更好的请在评论区也给...",title:"推荐8个超强大工具网站，可以代替你电脑中所有软件"},
        {id:10,author:"兰锦敏",imgUrl:require("../img/logo.png"),content:"再也不用担心电脑内存不够用了，这些网站功能逆天到可以代替软件！都是亲朋好友介绍和自己辛苦找来的，希望能帮到大家工作和生活，有更好的请在评论区也给...",title:"推荐8个超强大工具网站，可以代替你电脑中所有软件"},
        {id:11,author:"兰锦敏",imgUrl:require("../img/logo.png"),content:"再也不用担心电脑内存不够用了，这些网站功能逆天到可以代替软件！都是亲朋好友介绍和自己辛苦找来的，希望能帮到大家工作和生活，有更好的请在评论区也给...",title:"推荐8个超强大工具网站，可以代替你电脑中所有软件"},
        {id:12,author:"兰锦敏",imgUrl:require("../img/logo.png"),content:"再也不用担心电脑内存不够用了，这些网站功能逆天到可以代替软件！都是亲朋好友介绍和自己辛苦找来的，希望能帮到大家工作和生活，有更好的请在评论区也给...",title:"推荐8个超强大工具网站，可以代替你电脑中所有软件"},
        {id:13,author:"兰锦敏",imgUrl:require("../img/logo.png"),content:"再也不用担心电脑内存不够用了，这些网站功能逆天到可以代替软件！都是亲朋好友介绍和自己辛苦找来的，希望能帮到大家工作和生活，有更好的请在评论区也给...",title:"推荐8个超强大工具网站，可以代替你电脑中所有软件"},
        {id:14,author:"兰锦敏",imgUrl:require("../img/logo.png"),content:"再也不用担心电脑内存不够用了，这些网站功能逆天到可以代替软件！都是亲朋好友介绍和自己辛苦找来的，希望能帮到大家工作和生活，有更好的请在评论区也给...",title:"推荐8个超强大工具网站，可以代替你电脑中所有软件"},
        {id:15,author:"兰锦敏",imgUrl:require("../img/logo.png"),content:"再也不用担心电脑内存不够用了，这些网站功能逆天到可以代替软件！都是亲朋好友介绍和自己辛苦找来的，希望能帮到大家工作和生活，有更好的请在评论区也给...",title:"推荐8个超强大工具网站，可以代替你电脑中所有软件"},
        {id:16,author:"兰锦敏",imgUrl:require("../img/logo.png"),content:"再也不用担心电脑内存不够用了，这些网站功能逆天到可以代替软件！都是亲朋好友介绍和自己辛苦找来的，希望能帮到大家工作和生活，有更好的请在评论区也给...",title:"推荐8个超强大工具网站，可以代替你电脑中所有软件"},
        {id:17,author:"兰锦敏",imgUrl:require("../img/logo.png"),content:"再也不用担心电脑内存不够用了，这些网站功能逆天到可以代替软件！都是亲朋好友介绍和自己辛苦找来的，希望能帮到大家工作和生活，有更好的请在评论区也给...",title:"推荐8个超强大工具网站，可以代替你电脑中所有软件"},
        {id:18,author:"兰锦敏",imgUrl:require("../img/logo.png"),content:"再也不用担心电脑内存不够用了，这些网站功能逆天到可以代替软件！都是亲朋好友介绍和自己辛苦找来的，希望能帮到大家工作和生活，有更好的请在评论区也给...",title:"推荐8个超强大工具网站，可以代替你电脑中所有软件"},
        {id:19,author:"兰锦敏",imgUrl:require("../img/logo.png"),content:"再也不用担心电脑内存不够用了，这些网站功能逆天到可以代替软件！都是亲朋好友介绍和自己辛苦找来的，希望能帮到大家工作和生活，有更好的请在评论区也给...",title:"推荐8个超强大工具网站，可以代替你电脑中所有软件"},
        {id:20,author:"兰锦敏",imgUrl:require("../img/logo.png"),content:"再也不用担心电脑内存不够用了，这些网站功能逆天到可以代替软件！都是亲朋好友介绍和自己辛苦找来的，希望能帮到大家工作和生活，有更好的请在评论区也给...",title:"推荐8个超强大工具网站，可以代替你电脑中所有软件"},
        {id:21,author:"兰锦敏",imgUrl:require("../img/logo.png"),content:"再也不用担心电脑内存不够用了，这些网站功能逆天到可以代替软件！都是亲朋好友介绍和自己辛苦找来的，希望能帮到大家工作和生活，有更好的请在评论区也给...",title:"推荐8个超强大工具网站，可以代替你电脑中所有软件"},
        {id:22,author:"兰锦敏",imgUrl:require("../img/logo.png"),content:"再也不用担心电脑内存不够用了，这些网站功能逆天到可以代替软件！都是亲朋好友介绍和自己辛苦找来的，希望能帮到大家工作和生活，有更好的请在评论区也给...",title:"推荐8个超强大工具网站，可以代替你电脑中所有软件"},
        {id:23,author:"兰锦敏",imgUrl:require("../img/logo.png"),content:"再也不用担心电脑内存不够用了，这些网站功能逆天到可以代替软件！都是亲朋好友介绍和自己辛苦找来的，希望能帮到大家工作和生活，有更好的请在评论区也给...",title:"推荐8个超强大工具网站，可以代替你电脑中所有软件"},
        {id:24,author:"兰锦敏",imgUrl:require("../img/logo.png"),content:"再也不用担心电脑内存不够用了，这些网站功能逆天到可以代替软件！都是亲朋好友介绍和自己辛苦找来的，希望能帮到大家工作和生活，有更好的请在评论区也给...",title:"推荐8个超强大工具网站，可以代替你电脑中所有软件"},
        {id:25,author:"兰锦敏",imgUrl:require("../img/logo.png"),content:"再也不用担心电脑内存不够用了，这些网站功能逆天到可以代替软件！都是亲朋好友介绍和自己辛苦找来的，希望能帮到大家工作和生活，有更好的请在评论区也给...",title:"推荐8个超强大工具网站，可以代替你电脑中所有软件"},
        {id:26,author:"兰锦敏",imgUrl:require("../img/logo.png"),content:"再也不用担心电脑内存不够用了，这些网站功能逆天到可以代替软件！都是亲朋好友介绍和自己辛苦找来的，希望能帮到大家工作和生活，有更好的请在评论区也给...",title:"推荐8个超强大工具网站，可以代替你电脑中所有软件"},
        {id:27,author:"兰锦敏",imgUrl:require("../img/logo.png"),content:"再也不用担心电脑内存不够用了，这些网站功能逆天到可以代替软件！都是亲朋好友介绍和自己辛苦找来的，希望能帮到大家工作和生活，有更好的请在评论区也给...",title:"推荐8个超强大工具网站，可以代替你电脑中所有软件"},
        {id:28,author:"兰锦敏",imgUrl:require("../img/logo.png"),content:"再也不用担心电脑内存不够用了，这些网站功能逆天到可以代替软件！都是亲朋好友介绍和自己辛苦找来的，希望能帮到大家工作和生活，有更好的请在评论区也给...",title:"推荐8个超强大工具网站，可以代替你电脑中所有软件"},
        {id:29,author:"兰锦敏",imgUrl:require("../img/logo.png"),content:"再也不用担心电脑内存不够用了，这些网站功能逆天到可以代替软件！都是亲朋好友介绍和自己辛苦找来的，希望能帮到大家工作和生活，有更好的请在评论区也给...",title:"推荐8个超强大工具网站，可以代替你电脑中所有软件"},
        {id:30,author:"兰锦敏",imgUrl:require("../img/logo.png"),content:"再也不用担心电脑内存不够用了，这些网站功能逆天到可以代替软件！都是亲朋好友介绍和自己辛苦找来的，希望能帮到大家工作和生活，有更好的请在评论区也给...",title:"推荐8个超强大工具网站，可以代替你电脑中所有软件"},

    ]
})
export const HomeReducer=(state=defaultState,action)=>{
    switch(action.type){
        
        default:
            return state
    }
}