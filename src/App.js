import React, { Component } from 'react';
import './App.css';
import './SeasonDisplay'
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner'



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

   displayContent (){
      if (this.state.errors) {
        return <div>Error: {this.state.errors}</div>
      }

      if(this.state.latitude) {
        return <SeasonDisplay latitude={this.state.latitude}/>
      }

      return <Spinner message='Please allow location'/>
    }

  render() {
    return(
      <div>
        {this.displayContent()}
      </div>
    )


  }
}

export default App;
