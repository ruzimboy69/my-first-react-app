import React, {Component} from 'react';

class Tabpart extends Component {
    render() {
        return (
            <div>
                <div className={'card cardHover rounded-0'}>
                   <div className={'card-body d-flex '}>
                       <div className={'round bg-success rounded-circle text-center pt-2 text-white mr-2'}><h5>BC</h5></div>
                       <div className={'text-left mr-4 '}>
                           <h5 className={'font-weight-bold text-dark mb-0'}>Bessie Cooper</h5>
                           <span className={'mb-0 spanFont  '}>Salom ustoz</span>
                       </div>
                       <div>
                           <span>21:43</span>

                       </div>
                   </div>
                </div>
            </div>
        );
    }
}

export default Tabpart;