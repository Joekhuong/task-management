import React, { Component } from 'react';
import ControlSearch from './ControlSearch';
import ControlSort from './ControlSort';

class Controls extends Component {
    render() {
        return (
            <div className="row mt-15">
              <ControlSearch searchingButton={this.props.isSearchingBtn} />
              <ControlSort sortingControl={this.props.isSortingCtl}/>
            </div>
        );
    }
}

export default Controls;