import React from 'react';

import '../styles/tile.css'

export default class Tile extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="tile">
        <img src={this.props.image} alt="" />
        <h3 className="type-medium">{this.props.title}</h3>
        <p className="type-small">{this.props.subtitle}</p>
      </div>
    );
  }
}