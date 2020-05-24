import React, { Component } from 'react';

class ControlSort extends Component {
  constructor(props){
    super(props);
    this.state = {
    }
  } 

  isSorting = (paramSorting)=>{
    this.props.sortingControl(paramSorting);
  }
    render() {
        return (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <div className="dropdown">
                  <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenu1" 
                  data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                    Filtering <span className="fa fa-caret-square-o-down ml-5" />
                  </button>
                  <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                    <li  onClick={()=>this.isSorting('sortAZ')}>
                      <a role="button">
                        <span className="fa fa-sort-alpha-asc pr-5">
                          Task A-Z
                        </span>
                      </a>
                    </li>
                    <li  onClick={()=>this.isSorting('sortZA')}>
                      <a role="button">
                        <span className="fa fa-sort-alpha-desc pr-5">
                          Task Z-A
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
        );
    }
}

export default ControlSort;