import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import './Home.css';

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
        <Nav onClick={e => e.preventDefault()}>
        &emsp;&emsp;<Nav.Link href="HOME" onClick={e => this.pageSelect(e)} >HOME</Nav.Link>&emsp;&emsp;
        &emsp;&emsp;<Nav.Link href="VIDEOS" onClick={e => this.pageSelect(e)}>VIDEOS</Nav.Link>&emsp;&emsp;
        &emsp;&emsp;<Nav.Link href="INTAKE" onClick={e => this.pageSelect(e)}>INTAKE</Nav.Link>&emsp;&emsp;
        &emsp;&emsp;<Nav.Link href="STREAM" onClick={e => this.pageSelect(e)}>STREAM</Nav.Link>&emsp;&emsp;
        &emsp;&emsp;<Nav.Link href="READING" onClick={e => this.pageSelect(e)}>READING</Nav.Link>&emsp;&emsp;
        </Nav>
        </Container>
      </Navbar>
      {this.state.page}
        {this.state.page == "HOME" && <div><h1>HOME PAGE</h1></div>}
        {this.state.page == "VIDEOS" && <div><h1>VIDEOS PAGE</h1></div>}
        {this.state.page == "INTAKE" && <div><h1>INTAKE PAGE</h1></div>}
        {this.state.page == "STREAM" && <div><h1>STREAM PAGE</h1></div>}
        {this.state.page == "READING" && <div><h1>READING PAGE</h1></div>}
      </div>

      )
  }
}
export default Home;

