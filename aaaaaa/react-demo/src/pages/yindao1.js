import React from "react";
import "./yindao.css"
import { Button } from 'antd';
import 'antd/dist/antd.css';
import BannerAnim, { Element } from 'rc-banner-anim';
import TweenOne from 'rc-tween-one';
import 'rc-banner-anim/assets/index.css';

const BgElement = Element.BgElement;

export default class YINDAO1 extends React.Component{
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return(
            <div className={'body'}>

                <BannerAnim prefixCls="banner-user">
                    <Element
                        prefixCls="banner-user-elem"
                        key="0"
                    >
                        <BgElement
                            key="bg"
                            className="bg"
                            style={{
                                background:"#386ffa"
                            }}
                        />
                        <TweenOne className="banner-user-title" animation={{ y: 30, opacity: 0, type: 'from' }}>
                            随时随地
                        </TweenOne>
                        <TweenOne className="banner-user-text"
                                  animation={{ y: 30, opacity: 0, type: 'from', delay: 100 }}
                        >
                            聊你所想
                        </TweenOne>
                        <TweenOne className="banner-user-text"
                                  animation={{ y: 30, opacity: 0, type: 'from', delay: 200 }}
                        >
                            <img src={[require("./img/yindao2.png")]} width={"70%"} height={"70%"}/>
                        </TweenOne>
                    </Element>
                    <Element
                        prefixCls="banner-user-elem"
                        key="1"
                    >
                        <BgElement
                            key="bg"
                            className="bg"
                            style={{
                                background:"#1890ff"
                            }}
                        />
                        <TweenOne className="banner-user-title" animation={{ y: 30, opacity: 0, type: 'from' }}>
                            百万精品内容
                        </TweenOne>
                        <TweenOne className="banner-user-text"
                                  animation={{ y: 30, opacity: 0, type: 'from', delay: 100 }}
                        >
                            任你挑选

                        </TweenOne>
                        <TweenOne className="banner-user-text"
                                  animation={{ y: 30, opacity: 0, type: 'from', delay: 200 }}
                        >
                            <img src={[require("./img/yindao1.png")]} width={"70%"} height={"70%"}/>
                        </TweenOne>
                        <TweenOne className="banner-user-text"
                                  animation={{ y: 30, opacity: 0, type: 'from', delay: 200 }}
                        >
                            <Button onClick={(e) => this.DirectTo()}>开始体验</Button>
                        </TweenOne>
                    </Element>
                </BannerAnim>

            </div>
        )
    }
    DirectTo(e) {
        this.props.history.push('./log');
    }
}