import React from "react";
import "./index.css"
import { Input } from "antd";
import BannerAnim, { Element } from 'rc-banner-anim';
import TweenOne from 'rc-tween-one';
import 'rc-banner-anim/assets/index.css';
import Search from "antd/es/input/Search";

export default class Sort1 extends React.Component{
    constructor(props){
        super(props);
        this.state={
        }
    }
    render() {
        return(
            <div className='sort_body'>
                <div className='top'>
                    <div className='top-ser'>
                        <Search
                            placeholder="点此进行搜索"
                            onSearch={value => console.log(value)}
                            style={{ width: 275,height:38}}/>
                    </div>
                </div>
            <div className='mid3_sort'>
                <div className='mid3-left'>
                    <div className='mid3-left-1'>
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
                    <div className='mid3-right-1'>
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
            </div>
        )
    }
}