import React from "react";
import {Route} from "react-router-dom";
import Start from "./start";
import Index from "./index";
import Log from "./log";
import Reg from "./reg";
import YINDAO1 from "./yindao1";
import News from "./news";
import Sort from "./sort";
import Mine from "./mine";
import Shoucang from "./shoucang";
import Liuyan from "./liuyan";
import Xuexiao from "./xx";
import Fatie from "./ft";
import Sort1 from "./sort1";
import Sort2 from "./sort2";
import Sort3 from "./sort3";
import Sort4 from "./sort4";
import Sort5 from "./sort5";
import Sort6 from "./sort6";
import Sort7 from "./sort7";
import Sort8 from "./sort8";
import Sort9 from "./sort9";
import Sort10 from "./sort10";
import Sort11 from "./sort11";
import Sort12 from "./sort12";


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
                <Route exact path={'/mine'} component={Mine}/>
                <Route exact path={'/sc'} component={Shoucang}/>
                <Route exact path={'/ly'} component={Liuyan}/>
                <Route exact path={'/xx'} component={Xuexiao}/>
                <Route exact path={'/ft'} component={Fatie}/>
                <Route exact path={'/sort1'} component={Sort1}/>
                <Route exact path={'/sort2'} component={Sort2}/>
                <Route exact path={'/sort3'} component={Sort3}/>
                <Route exact path={'/sort4'} component={Sort4}/>
                <Route exact path={'/sort5'} component={Sort5}/>
                <Route exact path={'/sort6'} component={Sort6}/>
                <Route exact path={'/sort7'} component={Sort7}/>
                <Route exact path={'/sort8'} component={Sort8}/>
                <Route exact path={'/sort9'} component={Sort9}/>
                <Route exact path={'/sort10'} component={Sort10}/>
                <Route exact path={'/sort11'} component={Sort11}/>
                <Route exact path={'/sort12'} component={Sort12}/>
            </div>
        )
    }
}