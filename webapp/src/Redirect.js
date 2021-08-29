import React from 'react';
import './App.css';



class Redirect extends React.Component { 

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
    window.location.replace("/")
    return (
      <div className="pageContainer">
      
    </div>

    )
    
    
          
      
  }
}
export default Redirect;
