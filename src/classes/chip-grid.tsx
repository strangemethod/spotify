import React from 'react';

import Chip from './chip.tsx'

import '../styles/chip-grid.css'


export default class ChipGrid extends React.Component {
  constructor(props) {
    super(props);
  }

  
  render() {
    const chips = this.props.chips.length > this.props.max 
        ? this.props.chips.slice(0, this.props.max)
        : this.props.chips;

    return (
      <ul className="chip-grid">
        {chips && chips.map((chip, idx) => (
            <Chip key={idx} title={chip.name} image={chip.images[0].url} />
          ))
        }
      </ul>
    );
  }
}