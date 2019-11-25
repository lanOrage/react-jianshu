import styled from 'styled-components'

// Detail组件布局--------------------------------------------
export const DetailWrapper=styled.div`
    width:1000px;
    margin:5px auto;
    overflow:hidden;
    /* background:red; */
    padding-bottom:150px;
`;

export const DetailHeader=styled.div`
    font-size:34px;
    line-height:44px;
    color: #333;
    margin:50px 0 20px 0;
    font-weight:bold;
`;

export const DetailItem=styled.div`
    font-size:14px;
    width:75%;
    line-height:35px;
    padding-bottom:20px;
    border-bottom:2px solid #969696;
    img{
        display: block;
    }
`;

export const Author=styled.div`
    float:left;
    width:100%;
    margin:20px 0;
    box-sizing:border-box;
    p{
        float:left;
        margin-top:5px;
        width:calc(100% - 80px);
        font-size:13px;
        color: #969696;
    }
`;

export const AuthorIcon=styled.div`
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

export const AuthorName=styled.div`
    font-size:17px;
    float:left;
    height:35px;
    line-height:35px;
    color: #000;
    
`;

export const AuthorFollow=styled.div`
    float:left;
    font-size:12px;
    text-align:center;
    padding:5px 10px;
    margin-top:5px;
    color: #ec7259;
    border-radius:25px;
    background-color: #fff;
    border:1px solid #ec7259;
    margin-left:25px;
`;