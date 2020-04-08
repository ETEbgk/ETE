import React from "react";
import "./index.css"
import { Input} from "antd";
import BannerAnim, { Element } from 'rc-banner-anim';
import TweenOne from 'rc-tween-one';
import 'rc-banner-anim/assets/index.css';

const { Search } = Input;
const BgElement = Element.BgElement;

export default class Index extends React.Component{
    constructor(props){
        super(props);
        this.state={
        }
    }
    render() {
        return(

            <body>
            <div className='bod'>
            <div className='top-top'></div>
            <div className='top'>
                <div className='top-book'><img src={[require("./img/caidan.png")]}/></div>
                <div className='top-ser'>
                    <Search
                        placeholder="点此进行搜索"
                        onSearch={value => console.log(value)}
                        style={{ width: 275,height:38}}/>
                </div>
            </div>
            <div className='mid'>
                <div className='mid-top'> </div>
                <BannerAnim prefixCls="banner-user2">
                    <Element
                        prefixCls="banner-user-elem"
                        key="0"
                    >
                        <TweenOne className="banner-user-text" animation={{ y: 30, opacity: 0, type: 'from', delay: 50 }}>
                            <img className='pic' src={[require("./img/Theone.png")]}/>
                        </TweenOne>
                    </Element>
                    <Element
                        prefixCls="banner-user-elem"
                        key="1"
                        >
                        <TweenOne className="banner-user-text" animation={{ y: 30, opacity: 0, type: 'from', delay: 50 }}>
                            <img className='pic' src={[require("./img/Thetwo.png")]}/>
                        </TweenOne>
                    </Element>
                    <Element
                        prefixCls="banner-user-elem"
                        key="3"
                    >
                        <TweenOne className="banner-user-text" animation={{ y: 30, opacity: 0, type: 'from', delay: 50 }}>
                            <img className='pic' src={[require("./img/Thethree.png")]}/>
                        </TweenOne>
                    </Element>
                </BannerAnim>
                <div className='mid-bot'> </div>
            </div>
            <div className='mid2'>
                <div className='mid2-left'>
                    <div className='mid2-text'>热门</div>
                    <div className='mid2-text'>推荐</div>
                    <div className='mid2-text'>最新内容</div>
                    <div className='mid2-text'>我的关注</div>
                </div>
                <div className='mid2-right'>
                    <div className='mid2-pic'><img src={[require("./img/caidanguanli.png")]}/></div></div>
            </div>

            <div className='mid3'>
                <div className='mid3-left'>
                    <div className='mid3-left-111'>
                        <img src={[require("./img/zmmyz.png")]}/>
                        <div className='mid3-zi1'>议贸易战的得失</div>
                        <div className='mid3-bot'>
                            <div className='mid3-tp'><img src={[require("./img/touxiang.png")]}/></div>
                            <div className='mid3-zi2'>ID:2462512346</div>
                            <div className='mid3-zi3'>2874</div>
                            <div className='mid3-tp2'><img src={[require("./img/redu.png")]}/></div>
                        </div>
                    </div>
                </div>
                <div className='mid3-right'>
                    <div className='mid3-right-111'>
                        <img src={[require("./img/mid3-tp-1.png")]}/>
                        <div className='mid3-zi1'>中国的井文化</div>
                        <div className='mid3-bot'>
                            <div className='mid3-tp'><img src={[require("./img/touxiang.png")]}/></div>
                            <div className='mid3-zi2'>ID:2354116421</div>
                            <div className='mid3-zi3'>30163</div>
                            <div className='mid3-tp2'><img src={[require("./img/redu.png")]}/></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='bot'>
                <div className='bot-menu'>
                    <div><img src={[require("./img/first2.png")]}/></div>
                    <div onClick={()=>[this.DirectTo1()]}><img src={[require("./img/second1.png")]}/></div>
                    <div onClick={()=>[this.DirectTo2()]}><img src={[require("./img/third1.png")]}/></div>
                    <div onClick={()=>[this.DirectTo3()]}><img src={[require("./img/fourth1.png")]}/></div>
                </div>
            </div>
            </div>
            </body>
        )
    }
    DirectTo1(e){
        this.props.history.push('./sort')
    }
    DirectTo2(e){
        this.props.history.push('./news')
    }
    DirectTo3(e){
        this.props.history.push('./mine')
    }
}
