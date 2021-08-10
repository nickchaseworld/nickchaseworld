import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import './Home.css';

var words = ['Minnesota', 'home', 'shells', 'sales job', 'towards', 'away', 'burns', 'glasses', 'NBA tickets', 'sandals', 'galaxies']

class Home extends React.Component { 

  //the states of emotion and source will be set to null initially until the user had filled out the form.
  constructor() {
    super();
    this.state = {
      page: "HOME"
    };
    
  } 

  componentDidMount()
  {
    
  }

  pageSelect = (requestedPage) => {
    this.setState({page: requestedPage.target.innerText})
  }
  
  render()
  {  

    return (   
      <div className="contentContainer"> {/* DO NOT REMOVE THIS DIV COMPONENT*/}
      <br></br>
      <br></br>
       <center><h1>NICK CHASE</h1></center>
       <br></br>
       
       <Navbar bg="white" variant="light">
        <Container className="navBarContainer">
        <Nav onClick={e => e.preventDefault()} defaultActiveKey="HOME">
        &emsp;&emsp;<Nav.Link href="HOME" onClick={e => this.pageSelect(e)} >HOME</Nav.Link>&emsp;&emsp;
        &emsp;&emsp;<Nav.Link href="VIDEOS" onClick={e => this.pageSelect(e)}>VIDEOS</Nav.Link>&emsp;&emsp;
        &emsp;&emsp;<Nav.Link href="INTAKE" onClick={e => this.pageSelect(e)}>INTAKE</Nav.Link>&emsp;&emsp;
        &emsp;&emsp;<Nav.Link href="STREAM" onClick={e => this.pageSelect(e)}>STREAM</Nav.Link>&emsp;&emsp;
        &emsp;&emsp;<Nav.Link href="READING" onClick={e => this.pageSelect(e)}>READING</Nav.Link>&emsp;&emsp;
        </Nav>
        </Container>
      </Navbar> {/**/}}
        {this.state.page == "HOME" && <div style={{margin: '0 auto'}}>
          <br></br>
          <center> <p className="subheader">fled the scene</p>
          <p className="subheader">love cuts like ______</p>
          <img src="https://drive.google.com/uc?export=view&id=1ocuFnKiHPoAeAN7KOhCXYtE9oa94-9uk"></img>
          <br></br>
          <br></br>
          {words.map(word => (<div>
                <p className="subheader">{word}</p>   
              </div>) )} 
          <br></br>
          <br></br>
          </center>
          
          
          
          </div>}
        {this.state.page == "VIDEOS" && <div><h1>VIDEOS PAGE</h1></div>}
        {this.state.page == "INTAKE" && <div><h1>INTAKE PAGE</h1></div>}
        {this.state.page == "STREAM" && <div><h1>STREAM PAGE</h1></div>}
        {this.state.page == "READING" && <div><h1>READING PAGE</h1></div>}
      </div>

      )
  }
}
export default Home;

