import React from 'react';

import Chip from './chip.tsx'

import '../styles/chip-grid.css'


export default class ChipGrid extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul className="chip-grid">
        {this.props.chips && this.props.chips.map((chip, idx) => (
            <Chip key={idx} title={chip.name} image={chip.images[0].url} />
          ))
        }
      </ul>
    );
  }
}