import React, {Component, Fragment} from 'react';
import './_App.scss'
import Header from '../Header/Header';
import LogoSection from '../LogoSection/LogoSection';
import StatsSection from '../StatsSection/StatsSection';

class App extends Component {
  render() {
    return (
        <Fragment>
          <Header/>
          <LogoSection/>
          <StatsSection/>
        </Fragment>
    );
  }
}

export default App;
