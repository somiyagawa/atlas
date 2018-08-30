import React, { Component } from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faArrowCircleRight, faBug, faEye, faExternalLinkSquareAlt, faFilter, faIdBadge, faLink, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import MainTemplate from './components/mainLayout/MainTemplate';
import Home from './components/Home/Home';
import PathsMap from './components/PathsMap/PathsMap';
import Results from './components/Results/Results';
import SearchForm from './components/SearchForm/SearchForm';

import Places from './components/Places/Places';
import Titles from './components/Titles/Titles';
import Works from './components/Works/Works';
import Manuscripts from './components/Manuscripts/Manuscripts';
import Authors from './components/Authors/Authors';
import Colophons from './components/Colophons/Colophons';
import ViewOne from './components/Record/ViewOne';
import Charts from './components/Charts/Charts';


library.add(fas, fab, faArrowCircleRight, faBug, faEye, faExternalLinkSquareAlt, faFilter, faGithub, faIdBadge, faLink, faMapMarkerAlt);


class App extends Component {
  render() {
    return (
      <BrowserRouter basename="atlas">
        <Switch>
          <Route path='/map/:action?/:data?' component={PathsMap}/>
          <MainTemplate>
            <Route exact path='/' component={Home} />
            <Route path='/places' component={Places} />
            <Route path='/titles' component={Titles} />
            <Route path='/works' component={Works} />
            <Route path='/manuscripts' component={Manuscripts} />
            <Route path='/authors' component={Authors} />
            <Route path='/colophons' component={Colophons} />

            <Route exact path='/results/:table/:type' component={Results} />
            <Route exact path='/search/:table/' component={SearchForm} />
            <Route exact path='/read/:table/:id' component={ViewOne} />

            <Route exact path='/charts/:id?' component={Charts} />

          </MainTemplate>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
