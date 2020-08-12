import React, { Component } from 'react';

class List extends Component {
  render(){
    return(
      <div className='List'>
        <li>{this.props.item.row1}</li>
        <li>{this.props.item.row2}</li>
        <li>{this.props.item.row3}</li>
      </div>
    );
  }
}

export default List;