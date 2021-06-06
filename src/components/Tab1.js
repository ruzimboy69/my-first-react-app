import React, {Component} from 'react';
import { AvForm, AvField } from 'availity-reactstrap-validation';
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import Home from "./Home";
import News from "./News";
import Setting from "./Setting";
import Tabpart from "./Tabpart";

class Tab1 extends Component {
    render() {
        return (
            <div>
                <Router>
                    <div className={'sidebar bg-secondary'}>
                       <div>
                           <div className={'container'}>
                               <div className={'row'}>
                                   <div className={'col-md-4 p-0'}>
                                       <ul>
                                           <li className={'list-unstyled m-0   d-flex'}>
                                               <Link to={"/Dashboard"}><Tabpart/></Link>
                                           </li>
                                           <li className={'list-unstyled m-0   d-flex'}>
                                               <Link to={"/kurslar"}><Tabpart/></Link>
                                           </li>
                                           <li className={'list-unstyled m-0   d-flex'}>
                                               <Link to={"/vazifalar"}><Tabpart/></Link>
                                           </li>
                                           <li className={'list-unstyled m-0   d-flex '}>
                                               <Link to={"/Qurilmalar"}><Tabpart/></Link>
                                           </li>
                                           <li className={'list-unstyled m-0   d-flex'}>
                                               <Link to={"/Zoom"}><Tabpart/></Link>
                                           </li>
                                           <li className={'list-unstyled m-0   d-flex'}>
                                               <Link to={"/Sozlamalar"}><Tabpart/></Link>
                                           </li>
                                       </ul>
                                   </div>
                                   <div className={'col-md-6 bg-success'}>
                                       <Switch>
                                           <Route path="/Dashboard" exact>
                                           </Route>
                                           <Route path="/kurslar">
                                           </Route>
                                           <Route path="/vazifalar">
                                               <h1>hello</h1>
                                           </Route>
                                           <Route path="/Qurilmalar">

                                           </Route>
                                           <Route path="/Zoom">

                                           </Route>
                                           <Route path="/Sozlamalar">

                                           </Route>
                                       </Switch>
                                   </div>
                               </div>
                           </div>
                       </div>
                       <div>
                       </div>
                    </div>
                </Router>
            </div>
        );
    }
}

export default Tab1;