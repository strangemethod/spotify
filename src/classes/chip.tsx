import React from 'react';

import '../styles/chip.css'

export default class Chip extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button className="chip color-grey">
        <img src={this.props.image} alt="" />
        <h3 className="type-medium">{this.props.title}</h3>
      </button>
    );
  }
}