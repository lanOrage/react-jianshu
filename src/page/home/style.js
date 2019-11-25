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
export const ListItemHeader=styled.div`
    width:calc(100% - 260px);
    color: #999;
    font-size:22px;
    text-align:center;
    float:left;
    font-weight:bold;
    color:#333;
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

export const ListMore=styled.div`
    width:100%;
    text-align:center;
    font-size: 14px;
    color: #787878;
    background-color: #f7f7f7;
    border: 1px solid #dcdcdc;
    border-radius: 10px;
    box-sizing:border-box;
    padding:10px;
    cursor: pointer;
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

// Downlodd组件--------------------------------------------

export const DownloadWrapper=styled.div`
    float:right;
    width:280px;
    margin-right:20px;
    box-sizing:border-box;
    padding:10px 20px;
    margin-top:-32px;
    border:1px solid #f0f0f0;
    border-radius:5px;
    cursor:pointer;
    img{
        float:left;
        width:60px;
        height:60px;
        margin-right:15px;
    }
    h6{
        padding:10px 0;
    }
    p{
        font-size:13px;
        color:#969696;
    }
    div{    
        position:relative;
    }
    div>.bigerweima{
        display:inline-block;
        width:150px;
        height:150px;
        padding:7px;
        background: #fff;
        visibility:hidden;
        position:absolute;
        top:-150px;
        left:125px;
        transform:translate(-50%,-50%);
        border:1px solid #ccc;
        border-radius:5px;
    }
    &:hover{
        .bigerweima{
            visibility:visible;
        }
    }
`;
// Writer组件--------------------------------------------

export const WriterWrapper=styled.div`
    float:right;
    width:280px;
    margin:20px 0;
    margin-right:20px;
    box-sizing:border-box;
`;

export const WriterHeader=styled.div`
    overflow:hidden;
    margin:5px 0 15px 0;
    width:280px;
    color:#969696;
    &:nth-child(1){
        float:left;
    }
    .writer-change{
        float:right;
        cursor:pointer;
        .iconfont{
            margin-right:5px;
            transition:all 0.3s ease-in;
            transform-origin:center center;
    }
    }
    /* border:1px solid #ccc; */
`;

export const WriterItem=styled.div`
    overflow:hidden;
    margin:15px 0;
    width:280px;
    p{
        float:left;
        width:calc(100% - 120px);
        font-size: 12px;
        color: #969696;
        padding:6px;
    }
`;

export const WriterIcon=styled.a`
    float:left;
    width:50px;
    height:50px;
    border-radius:50%;
    background:#ccc;
    overflow:hidden;
    margin-right:8px;
    margin-top:7px;
    img{
        width:50px;
        height:50px;
    }
`;


export const WriterFollow=styled.div`
    float:right;
    padding:5px;
    color: #42c02e;
    font-size:14px;
    text-align:right;
    span{
        font-size:20px;
    }
`;

export const WriterAuthor=styled.div`
    float:left;
    width:calc(100% - 130px);
    color: #333;
    line-height:30px;
    font-size:14px;
    padding:5px;
    padding-bottom:0;
`;

export const WriterMore=styled.a.attrs({
    href:'/'
})`
    display:block;
    text-decoration:none;
    width:280px;
    text-align:center;
    font-size: 13px;
    color: #787878;
    background-color: #f7f7f7;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    box-sizing:border-box;
    padding:10px;
`;

export const BackTop=styled.div`
    width:50px;
    height:50px;
    position:fixed;
    bottom:60px;
    right:60px;
    background:#ccc;
    color: #fff;
    font-size:17px;
    text-align:center;
    line-height:25px;
    cursor:pointer;
    user-select:none;
    opacity:0;
    &:hover{
        background:#969696;
    }
`;