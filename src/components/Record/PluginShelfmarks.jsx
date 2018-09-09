import React, { Component } from 'react';
import { Card, CardHeader, CardBody, Button, Modal, ModalHeader, ModalBody } from 'reactstrap';



export default class PluginBiblio extends Component {

  constructor(props) {
    super(props);
    this.state = {
      modal: false,

    };
    this.toggle = this.toggle.bind(this);
  }
  getHtmlModalBody(d){
    return (
      <dl>
        <dt>Country:        </dt><dd>{d.country.val} </dd>
        <dt>Town:           </dt><dd>{d.town.val} </dd>
        <dt>Institution:    </dt><dd>{d.institution.val} </dd>
        <dt>Collection name:</dt><dd>{d.name.val} </dd>
        <dt>CMCL full name: </dt><dd>{d.fullsegnat.val} </dd>
      </dl>
    );
  }

  toggle(d) {
    if (d.id){
      this.setState({
        title: d.fullname.val,
        body: this.getHtmlModalBody(d)
      });
    } else {

    }
    this.setState({
      modal: !this.state.modal
    });
  }



  render() {
    return (
      <div className="plugins">

        <Card className="mt-2">
          <CardHeader><h5>{ this.props.data.metadata.tb_label }</h5></CardHeader>
          <CardBody>
          {
            this.props.data.data.map( (d, di) =>{
              return (
                <span key={di} className="mr-2">
                  <Button style={{marginRight: 0, paddingRight: 0}} color="link" onClick={ () => this.toggle(d) }>
                    {d.fullname.val}
                  </Button>
                  { d.shelfmark.val ? ', ' + d.shelfmark.val : ''}
                  { d.pp.val ? ', ' + d.pp.val : ''}
                </span>
              )
            })
          }
          </CardBody>
        </Card>

        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>{ this.state.title }</ModalHeader>
          <ModalBody>{ this.state.body }</ModalBody>
        </Modal>
      </div>
    )
  }
}
