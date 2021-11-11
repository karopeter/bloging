import React from 'react';
import Header from './header/header.component';
import Forms from './components/Forms/Forms.component';
import Grid from './components/Grid/grid.component';
import './App.css';


class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    };
  }

  render() {
    return (
      <div className="app">
         <Header />
         <Grid />
         <Forms />
      </div>
    );
  }
}

export default App;