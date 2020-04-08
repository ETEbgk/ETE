import React from "react";
import Button from 'antd/lib/button';
import QueueAnim from 'rc-queue-anim';
import './sc.css';

export default class liuyan extends React.Component{
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
                            <div className={'t-op1'} key={'tt'}>
                                <div className={'return'}>
                                    <div className={'rt'}><img src={require("./img/fanhui.png")} width={"2.5%"} onClick={this.onClick}/></div>
                                </div>
                            </div>,
                            <div className={'tt'} key={'tt'}><strong>回复我的</strong></div>,
                            <div className={'wz'} key={'wz'}>
                                <div className={'wz1'}>
                                    <div className={'wznr1'}>
                                        <div className={'wb'}>
                                            <div className={'kt'}>
                                                <div className={'id'}><strong>ID244325846</strong></div>
                                                <div className={'ts'}>对我的留言回复</div>
                                            </div>
                                            <div className={'nr'}>
                                                我非常同意你的观点！思想道德建设和教育科学文化建 设 社会主义思想道
                                            </div>
                                            <div className={'jb1'}>
                                                <div className={'date1'}>
                                                    1-28
                                                </div>
                                            </div>
                                        </div>
                                        <div className={'tp'}>
                                            <img src={require("./img/cailiao1.png")} width={"150px"}/>
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