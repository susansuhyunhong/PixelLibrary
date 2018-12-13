import React, { Component } from 'react';
import { Row, Col, Card, CardTitle } from 'react-materialize'
import ImgTile from './ImgTile.js'

import './Styles.css';

class GridList extends Component {
  render() {
    return (
      <div className="GridList flex-container">
        <ImgTile srcName="1"/>
        <ImgTile srcName="2"/>
        <ImgTile srcName="3"/>
        <ImgTile srcName="4"/>
        <ImgTile srcName="5"/>
        <ImgTile srcName="6"/>
        <ImgTile srcName="7"/>
      </div>
    );
  }
}

export default GridList;

// <div className="flex-container">
//   <div>1</div>
//   <div>2</div>
//   <div>3</div>
//   <div>4</div>
//   <div>5</div>
//   <div>6</div>
// </div>

// <Row>
//   <Col s={12} m={3}>
//   <Card header={<CardTitle reveal image={"./img/office.jpg"} waves='light'/>}
//     title="Card Title"
//     reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}>
//     <p><a href="#">This is a link</a></p>
//   </Card>
//   </Col>
//   <Col s={12} m={2}>
//     For a simpler card with less markup, try using a card panel which just has padding and a shadow effect
//   </Col>
//   <Col s={12} m={5}>
//     <ImgTile className="img-tile"/>
//   </Col>
// </Row>
// <Row>
//   <Col s={12} m={1}>
//     <ImgTile/>
//   </Col>
// </Row>
