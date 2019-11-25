import styled from 'styled-components'

export const LoginWrapper=styled.div`
    position:absolute;
    left:0;
    right:0;
    bottom:0;
    top:58px;
    background:#eee;
    width:100%;
`;

export const LoginChunk=styled.div`
    width:450px;
    margin:80px auto;
    background:#fff;
    box-shadow:0 0 8px #ccc; 
    text-align:center;
    box-sizing:border-box;
    padding:35px 35px 50px 35px;
    position:relative;
    overflow:hidden;
    h2{
        font-size:25px;
        font-weight:bold;
        padding-bottom:30px;
        color: #555;
    }
    p{
        margin-left:90px;
        text-align:left;

    }
`;

export const Input=styled.input`
    width:200px;
    height:30px;
    line-height:30px;
    margin:10px auto;
    border:1px solid #ccc;
    border-radius:3px;
`;

export const Button=styled.button`
    width:20%;
    height:35px;
    display:block;
    line-height:35px;
    background-color:#ec7259;
    border:none;
    color: #fff;
    font-size:16px;
    border-radius:5px;
    outline:none;
    position:absolute;
    left:50%;
    bottom:0;
    transform:translate(-50%,-50%);
    text-decoration:none;
`;