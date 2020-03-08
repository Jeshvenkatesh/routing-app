import React from 'react';
import logo from './logo.svg';
import './App.css';
import Topbar from './Topbar';
import Homepage from './HomePage';
import AboutPage from './aboutpage';
import ContactPage from './ContactPage';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import DetailsPage from './DetailsPage';
import WatchApp from './Watch';

class App extends React.Component {

  state={
    
  }
  render(){
    return (
      <BrowserRouter>
       <div>
        <Topbar/>
        <Switch>
          <Route path={'/about'}  component={AboutPage} />
          <Route path={'/contact'} component={ContactPage} />
          <Route path={'/Details/:VideoId'} component={DetailsPage} />
          <Route path={'/'} component={Homepage} />
        </Switch>
        
      </div>
      </BrowserRouter>
     
    );
  }
  
}

export default App;
