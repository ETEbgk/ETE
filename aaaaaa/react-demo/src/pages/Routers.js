import React from "react";
import {Route} from "react-router-dom";
import Start from "./start";
import Index from "./index";
import Log from "./log";
import Reg from "./reg";
import YINDAO1 from "./yindao1";
<<<<<<< HEAD
import News from "./news";
import Sort from "./sort";
import Myself from "./myself";
import Sort1 from "./sort1";
=======
import mine from "./mine";
import shoucang from "./shoucang";
import liuyan from "./liuyan";
import xuexiao from "./xx";
import fatie from "./ft";
>>>>>>> xm

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
<<<<<<< HEAD
                <Route exact path={'/news'} component={News}/>
                <Route exact path={'/sort'} component={Sort}/>
                <Route exact path={'/myself'} component={Myself}/>
                <Route exact path={'/sort1'} component={Sort1}/>
=======
                <Route exact path={'/mine'} component={mine}/>
                <Route exact path={'/sc'} component={shoucang}/>
                <Route exact path={'/ly'} component={liuyan}/>
                <Route exact path={'/xx'} component={xuexiao}/>
                <Route exact path={'/ft'} component={fatie}/>
>>>>>>> xm
            </div>
        )
    }
}