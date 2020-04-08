import React from "react";
import Button from 'antd/lib/button';
import QueueAnim from 'rc-queue-anim';
import './sc.css';

export default class shoucang extends React.Component{
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
                        <div className={'top1'} key={'tt'}>
                            <div className={'return'}>
                                <div className={'rt'}><img src={require("./img/返回.png")} width={"2.5%"} onClick={this.onClick}/></div>
                            </div>
                        </div>,
                        <div className={'tt'} key={'tt'}><strong>我的收藏</strong></div>,
                        <div className={'wz'} key={'wz'}>
                            <div className={'wz1'}>
                                <div className={'wzbt'}>
                                    <strong>中国社会与文化</strong>
                                </div>
                                <div className={'wznr'}>
                                    <div className={'wb'}>
                                        <div className={'nr'}>
                                            中国特色社会主义文化建设的主要内 容：包括思想道德建设和教育科学文化建 设 社会主义思想道德，集中体现着精神文
                                        </div>
                                        <div className={'jb'}>
                                            <div className={'id'}>
                                                ID244325846
                                            </div>
                                            <div className={'date'}>
                                                1-28
                                            </div>
                                        </div>
                                    </div>
                                    <div className={'tp'}>
                                        <img src={require("./img/材料1.png")} width={"100%"}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        ]:null}
                    </QueueAnim>
                </div>

            </div>
        )
    }
}