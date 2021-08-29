import React from 'react';
import './App.css';


//remove home.css, home dependecn
class App extends React.Component { 

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
      <div className="pageContainer">
      <center><h1>nickchasedev.netlify.app</h1></center>
    

      <div class="center-screen">
        <div className="definition">
        <h1 className="name" style={{marginTop: '0'}}>What a Damn Site.</h1>
        <span className="pronounce">[wɒt-ə-dæm saɪt.]&nbsp;&nbsp;&nbsp;noun</span>
        <br></br>
        <span className="text">A website development service dedicated to helping innovators and creators alike build the site of their dreams.
        <br></br>
        <br></br>
          “nickchasedev.netlify.app is currently under development by <a href="https://whatadamnsite.com" target="_blank" rel="noreferrer">What a Damn Site.</a>”
      <br></br>
      <br></br>
      based in Atlanta, delivering everywhere.
      </span>
      </div>
        </div>
        
        


      <div>
        


     
 </div>



      

      <div className="footer">
        <h1>all rights reserved.</h1>
        
      </div>
      
    </div>

    )
    
    
          
      
  }
}
export default App;
