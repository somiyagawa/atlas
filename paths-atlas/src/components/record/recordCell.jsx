import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import QuireMatrixView from './QuireMatrixView';



class RecordCell extends Component {

  render() {
    const val = this.props.val;
    const label = this.props.label;
    let className = [];
    if(this.props.coptic){
      className.push('coptic');
    }
    if(this.props.greek){
      className.push('greek');
    }

    return (
      <Row className="border-bottom mt-2 mb-2 pb-1">
        <Col sm="4" md="3">
          <label className="font-weight-bold">{label}</label>
        </Col>
        <Col>
          <div className={ className.join(' ') }>
            {  ( label === 'Quire layout' ) ? (<QuireMatrixView string={val} />) : val }
          </div>
        </Col>
	    </Row>
    );
  }
}

export default RecordCell;
