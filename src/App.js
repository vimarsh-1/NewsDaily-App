
import './App.css';
import React from 'react';
import Navbar from './Components/Navbar';
import News from './Components/News';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  //Link
} from "react-router-dom";



class App extends React.Component {
  
constructor(props) {
  super(props);

  this.state = {
  };
}
pageSize = 6;
  render() {
    return<div>
      <Router>
    <Navbar/>
     
    <Switch>
          <Route exact path="/"><News key="Science" pageSize={this.pageSize} country="in" category="technology" /></Route>
          <Route exact path="/business"><News key="business" pageSize={this.pageSize} country="in" category="business" /></Route>
          <Route exact path="/Entertainment"><News key="Entertainment" pageSize={this.pageSize} country="in" category="Entertainment" /></Route>
          <Route exact path="/General"><News key="General" pageSize={this.pageSize} country="in" category="General" /></Route>
          <Route exact path="/Health"><News key="Health" pageSize={this.pageSize} country="in" category="Health" /></Route>
          <Route exact path="/Science"><News key="Science" pageSize={this.pageSize} country="in" category="Science" /></Route>
          <Route exact path="/Sports"><News key="Sports" pageSize={this.pageSize} country="in" category="Sports" /></Route>
          <Route exact path="/technology"><News key="technology" pageSize={this.pageSize} country="in" category="technology" /></Route>
    </Switch>
    </Router>
    </div>;
  }
}


export default App;


