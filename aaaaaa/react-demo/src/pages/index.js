import React from "react";
import {Link} from "react-router-dom";


export default class Index extends React.Component{
    constructor(props){
        super(props);
        this.state={

        }
    }
    render() {
        return(

            <div >
                <Link  onClick={(e)=>this.DirectTo()}>aaa</Link>
            </div>

        )
    }
    DirectTo(e){
        this.props.history.push('./log')
    }
}
