import logo from './logo.svg';
import React from 'react';
import './Home.css';

class Home extends React.Component { 

  //the states of emotion and source will be set to null initially until the user had filled out the form.
  constructor() {
    super();
    this.state = {

    };
    
  } 

  componentDidMount()
  {
    
  }
  
  render()
  {  

    return (   
      <div className="container"> {/* DO NOT REMOVE THIS DIV COMPONENT*/}
       <h1>burnerplate</h1>
      </div>

      )
  }
}
export default Home;

