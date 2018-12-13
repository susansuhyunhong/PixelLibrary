import React, { Component } from 'react';

import './Styles.css';

class ImgTile extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <img className="img-tile"
          src={'./img/' + this.props.srcName + '.jpeg'}/>
      </div>
    );
  }
}

export default ImgTile;
