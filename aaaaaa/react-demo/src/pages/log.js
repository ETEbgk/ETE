import React from "react";
import {Link} from "react-router-dom";
import QueueAnim from "rc-queue-anim";
import './log&res.css';
import 'antd/dist/antd.css';
import {Form, Input,Icon} from "antd";
import './font/log.ttf'



function hasErrors(fieldsError) {
    return Object.keys(fieldsError).some(field => fieldsError[field]);
}

export default class Log extends React.Component{
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
        const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;
        const usernameError = isFieldTouched('username') && getFieldError('username');
        const passwordError = isFieldTouched('password') && getFieldError('password');
        return(
            <div className='body'>
                <img src={[require("./img/login.png")]} width={'100%'} height={'100%'} />
                <div className='switch'>
                <button >登录</button>
                <button  onClick={(e) => this.DirectTo()}>注册</button>
                </div>
            <QueueAnim animConfig={[
                { opacity: [1, 0], translateX: [0, 500] },
                { opacity: [1, 0], translateX: [0, -500] }
            ]} >
                    <div key='a' className={'main'}>
                        <Form  onSubmit={this.handleSubmit} >
                            <div className={'text'}>
                                <p >用户名</p>
                            </div>
                            <div className={'input'}>
                            <Form.Item validateStatus={usernameError ? 'error' : ''} help={usernameError || ''} >
                                {getFieldDecorator('username', {
                                    rules: [{ required: true, message: 'Please input your username!' }],
                                })(
                                    <Input
                                        prefix={<Icon type="user" style={{ color: 'rgba(5,165,156,0.5)' }} />}
                                        placeholder="Username" maxLength={'50px'}
                                    />,
                                )}
                            </Form.Item>
                            </div>
                            <div className={'text'}>
                                <p>密 码</p>
                            </div>
                            <div className={'input_pas'}>
                            <Form.Item  validateStatus={passwordError ? 'error' : ''} help={passwordError || ''}>
                                {getFieldDecorator('password', {
                                    rules: [{ required: true, message: 'Please input your Password!' }],
                                })(
                                    <Input
                                        prefix={<Icon type="lock" style={{ color: 'rgba(5,165,156,0.5)' }} />}
                                        type="password"
                                        placeholder="Password"
                                    />,
                                )}
                            </Form.Item>
                            </div>
                            <div className={'input_but'}>
                            <Form.Item>
                                <button type="primary" disabled={hasErrors(getFieldsError())} onClick={(e) => this.Direct()}className={'but'}>
                                   登录
                                </button>
                            </Form.Item>
                            </div>
                        </Form>
                    </div>
            </QueueAnim>
            </div>
        )
    }
    DirectTo(e){
        this.props.history.push('./reg');
    }
    Direct(e){
        this.props.history.push('./index');
    }
}
Log = Form.create({ name: 'horizontal_login' })(Log);
