import React, {Component} from 'react';

class Card extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header bg-dark text-center text-white">
                                <h4>
                                    {this.props.header}
                                </h4>
                            </div>
                            <div className="card-body">
                                {this.props.body}
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        );
    }
}

export default Card;