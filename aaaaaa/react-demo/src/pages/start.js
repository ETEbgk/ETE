import React from "react";
import QueueAnim from 'rc-queue-anim';

export default class Start extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return(
            <QueueAnim type={['scale']} duration='3000' onEnd={(e) =>this.DirectTo()}>
            <img src={[require("./img/loading.png")]}  alt='a' width={"100%"} key="demo1" />
            </QueueAnim>
        )
    }
    DirectTo(e){
        this.props.history.push('./log')
    }
}
