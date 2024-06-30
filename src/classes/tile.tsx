import React from 'react';

import '../styles/tile.css'

export default class Tile extends React.Component {
  constructor(props) {
    super(props);
  }

  removeTags(str) {
    if (!str) {
      return ''
    } else {
      str = str.toString();
    }
    return str.replace(/(<([^>]+)>)/ig, '');
  }

  render() {
    const maxChars = 35;
    let subtitle = this.removeTags(this.props.subtitle);
    subtitle = subtitle.length > maxChars
        ? `${subtitle.substring(0, maxChars)}...`
        : subtitle;

    return (
      <div className={"tile " + (this.props.style || 'stacked')}>
        <img src={this.props.image} alt="" />
        <div className="tile-text">
          <h3 className="type-medium">{this.props.title}</h3>
          <p className="type-small color-text-light" dangerouslySetInnerHTML={{ __html: subtitle}}></p>
        </div>
      </div>
    );
  }
}