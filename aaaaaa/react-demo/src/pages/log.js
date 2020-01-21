import React from "react";
import {Link} from "react-router-dom";
import QueueAnim from "rc-queue-anim";
import './log&res.css';
import {Button} from 'antd';
import 'antd/dist/antd.css';

//import  login from "img/登录.png"


export default class Log extends React.Component{
    constructor(props){
        super(props);
        this.state={
        }
    }
    render() {
        return(
            <div className='body'>
                <img src={[require("./img/login.png")]} width={'100%'} height={'100%'} />
                <div className='switch'>
                <Button shape={"round"}>登录</Button>
                <Button shape={"round"} onClick={(e) => this.DirectTo()}>注册</Button>
                </div>
            <QueueAnim animConfig={[
                { opacity: [1, 0], translateX: [0, 500] },
                { opacity: [1, 0], translateX: [0, -500] }
            ]} >

                    <div key='a' className='switch'>
                        <Link onClick={(e) => this.DirectTo()} >注册</Link>

                    </div>

            </QueueAnim>
            </div>
        )
    }
    DirectTo(e){
        this.props.history.push('./reg');
    }

}
