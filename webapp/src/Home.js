import React from 'react';
import {Navbar, Nav, Container, DropdownButton, Dropdown} from 'react-bootstrap'
import Clock from 'react-live-clock';

import './Home.css';

var words = ['Minnesota', 'home', 'shells', 'sales job', 'towards', 'away', 'burns', 'glasses', 'NBA tickets', 'sandals', 'galaxies']
var intakeArray = ['1HuPcbunfGJD7xJxpKA9eW9_Va5w0piHd', '1fk1Rk7tp4I790RI6diBmFXUGiEwMsBtu', '1IZGSAvkU99XvZeLm9GaS1ABoz5dEMR0z', '1A0SVChLrRPGazPL3TtL4i0vhLmjgEunx', '17ZiHAQFiU1gKckGmWe9H7o8ZQizfaxG8', '1Jv7cA46280QCjyCl9YstInPdCN7kTol0', '1q1536MDJqZPNPzUVDdEqbLV_XHjlLQVj', '1hRreHylJ7oLyHABfyrKWERHzuQqpXD_J']
var thirtyThreeTest = ['1HuPcbunfGJD7xJxpKA9eW9_Va5w0piHd', '1fk1Rk7tp4I790RI6diBmFXUGiEwMsBtu', '1IZGSAvkU99XvZeLm9GaS1ABoz5dEMR0z']
var fiftyTest = ['1A0SVChLrRPGazPL3TtL4i0vhLmjgEunx', '17ZiHAQFiU1gKckGmWe9H7o8ZQizfaxG8']
var hundredTest = ['1Jv7cA46280QCjyCl9YstInPdCN7kTol0']

var unfilteredArray = ['1HuPcbunfGJD7xJxpKA9eW9_Va5w0piHd', '1fk1Rk7tp4I790RI6diBmFXUGiEwMsBtu', '1IZGSAvkU99XvZeLm9GaS1ABoz5dEMR0z', '1A0SVChLrRPGazPL3TtL4i0vhLmjgEunx', '17ZiHAQFiU1gKckGmWe9H7o8ZQizfaxG8', '1Jv7cA46280QCjyCl9YstInPdCN7kTol0', '1q1536MDJqZPNPzUVDdEqbLV_XHjlLQVj', '1hRreHylJ7oLyHABfyrKWERHzuQqpXD_J']

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

class Home extends React.Component { 

  //the states of emotion and source will be set to null initially until the user had filled out the form.
  constructor() {
    super();
    this.state = {
      page: "HOME",
      musicProvider: "Spotify"
    };
    
  } 

  componentDidMount()
  {
    
  }

  pageSelect = (requestedPage) => {
    this.setState({page: requestedPage.target.innerText})
  }

  musicProviderSelect = (provider) => {
    this.setState({musicProvider: provider.target.innerText})
  }
  
  render()
  {  
    console.log(getRandomInt(3))
    

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
      </Navbar> {/**/}
      <br></br>
        {this.state.page === "HOME" && <div className="pageContainer">
          <center> <p className="subheader">fled the scene</p>
          <p className="subheader">love cuts like ______</p>
          <img src="https://drive.google.com/uc?export=view&id=1ocuFnKiHPoAeAN7KOhCXYtE9oa94-9uk" alt="nickchase"></img>
          <br></br>
          <br></br>
          {words.map(word => (<div>
                <p className="subheader">{word}</p>   
              </div>) )} 
          <br></br>
          <br></br>
          <p className="subheader">favorite answer currently</p>
          <br></br>
          <p className="subheader">Iowa</p>
          </center>
          <br></br>
          <br></br>
          <br></br>
          <center>
            <br></br>
            <br></br>
            <Clock format={'dddd'} ticking={true} timezone={'US/Eastern'} className="dayOfWeek" /> 
            <br></br>
            
            
            <Clock format={'hh:mm a'} ticking={true} timezone={'US/Eastern'} />
            
            <h1 className="atl">ATLANTA</h1>
          </center>

          
          
          
          </div>}
        {this.state.page === "VIDEOS" && <div className="pageContainer">
          <center>
            <iframe src="https://www.youtube.com/embed/uOfIyX7ow1c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <br></br>
            <br></br>
            <br></br>
          </center>
          </div>}
        {this.state.page === "INTAKE" && <div className="pageContainer">
        
        
        <div className="row">
          {/*intakeArray.map(item => (<div className="column">
                
                
                <img src={"https://drive.google.com/uc?export=view&id=" + item} className="array"></img>
                <br></br>
                <br></br>
                
          </div>) )*/}

          {thirtyThreeTest.map(item => (<div className="column33">
                
                
               <center> <img src={"https://drive.google.com/uc?export=view&id=" + item}></img></center>
                <br></br>
                
          </div>) )}

          {fiftyTest.map(item => (<div className="column50">
                
                
          <center> <img src={"https://drive.google.com/uc?export=view&id=" + item}></img></center>
                <br></br>
                
          </div>) )}

          {hundredTest.map(item => (<div className="column100">
                
                
          <center> <img src={"https://drive.google.com/uc?export=view&id=" + item}></img></center>
                <br></br>
                
          </div>) )}
          
            </div>
            

          </div>}


        {this.state.page === "STREAM" && <div className="pageContainer">
          <center>
            {/*<DropdownButton size="md" id="dropdown-basic-button" title={this.state.musicProvider} onClick={e => e.preventDefault()} style={{margin: '0 auto', marginTop: '10px'}}>
                <Dropdown.Item onClick={e => this.musicProviderSelect(e)}>Spotify</Dropdown.Item>
                <Dropdown.Item onClick={e => this.musicProviderSelect(e)}>Apple Music</Dropdown.Item>
                <Dropdown.Item onClick={e => this.musicProviderSelect(e)}>Soundcloud</Dropdown.Item>
          </DropdownButton>
          <br></br>

          */}
          <iframe src="https://open.spotify.com/embed/artist/0L403rnpKcBVAwX9Kxmta5" className="streaming" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
              <br></br>
              <br></br>
              <iframe className="streaming" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src="https://embed.music.apple.com/us/album/semesterly/1554434311"></iframe>
              <br></br>
              <br></br>
              <iframe className="streaming" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/894891235&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style={{fontSize: '10px', color: '#cccccc', lineBreak: 'anywhere', wordBreak: 'normal', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis', fontFamily: 'Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif', fontWeight: '100'}}><a href="https://soundcloud.com/itsnickchase" title="Nick Chase" target="_blank" style={{color: '#cccccc', textDecoration: 'none'}}>Nick Chase</a> · <a href="https://soundcloud.com/itsnickchase/ive-been-down-but-im-mostly-up" title="i&#x27;ve been down, but i&#x27;m mostly up" target="_blank" style={{color: '#cccccc', textDecoration: 'none'}}>i&#x27;ve been down, but i&#x27;m mostly up</a></div>
           {/*} {this.state.musicProvider === "Spotify" && <div>
              
              </div>}
            {this.state.musicProvider === "Apple Music" && <div></div>}
        {this.state.musicProvider === "Soundcloud" && <div></div>}*/}
          </center>
          </div>}
        {this.state.page === "READING" && <div><h1>READING PAGE</h1></div>}
        <br></br>
            <br></br>
            <br></br>
      </div>

      )
  }
}
export default Home;

