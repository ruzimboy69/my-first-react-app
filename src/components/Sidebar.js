import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Home from "./Home";
import News from "./News";
import Setting from "./Setting";
import Vazifalar from "./Vazifalar";
class Sidebar extends Component {
    state={
        sidebar:true
    };

    openSidebar=()=>{
        this.setState({
            sidebar:!this.state.sidebar
        })
    }
    render() {
        const {sidebar}=this.state;
        return (
            <Router>
               <div className={'sidebar'}>
                <div className={sidebar ? "left-site":'closeLeft-site'}>
                    <div className={'container'}>
                        <div className={'row my-2'}>
                            <div className={'col-md-12'}>
                                <img src={'images/logo.jpg'} className={sidebar ? 'offset-3 mb-5':'offset-6 mb-5 ml-5'}/>
                                <ul className={sidebar ? 'd-block':'d-none'}>
                                    <li className={'list-unstyled  d-flex'}>
                                       <Link to={"/Dashboard"}> <i className="fas fa-columns mx-3"></i>Dashboard</Link>
                                    </li>
                                    <li className={'list-unstyled'}>
                                        <Link to={"/kurslar"}><i className="fas fa-swatchbook mx-3"></i>Barcha kurslar</Link>
                                    </li>
                                    <li className={'list-unstyled'}>
                                        <Link to={"/vazifalar"}><i className="fas fa-tasks mx-3"></i>Vazifalar va chat</Link>
                                    </li>
                                    <li className={'list-unstyled'}>
                                        <Link to={"/Qurilmalar"}><i className="far fa-comment-dots mx-3"></i>Qurilmalar</Link>
                                    </li>
                                    <li className={'list-unstyled'}>
                                        <Link to={"/Zoom"}><i className="fas fa-video mx-3"></i>Zoom chat</Link>
                                    </li>
                                    <li className={'list-unstyled'}>
                                        <Link to={"/Sozlamalar"}><i className="fas fa-cog mx-3"></i>Sozlamalar</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={sidebar ? "right-site" : 'openRight-site'}>
                    <div onClick={this.openSidebar} className={'navbar'}>
                        <img src={'images/icon.jpg'}/>
                    </div>
                    <div className={'container'}>
                        <div className={'row my-5'}>
                            <div className={'col-md-12 bg-danger'}>
                                <Switch>
                                    <Route path="/Dashboard" exact>
                                        <Home/>
                                    </Route>
                                    <Route path="/kurslar">
                                        <News/>
                                    </Route>
                                    <Route path="/vazifalar">
                                        <Vazifalar/>
                                    </Route>
                                    <Route path="/Qurilmalar">

                                    </Route>
                                    <Route path="/Zoom">
                                        <Setting/>
                                    </Route>
                                    <Route path="/Sozlamalar">
                                        <Setting/>
                                    </Route>
                                </Switch>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </Router>
        );
    }
}

export default Sidebar;