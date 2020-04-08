import React from "react";
import Button from 'antd/lib/button';
import QueueAnim from 'rc-queue-anim';
import './mine.css';



export default class mine extends React.Component{
    constructor(props){
        super(props);
        this.state={
        }
    }

    state = {
        show: true
    };
    onClick = () => {
        this.setState({
            show: !this.state.show
        });
    }
    fun1()
    {
        this.state={
            show: false
        }
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
                               type={['left','right']}
                               ease={['easeOutQuart','easeInOutQuart']}>
                        {this.state.show ?  [
                            <div className={'top'} key={'a'}>
                                <div className={'title'}>
                                    <strong>我的</strong>
                                </div>
                            </div>,
                            <div className={'ztl'} key={'b'}>
                                <div className={'ztl0'}>
                                    <div className={'ztl1'}>
                                        <div className={'frame1'}>
                                            <div className={'btl'}>
                                                <div className={'bt1'}>
                                                    <div className={'bt21'}>
                                                        <div className={'bt2x'}>
                                                            <div className={'bt2x1'}><strong>帖子</strong></div>
                                                            <div className={'bt2x2'}><strong>关注</strong></div>
                                                        </div>
                                                    </div>
                                                    <div className={'bt22'}>
                                                        <div className={'bt2y'}>
                                                            <div className={"bt2y1"}><strong>粉丝</strong></div>
                                                            <div className={'bt2y2'}><strong>被赞</strong></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={'btl'}>
                                                <div className={'bt1'}>
                                                    <div className={'bt21'}>
                                                        <div className={'bt2x'}>
                                                            <div className={'bt2x1'}><strong>0</strong></div>
                                                            <div className={'bt2x2'}><strong>20</strong></div>
                                                        </div>
                                                    </div>
                                                    <div className={'bt22'}>
                                                        <div className={'bt2y'}>
                                                            <div className={"bt2y1"}><strong>5</strong></div>
                                                            <div className={'bt2y2'}><strong>50</strong></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>,
                            <div className={'photo0'} key={'b'}>
                                <button className={'photo'}><img className={'photo1'} src={[require("./img/photo.png")]}/> </button>
                                <div className={'name1'} style={{textAlign:"center"}}><strong>姓名</strong></div>
                            </div>,
                            <div className={'dtl'} key={'d'}>
                                <div className={'dtl0'}>
                                    <div className={'xc'}>
                                        <div className={'xc1'}>
                                            <img src={require("./img/shoucang.png")} width={"12%"} height={"12%"} onClick={()=>[this.props.history.push('./sc')]}/>
                                            <div className={'xc2'} onClick={()=>[this.props.history.push('./sc')]}>
                                                <div className={'xc21'}><strong>我的收藏</strong></div>
                                                <div className={'xc22'}>这里有我收藏过的帖子</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={'hf'}>
                                        <div className={'hf1'}>
                                            <img src={require("./img/pen.png")} width={"12%"} onClick={()=>this.props.history.push('./ly')}/>
                                            <div className={'hf2'} onClick={()=>this.props.history.push('./ly')}>
                                                <div className={'hf21'}><strong>回复我的</strong></div>
                                                <div className={'hf22'}>我在帖子下留过的言</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={'xx'}>
                                        <div className={'xx1'}>
                                            <img src={require("./img/school.png")} width={"12%"} onClick={()=>this.props.history.push('./xx')}/>
                                            <div className={'xx2'} onClick={()=>this.props.history.push('./xx')}>
                                                <div className={'xx21'}><strong>我的学校</strong></div>
                                                <div className={'xx22'}>选择我的学校及学校各个群组</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={'ft'}>
                                        <div className={'ft1'}>
                                            <img src={require("./img/tiezi.png")} width={"12%"} onClick={()=>this.props.history.push('./ft')}/>
                                            <div className={'ft2'} onClick={()=>this.props.history.push('./ft')}>
                                                <div className={'ft21'}><strong>发帖</strong></div>
                                                <div className={'ft22'}>点击发帖或查看之前发的帖子</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>,
                            <div className={'exit'} key={'e'}>
                                <div className={'exit1'}>
                                    <div className={'exit2'}>退出登录</div>
                                </div>
                            </div>
                        ]:null }
                    </QueueAnim>
                </div>
                <div className={'botbg1'}></div>
                <div className={'botbg'}>
                    <div className='bot'>
                        <div className='bot-menu'>
                            <div><img src={[require("./img/first1.png")]}/></div>
                            <div onClick={()=>[this.DirectTo1()]}><img src={[require("./img/second1(1).png")]}/></div>
                            <div onClick={()=>[this.DirectTo2()]}><img src={[require("./img/third1(1).png")]}/></div>
                            <div onClick={()=>[this.DirectTo3()]}><img src={[require("./img/fourth2.png")]}/></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    DirectTo1(e){
        this.props.history.push('./index')
    }
    DirectTo2(e){
        this.props.history.push('./sort')
    }
    DirectTo3(e){
        this.props.history.push('./news')
    }//链接要改一下
}
