import React, {Component, Fragment} from 'react';
import './_App.scss'
import Header from '../Header/Header';
import LogoSection from '../LogoSection/LogoSection';
import StatsSection from '../StatsSection/StatsSection';
import FourSteps from '../FourSteps/FourSteps';

class App extends Component {
  render() {
    return (
        <Fragment>
          <Header/>
          <LogoSection/>
          <StatsSection/>
          <FourSteps/>
        </Fragment>
    );
  }
}

export default App;
