import React, {Component} from 'react';
import '../main.css'

class New extends Component {

    state = {
        count: 0,
        firstValue: 0,
        secondValue: 0,
        thirdValue: 0,
        fourValue: 0,

    };

    addCount = () => {
        if (this.state.count < 100) {
            this.setState({
                count: this.state.count + 1
            })
        }
    };

    removeCount = () => {
        if (this.state.count > 0) {
            this.setState({
                count: this.state.count - 1
            })
        }
    };

    myFunction = () => {

        if (this.state.firstValue === 0) {
            this.setState({
                firstValue: 25
            })
        } else {
            this.setState({
                firstValue: 0
            })
        }


    };


    render() {
        const {count, firstValue, secondValue} = this.state;
        return (
            <div>
                <div className="container">
                    <div className="row mt-5">
                        <div className="col-md-4">
                            <div className="card">
                                <div className="card-header text-center">
                                    <h3> Change value</h3>
                                </div>
                                <div className="card-body text-center">

                                    <input value={count} type="range"/>
                                    <h4>{count}</h4>

                                </div>
                                <div className="card-footer d-flex justify-content-between">
                                    <button onClick={this.removeCount} className="btn btn-danger">-</button>
                                    <button onClick={this.addCount} className="btn btn-success">+</button>
                                </div>
                            </div>
                        </div>


                        <div className="col-md-4">
                            <div className="card">
                                <div className="card-header">
                                    <div className="progress">
                                        <div style={{width: (firstValue) + '%'}} className="progress-bar"/>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div onChange={this.myFunction} className="form-group">
                                        <input value={firstValue} type="checkbox" id="firstTask"/>
                                        <label htmlFor="firstTask">1-vazifa</label>
                                    </div>
                                    <div className="form-group">
                                        <input value={secondValue} type="checkbox" id="secondTask"/>
                                        <label htmlFor="secondTask">2-vazifa</label>
                                    </div>

                                    <div className="form-group">
                                        <input type="checkbox" id="thirdTask"/>
                                        <label htmlFor="thirdTask">3-vazifa</label>
                                    </div>

                                    <div className="form-group">
                                        <input type="checkbox" id="fourTask"/>
                                        <label htmlFor="fourTask">4-vazifa</label>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>


                </div>
            </div>
        );
    }
}

export default New;