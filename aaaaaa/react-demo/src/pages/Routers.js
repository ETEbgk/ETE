import React from "react";
import {Route} from "react-router-dom";
import Start from "./start";
import Index from "./index";
import Log from "./log";
import Reg from "./reg";
import YINDAO1 from "./yindao1";
import News from "./news";
import Sort from "./sort";
import Sort1 from "./sort1";
import Mine from "./mine";
import Shoucang from "./shoucang";
import Liuyan from "./liuyan";
import Xuexiao from "./xx";
import Fatie from "./ft";


export default class Routers extends React.Component{
    constructor(props){
        super(props);
        this.state={}
    }
    render() {
        return(
            <div>
                <Route exact path={'/'} component={Start}/>
                <Route exact path={'/index'} component={Index}/>
                <Route exact path={'/log'} component={Log}/>
                <Route exact path={'/reg'} component={Reg}/>
                <Route exact path={'/1'} component={YINDAO1}/>
                <Route exact path={'/news'} component={News}/>
                <Route exact path={'/sort'} component={Sort}/>
                <Route exact path={'/sort1'} component={Sort1}/>
                <Route exact path={'/mine'} component={Mine}/>
                <Route exact path={'/sc'} component={Shoucang}/>
                <Route exact path={'/ly'} component={Liuyan}/>
                <Route exact path={'/xx'} component={Xuexiao}/>
                <Route exact path={'/ft'} component={Fatie}/>

            </div>
        )
    }
}