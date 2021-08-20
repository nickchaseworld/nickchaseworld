import React from 'react';
import {Navbar, Nav, Container, DropdownButton, Dropdown} from 'react-bootstrap'
import { GoogleSpreadsheet } from "google-spreadsheet";
import Clock from 'react-live-clock';
import Slider from 'react-slick'
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

import './Home.css';

var words = ['Minnesota', 'home', 'shells', 'sales job', 'towards', 'away', 'burns', 'glasses', 'NBA tickets', 'sandals', 'galaxies']
var intakeArray = ['1HuPcbunfGJD7xJxpKA9eW9_Va5w0piHd', '1fk1Rk7tp4I790RI6diBmFXUGiEwMsBtu', '1IZGSAvkU99XvZeLm9GaS1ABoz5dEMR0z', '1A0SVChLrRPGazPL3TtL4i0vhLmjgEunx', '17ZiHAQFiU1gKckGmWe9H7o8ZQizfaxG8', '1Jv7cA46280QCjyCl9YstInPdCN7kTol0', '1q1536MDJqZPNPzUVDdEqbLV_XHjlLQVj', '1hRreHylJ7oLyHABfyrKWERHzuQqpXD_J']
var thirtyThreeTest = ['1HuPcbunfGJD7xJxpKA9eW9_Va5w0piHd', '1fk1Rk7tp4I790RI6diBmFXUGiEwMsBtu', '1IZGSAvkU99XvZeLm9GaS1ABoz5dEMR0z']
var fiftyTest = ['1A0SVChLrRPGazPL3TtL4i0vhLmjgEunx', '17ZiHAQFiU1gKckGmWe9H7o8ZQizfaxG8']
var hundredTest = ['1Jv7cA46280QCjyCl9YstInPdCN7kTol0']

var unfilteredArray = ['1HuPcbunfGJD7xJxpKA9eW9_Va5w0piHd', '1fk1Rk7tp4I790RI6diBmFXUGiEwMsBtu', '1IZGSAvkU99XvZeLm9GaS1ABoz5dEMR0z', '1A0SVChLrRPGazPL3TtL4i0vhLmjgEunx', '17ZiHAQFiU1gKckGmWe9H7o8ZQizfaxG8', '1Jv7cA46280QCjyCl9YstInPdCN7kTol0', '1q1536MDJqZPNPzUVDdEqbLV_XHjlLQVj', '1hRreHylJ7oLyHABfyrKWERHzuQqpXD_J']
var filteredArray = []
var renderIntake = []
var currentlyReading = []
var pastReading = ['1nHBhWEAnYvVeHBIBr-miXWh-I_x_pdsh', '1dDdTgmj9EmwoI_q3lfgposju7H51Qpdl', '1aiNr-4bKMOvN7sK61RRcq3GAWRLGL-Rj', '1JlA1eoWlWcRkOqumG2uo9taxtatkJ3bQ']

var settings = {
  dots: true,
  infinite: true,
  speed: 300,
  autoplay: true,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1
};

const SPREADSHEET_ID = "1HWPDbItdCiM973f9z3nc3HuTeV0gaB6UwZp2o8lgzOU";
const SHEET_ID = "0";
const CLIENT_EMAIL = "admin-196@nickchaseworld.iam.gserviceaccount.com";
const PRIVATE_KEY = "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDCsNJUwRp0zL29\nN5aX0u0pOXGUiJPxZplVw5+UdAQ+J/UFz4sWOXe4vU6GIZ1+7hhkHg8l18yGwYae\n4xm3zXy5EgO/ZnqXSe02Faq/v4HSRKmwkX+TOipVhNZceFQ3/jgbvQJsHbBt58zc\nQCMr8z2ehdfpPvXu67FH1QlgYTfWS0onSi6d3xNBWnw9ES680P+Mx32Q8/ldWDpO\nxB4DptFbwQP3DqOomIViX3O4K5UHP3x0qSgXaeH3w5YPob6zizf75Rtw2kpZLvG8\nNkTmFXii5qfaeRSSKXFvfU8KIQlKwpK+tBUvYm5aSmQdCO9LHkk7yOcb2XNttDnT\n49PLJG5RAgMBAAECggEAPtbVvJdrU6G16Dnl+HETLUgmOdvvbG5CNaVjf4YGzI0X\nD94SNYUs+ErZ6n81F4AADWiKWRuTHzednPEOHv5LMGz5GrEYBnbNArTxnNxSKa0R\n3DTKKZoPifTLP6NzA3OhZoqWGpFmncLAo6Jr98aV7/GhY953gLtASEAhu6MFY7vv\nP8cCfFJbHON6Khd4jvm+FL5a9z99KkWTBQoo6DRs7mbmjvVtYS2jwW977kH4e/fr\nKVIt5qJtj5a1elXwNhXeFu8pn8IP9UvSFB3ECtslbBcEuGemhErWrQszuBMfHSx/\nwBKDppaZEgGVnSgn3lRYHNpjiyNquf5Pp0uTmCcBJQKBgQDgiLAgIyYNhwFkXjZM\nkW044caRiTV3JhIl5+k/tRrJIj6bxDc/HlnBZXfVO5JqUSNhtwd5voGxaEyefriM\nyS00LnXs4D9w5BVUFVeVk6R9Nz6aI2GXVAPAU5oOHpYpovaEpFh4LoApVFs0DZk6\nYEOg/oayr1YercaMHgzVpYpunwKBgQDd+XyoKZpZkdi5NidA1As18VlYTWAU3Mag\nd2WJhpnQpA9jISLJNjTg+NXigTj7GgWCBNZfLSEFDWwWFmgIWANd0mGPX0SAwVv+\nDz3zxvjdB18XUb4aQjvHZx36EeJueJ1p6ozyFNZp2vN9GDablNcqlz7JgXmEiWg3\n+MZdk6otDwKBgEaovURfy0nWgomjXFMcMNMFugdytnCYen2TTcPOqm9BZ5J9XSVv\n168Uz3E7Hgh3IDtP7fpSCV5bBEGcf1dOt/sD4/h3WX+dR1j+nmFj5Q/CouC+4adN\nuSB9Lq3i0j6oGgwD7BNmDs7yzQDEhsPoJ2AyuRDiPKfK6ACQNFnHjpjhAoGBAIqi\nPgO88ASO/V83fi6UAGhxUw6+TIrbFEa2KzlIUpqnTGDqGhK3AzGa1+J+OHtDVjtN\nECIjSmMgbeghmFnVtkyLj5j+tAcCPJUhKd0t4NISv4YN7H/z6+fu9B7xuoyqUg4L\ninnLH9q+/6GaVMi4neWgznsFnUJ0mx2SBzn8dqVrAoGAXQCThIjcSDAdFQ3EfJpH\nZSuiTpuW/PidHALg6e0GoGPfBZgo/yhNBV5IjBh0p4rrq6AOBymGZkzPft3IUDlb\nAM2DMyxR1NTS5w15USdAZZGdqmi72rt3J3RLvsOSeQAFPFPPsZLTLzWdMPMPdLwo\nD//YIsH1EYU+S1oYl8wgdcI=\n-----END PRIVATE KEY-----\n";

const doc = new GoogleSpreadsheet(SPREADSHEET_ID);



function getRandomInt(max) {
  return Math.floor(Math.random() * 3) + 1;
}

class Home extends React.Component { 

  //the states of emotion and source will be set to null initially until the user had filled out the form.
  constructor() {
    super();
    this.state = {
      page: "HOME",
      musicProvider: "Spotify",
      words: [],
      test: null,
      images: []
    };
    
  } 

  componentDidMount()
  {

    const sheetsToData = async () => {
      try {
        await doc.useServiceAccountAuth({
          client_email: CLIENT_EMAIL,
          private_key: PRIVATE_KEY,
        });
    
        // loads document properties and worksheets-
        await doc.loadInfo();
        
        var sheet = doc.sheetsById["0"];
        var row = sheet.getRows();
    
        var homeSheet = []
        //rows for home page
        row.then((value) => {
          for(var i = 0; i < value.length; i++)
          {
            homeSheet.push(String(value[i]['_rawData'][0]))
          }
          return homeSheet
          
        }).then((finalArray) => {this.setState({words: finalArray})});
        

        var sheet = doc.sheetsById["950251716"];
        var row = sheet.getRows();
    
        var intakeSheet = []
        //rows for home page
        row.then((value) => {
          for(var i = 0; i < value.length; i++)
          {
            var unparsed = String(value[i]['_rawData'][0])
            
            intakeSheet.push((unparsed.split("https://drive.google.com/file/d/")[1]).split("/view?usp=sharing")[0])
          }
          return intakeSheet
          
        }).then((finalArray) => {
            unfilteredArray = finalArray
            //slice notation includes start, does not include end, [x, y)
            while(unfilteredArray.length > 2)
            {
              var groupingIndex = getRandomInt(3)
              
              filteredArray.push(unfilteredArray.slice(0, groupingIndex))
              unfilteredArray = unfilteredArray.slice(groupingIndex)
              
            }
            if(unfilteredArray.length > 0)
            {
              filteredArray.push(unfilteredArray)
            }

            renderIntake = []

            for(var i = 0; i < filteredArray.length; i++)
            {
              for(var j = 0; j < filteredArray[i].length; j++)
              {
                renderIntake.push(filteredArray[i].length + filteredArray[i][j])
              }
            }
          
          
          
          
          this.setState({images: renderIntake})});
        
      } catch (e) {
        console.error('Error: ', e);
      }
    };

    sheetsToData()
    //console.log(sheetsToStates().then((values) => {console.log(values)}))
    //this.setState({words: sheetsToStates})
      
    
  }

  pageSelect = (requestedPage) => {
    this.setState({page: requestedPage.target.innerText})
  }

  musicProviderSelect = (provider) => {
    this.setState({musicProvider: provider.target.innerText})
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
            &emsp;&emsp;<Nav.Link href="STREAM" onClick={e => this.pageSelect(e)}>STREAM</Nav.Link>&emsp;&emsp;
            &emsp;&emsp;<Nav.Link href="VIDEOS" onClick={e => this.pageSelect(e)}>VIDEOS</Nav.Link>&emsp;&emsp;
            &emsp;&emsp;<Nav.Link href="HOME" onClick={e => this.pageSelect(e)} >HOME</Nav.Link>&emsp;&emsp;
            &emsp;&emsp;<Nav.Link href="INTAKE" onClick={e => this.pageSelect(e)}>INTAKE</Nav.Link>&emsp;&emsp;
            &emsp;&emsp;<Nav.Link href="READING" onClick={e => this.pageSelect(e)}>READING</Nav.Link>&emsp;&emsp;
          </Nav>
        </Container>
      </Navbar> {/**/}
      <br></br>

      {this.state.page === "HOME" && <div className="pageContainer">
          <center> 
            <p className="subheader">fled the scene</p>
            <p className="subheader">love cuts like ______</p>
            <img src="https://drive.google.com/uc?export=view&id=1ocuFnKiHPoAeAN7KOhCXYtE9oa94-9uk" alt="nickchase"></img>
            <br></br>
            <br></br>
            {this.state.words.map(word => (<div>
                  <p className="subheader">{word}</p>   
                </div>) )} 
          </center>
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

            {this.state.images.map(item => (
              item[0] === '1' ? 
                <div className="column1">
                  <center>
                    <img src={"https://drive.google.com/uc?export=view&id=" + item.slice(1)} style={{width: '100%'}}></img>
                    <br></br>
                    <br></br>
                  </center>
                </div> 
              : item[0] === '2' ? 
                  <div className="column2">
                    <center>
                      <img src={"https://drive.google.com/uc?export=view&id=" + item.slice(1)} style={{width: '100%'}}></img>
                      <br></br>
                    <br></br>
                    </center>
                  </div> 
              : item[0] === '3' ? 
                <div className="column3">
                  <center>
                    <img src={"https://drive.google.com/uc?export=view&id=" + item.slice(1)} style={{width: '100%'}}></img>
                    <br></br>
                    <br></br>
                    </center>
                </div> 
              : <div><h1>error</h1></div>)  )}
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
          <iframe src="https://open.spotify.com/embed/artist/0L403rnpKcBVAwX9Kxmta5?theme=0" className="streaming" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
              <br></br>
              <br></br>
              <iframe className="streaming" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src="https://embed.music.apple.com/us/album/semesterly/1554434311"></iframe>
              <br></br>
              <br></br>
              <iframe className="streaming" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/894891235&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style={{fontSize: '10px', color: '#cccccc', lineBreak: 'anywhere', wordBreak: 'normal', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis', fontFamily: 'Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif', fontWeight: '100'}}></div>
           {/*} {this.state.musicProvider === "Spotify" && <div>
              
              </div>}
            {this.state.musicProvider === "Apple Music" && <div></div>}
        {this.state.musicProvider === "Soundcloud" && <div></div>}*/}
          </center>
          </div>}
        {this.state.page === "READING" && <div className="pageContainer">
          
        <Slider {...settings}>
      
          {pastReading.map((bookCover, index) => <div className="bookSlide">
            <img src={"https://drive.google.com/uc?export=view&id=" + bookCover}></img>
                  <br></br>
                  <center><p className="bookDescription">"{index}: some sort of description"</p></center>
          </div>)}
        </Slider>
          </div>}

        <br></br>
        <br></br>
        <br></br>
        <center><p className="footer">nick chase</p></center>
        <br></br>
        </div>

      )
  }
}
export default Home;

