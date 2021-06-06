import React, {Component} from 'react';
import Sidebar from "./components/Sidebar";
// import  axios from "axios";
import Game from "./components/Game";
import SmartPark from "./components/SmartPark";

class App extends Component {
    // componentDidMount() {
    //     axios.get('https://jsonplaceholder.typicode.com/users')
    //         .then((res)=>{
    //             this.setState({
    //                 users:res.data
    //             });
    //             console.log(this.state.users)
    //         })
    //         .catch((error)=>{
    //             console.log(error)
    //         })
    //     axios.get('https://jsonplaceholder.typicode.com/photos')
    //         .then((img)=>{
    //             this.setState({
    //                 users:img.data
    //             });
    //             console.log(this.state.users)
    //         })
    //         .catch((error)=>{
    //             console.log(error)
    //         })
    // }

    render() {
        const {users}=this.state;
        return (
            <div>
               {/*<Sidebar/>*/}
                {/*<div className={'container'}>*/}
                {/*    <div className={'row my-5'}>*/}
                {/*        {users.map((item)=>(*/}
                {/*            <div className={'col-md-4'}>*/}
                {/*                <div className={'card'}>*/}
                {/*                    <div className={'card-header'}>*/}
                {/*                        <h4 className={'text-center'}>{item.name}</h4>*/}
                {/*                    </div>*/}
                {/*                    <div className={'card-body'}>*/}
                {/*                        <div>Company:<b>{item.company.name}</b></div>*/}
                {/*                        <div>City:<b>{item.address.city}</b></div>*/}
                {/*                        <div>Phone:<b>{item.phone}</b></div>*/}
                {/*                    </div>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*        ))}*/}
                {/*    </div>*/}
                {/*</div>*/}
                {/*<div className={'container'}>*/}
                {/*    <div className={'row my-5'}>*/}
                {/*        {users.map((item)=>(*/}
                {/*            <div className={'col-md-4'}>*/}
                {/*                <div className={'card'}>*/}
                {/*                    <div className={'card-header'}>*/}
                {/*                        <h4 className={'text-center'}>{item.title}</h4>*/}
                {/*                    </div>*/}
                {/*                    <div className={'card-body'}>*/}
                {/*                       <img src={item.url}/>*/}
                {/*                    </div>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*        ))}*/}
                {/*    </div>*/}
                {/*</div>*/}
                 <Game/>
                {/*<SmartPark/>*/}
            </div>

        );
    }
}

export default App;