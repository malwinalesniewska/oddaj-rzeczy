import React, {Component, Fragment} from 'react';
import './_App.scss'
import Header from '../Header/Header';
import LogoSection from '../LogoSection/LogoSection'

class App extends Component {
  render() {
    return (
        <Fragment>
          <Header/>
          <LogoSection/>
        </Fragment>
    );
  }
}

export default App;
