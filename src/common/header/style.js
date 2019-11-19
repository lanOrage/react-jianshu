import styled from 'styled-components'
import logo from '../../static/img/logo.png'

export const HeaderWrapper = styled.div`
/* 创建带有样式的div组件名字叫HeaderWrapper */
    height:58px;
    border-bottom:1px solid #f0f0f0;
    position:relative;
`;

export const Logo = styled.a.attrs({
    href:'/'
})`
    width:100px;
    height:58px;
    display:inline-block;
    position:absolute;
    top:0;
    left:0;
    background:url(${logo});
    background-size:contain;
`;

export const Nav=styled.div`
    width:75%;
    padding-right:60px;
    box-sizing:border-box;
    height:58px;
    margin:0 auto;
`;

export const NavItem=styled.div`
    width:100px;
    float:left;
    line-height:58px;
    font-size:16px;
    text-align:center;
    &.right{
        float:right;
        color:#969696;
    }
    &.active{
        color:#ea6f5a;
    }
`;

export const NavSearch=styled.input.attrs({
    placeholder:"请输入..."
})`
    &.slide-enter{
        transition:all 0.3s linear;
    }
    &.slide-enter-active{
        width:250px;
    }
    &.slide-exit{
        transition:all 0.3s linear;
    }
    &.slide-exit-active{
        width:160px;
    }
    width:160px;
    height:38px;
    box-sizing:border-box;
    font-size:14px;
    border:none;
    outline:none;
    border-radius:20px;
    margin:10px 0;
    padding:0 35px 0 20px;
    background-color:#eee;
    color:#777;
    &::placeholder{
        color: #777;
    }
    &.focused{
        width:250px;
    }
`;

export const Search=styled.div`
    float:left;
    position:relative;
    .iconfont{
        position:absolute;
        width:30px;
        height:30px;
        color:#969696;
        border-radius:50%;
        text-align:center;
        line-height:30px;
        right:5px;
        bottom:14px;
        &.focused{
            color:#fff;
            background:rgba(0,0,0,0.45);
        }   
    }
    
`;
// SearchInfo,SearchTittle,SearchSwitch,SearchItem
export const SearchInfo=styled.div`
    width:250px;
    position:absolute;
    left:0;
    top:59px;
    padding:10px;
    box-shadow:0 0 8px rgba(0, 0, 0, .2);
    background:#fff;
    visibility: hidden;
    &.show{
        visibility:visible;
    }
    &::before{
        position:absolute;
        top:-20px;
        left:30px;
        content:"";
        display:inline-block;
        border-bottom:10px solid #fff;
        border-top:10px solid transparent;
        border-right:10px solid transparent;
        border-left:10px solid transparent;
    }
`;

export const SearchTittle=styled.div`
    margin-bottom:15px;
    line-height:20px;
    font-size:14px;
    color: #969696;
`;
export const SearchSwitch=styled.div`
    position:relative;
    margin-bottom:15px;
    line-height:20px;
    font-size:13px;
    color: #969696;
    float:right;
    cursor:pointer;
    .iconfont{
        position:absolute;
        top:-4px;
        right:35px;
        transition:all 0.3s ease-in;
        transform-origin:center center;
    }
`;
export const SearchItem=styled.a`
    float:left;
    padding:3px;
    border:1px solid #ddd;
    border-radius:2px;
    color: #333;
    margin:5px 5px;
`;

export const SearchInfoList=styled.div`
    display:inline-block;
    font-size:10px;
    overflow:hidden;
`;

export const Addition=styled.div`
    position:absolute;
    top:0;
    right:0;
    height:58px;
`;

export const Button=styled.div`
    width:100px;
    height:38px;
    line-height:38px;
    border-radius:20px;
    text-align:center;
    margin-top:9px;
    border:1px solid #ec6149;
    outline:none;
    float:right;
    margin-right:20px;
    &.register{
        color: #ea6f5a;
    }
    &.writing{
        background:#ec6149;
        color: #fff;
    }
`;