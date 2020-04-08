import React from "react";
import "./sort1.css"
import { Input } from "antd";

const { Search } = Input;

export default class Sort11 extends React.Component{
    constructor(props){
        super(props);
        this.state={
        }
    }
    render() {
        return(
            <body>
            <div className='sort_body'>
                <div className='sort-top1'></div>
                <div className='top'>
                    <div className='top-book' onClick={()=>[this.DirectTo()]}><img src={[require("./img/fanhui.png")]}/></div>
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
                        <img src={[require("./img/yinyue.png")]} width={"100%"} height={"75%"}/>
                        <div className='mid3-zi1'>我为什么要玩音乐</div>
                        <div className='mid3-bot'>
                            <div className='mid3-tp'><img src={[require("./img/touxiang.png")]}/></div>
                            <div className='mid3-zi2'>ID:4562512346</div>
                            <div className='mid3-zi3'>2554</div>
                            <div className='mid3-tp2'><img src={[require("./img/redu.png")]}/></div>
                        </div>
                    </div>
                    <div className='mid3-left-2'>
                        <img src={[require("./img/shougong (1).jpg")]} width={"100%"} height={"85%"}/>
                        <div className='mid3-zi1'>手把手教你织毛衣</div>
                        <div className='mid3-bot'>
                            <div className='mid3-tp'><img src={[require("./img/touxiang.png")]}/></div>
                            <div className='mid3-zi2'>ID:2354116421</div>
                            <div className='mid3-zi3'>30163</div>
                            <div className='mid3-tp2'><img src={[require("./img/redu.png")]}/></div>
                        </div>
                    </div>
                    <div className='mid3-left-3'>
                        <img src={[require("./img/shougong (2).jpg")]} width={"100%"} height={"75%"}/>
                        <div className='mid3-zi1'>用牙签做一个城堡</div>
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
                        <img src={[require("./img/shougong (3).jpg")]} width={"100%"} height={"85%"}/>
                        <div className='mid3-zi1'>中国历史大事年表</div>
                        <div className='mid3-bot'>
                            <div className='mid3-tp'><img src={[require("./img/touxiang.png")]}/></div>
                            <div className='mid3-zi2'>ID:2354116421</div>
                            <div className='mid3-zi3'>30163</div>
                            <div className='mid3-tp2'><img src={[require("./img/redu.png")]}/></div>
                        </div>
                    </div>
                    <div className='mid3-right-2'>
                        <img src={[require("./img/shougong (4).jpg")]} width={"100%"} height={"85%"}/>
                        <div className='mid3-zi1'>什么是大数据</div>
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
            </body>
        )
    }
    DirectTo(e){
        this.props.history.push('./sort')
    }
}