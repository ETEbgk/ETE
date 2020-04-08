import React from "react";
import "./sort1.css"
import { Input } from "antd";

const { Search } = Input;

export default class Sort2 extends React.Component{
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
                            <img src={[require("./img/gdwh.png")]}/>
                            <div className='mid3-zi1'>古典文化的魅力</div>
                            <div className='mid3-bot'>
                                <div className='mid3-tp'><img src={[require("./img/touxiang.png")]}/></div>
                                <div className='mid3-zi2'>ID:2462512346</div>
                                <div className='mid3-zi3'>82974</div>
                                <div className='mid3-tp2'><img src={[require("./img/redu.png")]}/></div>
                            </div>
                        </div>
                        <div className='mid3-left-2'>
                            <img src={[require("./img/sport.png")]}/>
                            <div className='mid3-zi1'>在家无聊？教你在家也能锻炼</div>
                            <div className='mid3-bot'>
                                <div className='mid3-tp'><img src={[require("./img/touxiang.png")]}/></div>
                                <div className='mid3-zi2'>ID:1954118131</div>
                                <div className='mid3-zi3'>18963</div>
                                <div className='mid3-tp2'><img src={[require("./img/redu.png")]}/></div>
                            </div>
                        </div>
                        <div className='mid3-left-3'>
                            <img src={[require("./img/flower.png")]}/>
                            <div className='mid3-zi1'>“荷”在文学中占何种地位？</div>
                            <div className='mid3-bot'>
                                <div className='mid3-tp'><img src={[require("./img/touxiang.png")]}/></div>
                                <div className='mid3-zi2'>ID:1098451206</div>
                                <div className='mid3-zi3'>38074</div>
                                <div className='mid3-tp2'><img src={[require("./img/redu.png")]}/></div>
                            </div>
                        </div>

                    </div>
                    <div className='mid3-right'>
                        <div className='mid3-right-1'>
                            <img src={[require("./img/hong.png")]}/>
                            <div className='mid3-zi1'>红楼梦-你真的看懂了吗？</div>
                            <div className='mid3-bot'>
                                <div className='mid3-tp'><img src={[require("./img/touxiang.png")]}/></div>
                                <div className='mid3-zi2'>ID:3324666421</div>
                                <div className='mid3-zi3'>68127</div>
                                <div className='mid3-tp2'><img src={[require("./img/redu.png")]}/></div>
                            </div>
                        </div>
                        <div className='mid3-right-2'>
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
            </body>
        )
    }
    DirectTo(e){
        this.props.history.push('./sort')
    }
}