import React from "react";
import "./sort.css"
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
                <div className='top-ser'>
                    <Search
                        placeholder="点此进行搜索"
                        onSearch={value => console.log(value)}
                        style={{ width: 275,height:38}}/>
                </div>
            </div>

            <div className='mid2-head'>
                <div className='mid2-hz'>分 类</div>
            </div>
            <div className='mid2-bot'>
                <div className='mid2-bot-tp'><img src={[require("./img/1.png")]} onClick={(e) => this.DirectTo4()}/></div>
                <div className='mid2-bot-tp'><img src={[require("./img/2.png")]}/></div>
                <div className='mid2-bot-tp'><img src={[require("./img/3.png")]}/></div>
                <div className='mid2-bot-tp'><img src={[require("./img/4.png")]}/></div>
                <div className='mid2-bot-tp'><img src={[require("./img/5.png")]}/></div>
                <div className='mid2-bot-tp'><img src={[require("./img/6.png")]}/></div>
                <div className='mid2-bot-tp'><img src={[require("./img/7.png")]}/></div>
                <div className='mid2-bot-tp'><img src={[require("./img/8.png")]}/></div>
                <div className='mid2-bot-tp'><img src={[require("./img/9.png")]}/></div>
                <div className='mid2-bot-tp'><img src={[require("./img/10.png")]}/></div>
                <div className='mid2-bot-tp'><img src={[require("./img/11.png")]}/></div>
                <div className='mid2-bot-tp'><img src={[require("./img/12.png")]}/></div>
            </div>

            <div className='bot'>
                <div className='bot-menu'>
                    <div onClick={()=>[this.DirectTo1()]}><img src={[require("./img/first1.png")]}/></div>
                    <div><img src={[require("./img/second2.png")]}/></div>
                    <div onClick={()=>[this.DirectTo2()]}><img src={[require("./img/third1.png")]}/></div>
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
        this.props.history.push('./news')
    }
    DirectTo3(e){
        this.props.history.push('./myself')
    }
    DirectTo4(e){
        this.props.history.push('./sort1')
    }
}