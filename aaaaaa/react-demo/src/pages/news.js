import React from "react";
import "./news.css"
import { Input} from "antd";

const { Search } = Input;


export default class Index extends React.Component{
    constructor(props){
        super(props);
        this.state={
        }
    }
    render() {
        return(

            <body className='total'>
            <div className='top-top1'></div>
            <div className='top1'>
                <div className='top-ser2'>
                    <div>消息</div>
                </div>
            </div>


            <div className='mid1-1'>
                <div className='tie-t'>
                    <div className='tie-t-tp'><img src={[require("./img/xx-1.png")]}/></div>
                    <div className='tie-t-2'>
                        <div className='tie-t-hz' >
                            <div className='tie-t-hz-head'>XX大学交流群</div>
                            <div className='tie-t-hz-bot'>同学a：大佬们帮个忙，看看这个怎么能....</div>
                        </div>
                        <div className='tie-t-rq'>4-8</div>
                    </div>
                </div>
                <div className='tie-t'>
                    <div className='tie-t-tp'><img src={[require("./img/xx-2.png")]}/></div>
                    <div className='tie-t-2'>
                        <div className='tie-t-hz'>
                            <div className='tie-t-hz-head'>某同学</div>
                            <div className='tie-t-hz-bot'>你好，刚才看了下你的贴子，我感觉那....</div>
                        </div>
                        <div className='tie-t-rq'>3-27</div>
                    </div>
                </div>
                <div className='tie-t'>
                    <div className='tie-t-tp'><img src={[require("./img/xx-3.png")]}/></div>
                    <div className='tie-t-2'>
                        <div className='tie-t-hz'>
                            <div className='tie-t-hz-head'>通知</div>
                            <div className='tie-t-hz-bot'>嗨~我是通知小助手，初次见面，请多....</div>
                        </div>
                        <div className='tie-t-rq'>1-19</div>
                    </div>
                </div>
            </div>

            <div className='bot'>
                <div className='bot-menu'>
                    <div onClick={()=>[this.DirectTo1()]}><img src={[require("./img/first1.png")]}/></div>
                    <div onClick={()=>[this.DirectTo2()]}><img src={[require("./img/second1.png")]}/></div>
                    <div><img src={[require("./img/third2.png")]}/></div>
                    <div onClick={()=>[this.DirectTo3()]}><img src={[require("./img/fourth1.png")]}/></div>
                </div>
            </div>

            </body>
        )
    }

    DirectTo1(e){
        this.props.history.push('./index')
    }
    DirectTo2(e){
        this.props.history.push('./sort')
    }
    DirectTo3(e){
        this.props.history.push('./mine')
    }

}