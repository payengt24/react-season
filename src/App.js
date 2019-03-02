import React, { Component } from 'react';
import './App.css';
import './SeasonDisplay'
import SeasonDisplay from './SeasonDisplay';



class App extends Component {

  state = {
    latitude: '',
    errors: ''
  }

 componentDidMount() {
  window.navigator.geolocation.getCurrentPosition(
    (position) => {
      console.log(position);
      this.setState({latitude: position.coords.latitude})
    },
    (err) => {
      console.log(err);
      this.setState({errors: err.message})
    }
  ) 
 }

  render() {
    console.log(this.state);
    // debugger;
    if (this.state.errors) {
      return <div>Error: {this.state.errors}</div>
    }

    if(this.state.latitude) {
      return <SeasonDisplay latitude={this.state.latitude}/>
    }

    return <div>Loading</div>

  }
}

export default App;
