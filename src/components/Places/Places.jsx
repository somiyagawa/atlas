import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';

import SubHead from '../SubHead/SubHead';
import TextMd from './PlacesText.md';
import imgMarea from './marea.jpg';
import Loading from '../Loading/Loading';

class PlacePage extends Component {

  constructor(props) {
    super(props)
    this.state = { text: null }
  }
  componentWillMount() {
    fetch(TextMd).then((response) => response.text()).then((text) => {
      this.setState({ text: text })
    })
  }

  showContent(){
    if (!this.state.text){
      return (<Loading />);
    } else {
      return (<ReactMarkdown source={this.state.text} escapeHtml={false} />);
    }
  }

render() {

  return (
    <div>
      <div>
        <img className="img-fluid" src={imgMarea} alt="Marea" />
      </div>

      <SubHead tblabel="Places" tb="places" text="Introduction" />

      <div className="container">
        <div className="my-3 px-md-5 double-column">
          { this.showContent() }
        </div>
      </div>
    </div>
  );
  }
}

export default PlacePage;