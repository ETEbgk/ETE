import React from "react";
import {Form, Input,Icon} from "antd";
import './chat.css'



function hasErrors(fieldsError) {
    return Object.keys(fieldsError).some(field => fieldsError[field]);
}

export default class Chat extends React.Component{
    constructor(props){
        super(props);
        this.state={
        }
    }
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    };

    render() {

        return(
            <div className='body'>
                <div className='top'>
                    <img src={[require("./img/arrow_left.png")]} width={'5%'} height={'5%'}/>
                    <div>
                        <p>夺命泰勒斯</p>

                    </div>
                    <img src={[require("./img/list.png")]} width={'5%'} height={'5%'}/>
                </div>

                    <div className="people">
                    <img src={[require("./img/u=1305353222,2352820043&fm=26&gp=0.jpg")]} width={'10%'}height={'5%'}/>
                    <p className="talk">在吗</p>
                    </div>

                <div className="citizen">
                    <p className="com">在的</p>
                    <img src={[require("./img/timg.jfif")]} width={'40%'}height={'40%'}/>
                </div>
                <div className="people">
                    <img src={[require("./img/u=1305353222,2352820043&fm=26&gp=0.jpg")]} width={'10%'}height={'5%'}/>
                    <p className="a">想询问你一些事</p>
                </div>
                <div className="bottom">
                    <div className='bottom_1'>
                        <input type="text" className='input'/>
                        <input type="button" value="发送" className="button"/>
                    </div>

                    <div className='selection'>
                        <img src={[require("./img/图片.png")]} width={'5%'} height={'2%'}/>
                        <img src={[require("./img/yuyin.png")]} width={'5%'} height={'2%'}/>
                        <img src={[require("./img/biaoqing.png")]} width={'5%'} height={'2%'}/>
                        <img src={[require("./img/daifukuan.png")]} width={'5%'} height={'2%'}/>
                        <img src={[require("./img/plus-circle.png")]} width={'5%'} height={'2%'}/>
                    </div>
            </div>
            </div>
        )
    }
    DirectTo(e){
        this.props.history.push('./reg');
    }

}
Chat = Form.create({ name: 'horizontal_login' })(Chat);
