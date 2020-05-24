import React, { Component } from 'react';

class ControlSearch extends Component {

    constructor(props){
      super(props);
      this.state = {
        valueSearchingButton: ""
      }
    }

    searchingBtn = (event) =>{
      this.props.searchingButton(this.state.valueSearchingButton);
    }

    isChangeValueSearchingBtn = (event) =>{
      this.setState({
        valueSearchingButton: event.target.value
      })
    }

    render() {
        return (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <div className="input-group">
                  <input value={this.state.valueSearchingButton} type="text" className="form-control" placeholder="Enter task name" 
                  onChange={(event)=>this.isChangeValueSearchingBtn(event)} />
                  <span className="input-group-btn">
                    <button className="btn btn-primary" type="button" onClick={(event)=>this.searchingBtn(event)} >
                      <span className="fa fa-search mr-5" />Search
                    </button>
                  </span>
                </div>
              </div>
        );
    }
}

export default ControlSearch;