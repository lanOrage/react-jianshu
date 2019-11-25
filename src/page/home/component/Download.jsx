import React,{PureComponent}from 'react'

import {DownloadWrapper} from '../style'

import erweima from "../img/erweima.png"

export default class Download extends PureComponent{
    render(){
        return (
            <DownloadWrapper>
                <img src={erweima} alt="erweima"/>
                <h6>下载简书手机App > </h6>
                <p>随时随地发现和创作内容</p>
                <div>
                    <img src={erweima} className="bigerweima" alt="erweima"/>
                </div>
            </DownloadWrapper>
        )
    }
}