import React from "react";
import Button from 'antd/lib/button';
import QueueAnim from 'rc-queue-anim';
import './sc.css';
import './xx.css'

export default class xuexiao extends React.Component{
    constructor(props){
        super(props);
        this.state={
        }
    }

    state = {
        show: true
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
                            <div className={'t-op1'} key={'t-op'}>
                                <div className={'return'}>
                                    <div className={'rt'}><img src={require("./img/fanhui.png")} width={"2.5%"} onClick={this.onClick}/></div>
                                </div>
                            </div>,
                            <div className={'tt'} key={'tt'}><strong>我的学校</strong></div>,
                            <div className={'m-id'} key={'m-id'}>
                                <div className={'xz'}>
                                    <div className={'xz1'}><strong>请选择所在学校</strong></div>
                                    <div className={'xz2'}><img src={require("./img/fanhuikaobei.png")} width={"36%"} /></div>
                                </div>
                            </div>,
                            <div className={'m-id1'} key={'m-id'}>
                                <div className={'xz'}>
                                    <div className={'xz1'}><strong>请选择专业</strong></div>
                                    <div className={'xz2'}><img src={require("./img/fanhuikaobei.png")} width={"36%"} /></div>
                                </div>
                            </div>,
                            <div className={'m-id2'} key={'m-id'}>
                                <div className={'xxq'}>
                                    <div className={'xxqq'}><img src={require("./img/xxq.png")} width={"30%"}/></div>
                                    <div className={'fanhui'}><img src={require("./img/fanhui1.png")}width={'26%'}/> </div>
                                </div>
                                <div className={'xxql'}>
                                    <div className={'xxql1'}>
                                        <img src={require("./img/quntou.png")} width={"16%"}/>
                                        <p>某大学学习交友群</p>
                                    </div>
                                    <div><button className={'sqjr'}>申请加入</button></div>
                                </div>
                            </div>,
                            <div className={'m-id3'} key={'m-id'}>
                                <div className={'xxq'}>
                                    <div className={'xxqq'}><img src={require("./img/zhuanye.png")} width={"30%"}/></div>
                                    <div className={'fanhui'}><img src={require("./img/fanhui1.png")}width={'26%'}/> </div>
                                </div>
                                <div className={'xxql'}>
                                    <div className={'xxql1'}>
                                        <img src={require("./img/quntou.png")} width={"16%"}/>
                                        <p>某大学A专业学习群</p>
                                    </div>
                                    <div><button className={'sqjr'}>申请加入</button></div>
                                </div>
                            </div>
                        ]:null}
                    </QueueAnim>
                </div>

            </div>
        )
    }
}