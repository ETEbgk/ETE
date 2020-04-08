import React from "react";
import Button from 'antd/lib/button';
import QueueAnim from 'rc-queue-anim';
import { Input } from 'antd';
const { TextArea } = Input;

import './sc.css';
import './ft.css';


export default class fatie extends React.Component{
    constructor(props){
        super(props);
        this.state={
        }
    }
    state = {
        show: true,
        an:true
    };

    fun1(){
        this.props.history.push('./mine');
    }
    onClick = () => {
        this.setState({
            show: false
        });
        this.fun1()
    }
    fun2()
    {
        this.state={
            show: true
        }
    }

    render() {
        window.onload=this.fun2()
        return(
            <div className={'bg'}>
                <div className={'queue-demo'}>
                    <QueueAnim className="demo-content"
                               key="demo"
                               type={['left','left']}>
                        {this.state.show ?  [
                            <div className={'ttop'} key={'tt'}>
                                <div className={'topx'} key={'top'}>
                                    <div className={'return'}>
                                        <div className={'rt'}><img src={require("./img/返回.png")} width={"8.625px"} onClick={this.onClick}/></div>
                                    </div>
                                    <div><button className={'fban'} >发表</button></div>
                                </div>
                            </div>,
                            <div className={'tt1'} key={'tt'}><strong>发帖</strong></div>,
                            <div className={'midbg1'} key={'mid'}>
                                <div className={'sr'}>
                                    <TextArea rows={4} className={'text'} placeholder={"想说些什么……？"} />
                                </div>
                                <div className={'sstp'}><img src={require("./img/instagram.png")} width={"100px"}/></div>
                            </div>,
                            <div className={'qxxl'} key={'mid'}>
                                <div className={'qxl'}>
                                    <div><strong>权限</strong></div>
                                    <div><img src={require("./img/校内可见.png")} width={"70px"}/> </div>
                                </div>
                            </div>,
                            <div className={'qxxl'} key={'mid'}>
                                <div className={'qxl'}>
                                    <div><strong>标签</strong></div>
                                    <div><img src={require("./img/返回 m.png")} height={"14px"}/> </div>
                                </div>
                            </div>,
                            <div className={'qxxl'} key={'mid'}>
                                <div className={'qxl'}>
                                    <div><strong>匿名</strong></div>
                                    <div className={"kg"}><input type="checkbox" className="switch"></input></div>
                                </div>
                            </div>
                        ]:null}
                    </QueueAnim>
                </div>
            </div>
        )
    }

}
