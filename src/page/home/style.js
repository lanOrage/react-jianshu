import styled from 'styled-components'

// Home组件布局--------------------------------------------
export const HomeWrapper=styled.div`
    width:1200px;
    margin:0 auto;
    overflow:hidden;
`;

export const HomeLeft=styled.div`
    width:725px;
    float:left;
    margin-top:15px;
    padding-top:30px;
    .banner-img{
        width:725px;
        height:370px;
    }
`;

export const HomeRight=styled.div`
    width:300px;
    float:right;
`;

// Topic组件--------------------------------------------
export const TopicWrapper=styled.div`
    overflow:hidden;
    padding:20px 0 10px 0;
    margin-left:-18px;
    border-bottom:1px solid #ccc;
    .topic-a{
        float:left;
        color:rgba(0,0,0,0.5);
        font-size:12px;
        text-decoration:none; 
        line-height:50px;
        margin-left:20px;
    }
`;

export const TopicItem=styled.div`
    float:left;
    height:32px;
    background:#f7f7f7;
    line-height:32px;
    margin-left:18px;
    border:1px solid #dcdcdc;
    border-radius:4px;
    font-size:14px;
    padding-right:10px;
    margin-right:10px;
    margin-bottom:10px;
    .topic-img{
        float:left;
        width:32px;
        height:32px;
        margin-right:10px;
    }
`;
// List组件--------------------------------------------
export const ListItem=styled.div`
    padding: 20px 0;
    border-bottom:1px silid #dcdcdc;
    position: relative;
    overflow:hidden;
    color: #333;
    border-bottom:1px solid #ccc;
    margin-bottom:8px;
    .list-img{
        width:250px;
        height:150px;
        float:right;
        margin-left:8px;
        border-radius:10px;
    }
`;
export const ListItemHeader=styled.a.attrs({
    href:'/'
})`
    width:calc(100% - 260px);
    color: #999;
    font-size:22px;
    text-align:center;
    float:left;
    font-weight:bold;
    color:#333;
    text-decoration:none;
    &:hover{
        text-decoration:underline;
    }
`;
export const ListItemArticle=styled.div`
    width:calc(100% - 260px);
    font-size:15px;
    padding:15px 0;
    line-height:22px;
    font-size:13px;
    color: #333;
    float:left;
`;
export const ListItemFun=styled.div`
    width:calc(100% - 260px);
    font-size:13px;
    padding:0 0 15px 0;
    position: absolute;
    bottom: 0;
    margin-left:-25px;
    span{
        margin-left:25px;
        margin-right:5px;
    }
`;

// Recommend组件--------------------------------------------

export const RecommendWrapper=styled.div`
    overflow:hidden;
    margin:35px 0;
    width:280px;
`;
export const RecommendItem=styled.a.attrs({
    href:'/'
})`
    padding:10px 20px;
    display:block;
    box-sizing:border-box;
    width:280px;
    line-height:50px;
    font-size:20px;
    height:50px;
    margin-bottom:10px;
    border-radius:6px;
    color: #000;
    background:url(${props=>props.imgUrl});
    /* 以上是style-component特有，可以通过props获取标签上的属性 */
    background-size:contain;
`;


