import React from 'react';
import {Navbar, Nav, Container, DropdownButton, Dropdown} from 'react-bootstrap'
import { GoogleSpreadsheet } from "google-spreadsheet";
import Clock from 'react-live-clock';
import Slider from 'react-slick'
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

import './Home.css';



var unfilteredArray = []
var filteredArray = []
var renderIntake = []
var currentlyReading = []


var settings = {
  dots: true,
  infinite: true,
  speed: 300,
  autoplay: true,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
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
      images: [],
      books: [],
      videos: [],
      spotify: null,
      appleMusic: null,
      soundcloud: null,
      homePageImage: null,
      textIdx: 0,
      headerLineOne: null,
      headerLineTwo: null,
      mailingListHeader: null,
      mailingPlaceholder: null,
      wordReject: null,
      wordAccept: null,
      mailReject: null,
      mailAccept: null,
      footer: null,
      alertSongImage: null,
      alertSongSpotify: null,
      alertSongAppleMusic: null,
      alertSongSoundcloud: null,
      alertVideo: null,
      alertTextLineOne: null,
      alertTextLineTwo: null,
      alertTextColor: '#000000',
    };

    this.submitWord = this.submitWord.bind(this)
    this.submitWordAlt = this.submitWordAlt.bind(this)

    this.submitMailingList = this.submitMailingList.bind(this)
    this.submitMailingListAlt = this.submitMailingListAlt.bind(this)
    
  } 

  submitMailingList = (wordInput) => {
    //console.log(wordInput.key )
    if(wordInput.key === "Enter")
    {
      if(wordInput.target.value === "")
      {
        alert(this.state.mailReject)
      }
      else
      {

        doc.useServiceAccountAuth({
          client_email: CLIENT_EMAIL,
          private_key: PRIVATE_KEY,
        });
    
        // loads document properties and worksheets-
         doc.loadInfo();
        
        var sheet = doc.sheetsById["1051245958"];
        sheet.addRows([
          { Entry: wordInput.target.value}])
           
        alert(this.state.mailAccept)
        wordInput.target.value = ""
      }

    }
    
  }

  submitMailingListAlt = () => {
    var val = document.getElementById("mailingListInput").value
    if(val === "")
      {
        alert(this.state.mailReject)
      }
      else
      {

        doc.useServiceAccountAuth({
          client_email: CLIENT_EMAIL,
          private_key: PRIVATE_KEY,
        });
    
        // loads document properties and worksheets-
         doc.loadInfo();
        
        var sheet = doc.sheetsById["1051245958"];
        sheet.addRows([
          { Entry: val}])
           
        alert(this.state.mailAccept)
        document.getElementById("mailingListInput").value = ""
      }

  }

  submitWordAlt = () => {
    var val = document.getElementById("wordToSubmit").value
    if(val === "")
      {
        alert(this.state.wordReject)
      }
      else
      {

        doc.useServiceAccountAuth({
          client_email: CLIENT_EMAIL,
          private_key: PRIVATE_KEY,
        });
    
        // loads document properties and worksheets-
         doc.loadInfo();
        
        var sheet = doc.sheetsById["0"];
        sheet.addRows([
          { Words: val,  VISIBLE: 'N'}])
           
        alert(this.state.wordAccept)
        document.getElementById("wordToSubmit").value = ""
      }
  }

  submitWord = (wordInput) => {
    //console.log(wordInput.key )
    if(wordInput.key === "Enter")
    {
      if(wordInput.target.value === "")
      {
        alert(this.state.wordReject)
      }
      else
      {

        doc.useServiceAccountAuth({
          client_email: CLIENT_EMAIL,
          private_key: PRIVATE_KEY,
        });
    
        // loads document properties and worksheets-
         doc.loadInfo();
        
        var sheet = doc.sheetsById["0"];
        sheet.addRows([
          { Words: wordInput.target.value,  VISIBLE: 'N'}])
           
        alert(this.state.wordAccept)
        wordInput.target.value = ""
      }

    }
    
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
            if(((String(value[i]['_rawData'][1])).toUpperCase() === 'Y'))
            {
              homeSheet.push(String(value[i]['_rawData'][0]))
            }
          }
          return homeSheet
          
        }).then((finalArray) => {
          //console.log((finalArray[0].split("https://drive.google.com/file/d/")[1]).split("/view?usp=sharing")[0])
          
          this.setState({words: (["_____"]).concat(finalArray)})    
        });

        var sheet = doc.sheetsById["1952798230"];
        var row = sheet.getRows();
    
        var miscSheet = []
        //rows for home page
        row.then((value) => {
          for(var i = 0; i < value.length; i++)
          {
            if(String(value[i]['_rawData'][1]) === 'undefined')
            {
              miscSheet.push(null)
            }
            else
            {
              miscSheet.push(String(value[i]['_rawData'][1]))
            }
            
          }
          return miscSheet
          
        }).then((finalArray) => {
          this.setState({
            homePageImage: (finalArray[0].split("https://drive.google.com/file/d/")[1]).split("/view?usp=sharing")[0], headerLineOne: finalArray[1], headerLineTwo: finalArray[2], mailingListHeader: finalArray[3], mailingPlaceholder: finalArray[4], wordReject: finalArray[5], wordAccept: finalArray[6], mailReject: finalArray[7], mailAccept: finalArray[8], footer: finalArray[9]})
          
          //a catch all to only code text color and thing once
          if((finalArray[10] !== null) || (finalArray[14] !== null))
          {
            if(finalArray[10] !== null)
            {
              this.setState({alertSongImage: (finalArray[10].split("https://drive.google.com/file/d/")[1]).split("/view?usp=sharing")[0], alertSongSpotify: finalArray[11], alertSongAppleMusic: finalArray[12], alertSongSoundcloud: finalArray[13]})
            }
            if(finalArray[14] !== null)
            {
              this.setState({alertVideo: finalArray[14]})
            }
            console.log(finalArray)
            this.setState({alertTextLineOne: finalArray[15], alertTextLineTwo: finalArray[16], alertTextColor: finalArray[17]})
            console.log(this.state.alertSongImage)
            console.log(this.state.alertSongSpotify)
            console.log(this.state.alertSongAppleMusic)
            console.log(this.state.alertSongSpotify)
            console.log(this.state.alertVideo)
            console.log(this.state.alertTextLineOne)
            console.log(this.state.alertTextLineTwo)
            console.log(this.state.alertTextColor)
          }
        
      });
        

        var sheet = doc.sheetsById["2063393064"];
        var row = sheet.getRows();
    
        var bookSheet = []
        //rows for home page
        row.then((value) => {
          for(var i = 0; i < value.length; i++)
          {
            var unparsed = String(value[i]['_rawData'][0])
            
            var bookCoverImg = (unparsed.split("https://drive.google.com/file/d/")[1]).split("/view?usp=sharing")[0]
            var bookDescription = String(value[i]['_rawData'][1])
            bookSheet.push([bookCoverImg, bookDescription])
          }
          return bookSheet
          
        }).then((finalArray) => {this.setState({books: finalArray})});

        var sheet = doc.sheetsById["2075105674"];
        var row = sheet.getRows();
    
        var videosSheet = []
        //rows for home page
        row.then((value) => {
          for(var i = 0; i < value.length; i++)
          {
            videosSheet.push(String(value[i]['_rawData'][0]))
          }
          return videosSheet
          
        }).then((finalArray) => {this.setState({videos: finalArray})});
        

        var sheet = doc.sheetsById["374721241"];
        var row = sheet.getRows();
    
        var streamSheet = []
        //rows for home page
        row.then((value) => {
          for(var i = 0; i < value.length; i++)
          {
            streamSheet.push(String(value[i]['_rawData'][0]))
            
          }
          return streamSheet
          
        }).then((finalArray) => {this.setState({spotify: finalArray[0], appleMusic: finalArray[1], soundcloud: finalArray[2]})});
        

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
    this.timeout = setInterval(() => {
      let currentIdx = this.state.textIdx;
      this.setState({ textIdx: currentIdx + 1 });
    }, 3000);

    //console.log(sheetsToStates().then((values) => {console.log(values)}))
    //this.setState({words: sheetsToStates})
      
    
  }

  componentDidUnmount() {
    clearInterval(this.timeout);
  }
  
  pageSelect = (requestedPage) => {
    this.setState({page: requestedPage.target.innerText})
  }

  musicProviderSelect = (provider) => {
    this.setState({musicProvider: provider.target.innerText})
  }
  
  render()
  {  
    let textThatChanges = this.state.words[this.state.textIdx % this.state.words.length];

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
            {this.state.alertSongImage !== null && <div>

              <img src={"https://drive.google.com/uc?export=view&id=" + this.state.alertSongImage} className="alertImage" alt="nickchase"></img>
              <br></br>
              
                <div style={{marginTop: '10px', marginBottom: '10px'}}>
                  
                  {this.state.alertSongSpotify !== null && <svg width="73" height="40" viewBox="0 0 73 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill={this.state.alertTextColor} onClick={() => window.open(this.state.alertSongSpotify, '_blank').focus()} d="M30.7788 18.2895C24.5828 14.6098 14.3627 14.2716 8.44785 16.0667C7.49776 16.3549 6.49344 15.8188 6.20578 14.8689C5.91795 13.9185 6.4535 12.9147 7.40394 12.626C14.194 10.565 25.4809 10.963 32.6139 15.1972C33.4685 15.7045 33.7484 16.8078 33.2421 17.6607C32.7353 18.515 31.631 18.7968 30.7786 18.2895H30.7788ZM30.5759 23.7394C30.1412 24.4449 29.2188 24.6661 28.5144 24.233C23.349 21.0578 15.472 20.1379 9.36075 21.993C8.56835 22.2322 7.73119 21.7857 7.49053 20.9945C7.3758 20.6142 7.41657 20.2038 7.6039 19.8535C7.79123 19.5032 8.10983 19.2414 8.48985 19.1256C15.471 17.007 24.1499 18.033 30.0828 21.6791C30.7873 22.1129 31.009 23.0357 30.5759 23.7394ZM28.2238 28.9734C28.1419 29.1079 28.0343 29.2249 27.9072 29.3177C27.7801 29.4106 27.6359 29.4774 27.4828 29.5145C27.3298 29.5515 27.171 29.558 27.0155 29.5336C26.86 29.5091 26.7108 29.4543 26.5765 29.3721C22.0628 26.6134 16.3813 25.9904 9.69042 27.5188C9.53711 27.5538 9.37839 27.5583 9.22334 27.532C9.06828 27.5057 8.91993 27.4492 8.78675 27.3655C8.65356 27.2819 8.53816 27.1728 8.44714 27.0446C8.35611 26.9163 8.29125 26.7714 8.25624 26.6181C8.22099 26.4647 8.21634 26.3059 8.24256 26.1507C8.26878 25.9956 8.32535 25.8471 8.40903 25.7138C8.49271 25.5806 8.60186 25.4651 8.73022 25.3741C8.85859 25.2831 9.00365 25.2183 9.1571 25.1834C16.4791 23.5098 22.7598 24.23 27.8263 27.326C27.9606 27.408 28.0774 27.5157 28.1701 27.6429C28.2628 27.7701 28.3295 27.9143 28.3664 28.0673C28.4034 28.2203 28.4098 28.3791 28.3853 28.5345C28.3609 28.69 28.3061 28.8391 28.224 28.9734H28.2238ZM19.4082 1.24902C8.79283 1.24902 0.186768 9.85474 0.186768 20.4705C0.186768 31.0872 8.79283 39.6926 19.4084 39.6926C30.0245 39.6926 38.6304 31.0872 38.6304 20.4705C38.6304 9.85492 30.0246 1.24902 19.4084 1.24902"/>
                    <path fill={this.state.alertTextColor} onClick={() => window.open(this.state.alertSongAppleMusic, '_blank').focus()} d="M63.3574 6.14141C62.0339 7.67677 59.9541 9.0202 57.8743 8.82828C57.4962 6.52525 58.6306 4.22222 59.765 2.87879C61.0885 1.15152 63.3574 0 65.2481 0C65.4372 2.11111 64.6809 4.41414 63.3574 6.14141ZM65.2481 9.21212C66.3825 9.21212 69.7858 9.59596 72.0546 13.0505C71.8656 13.2424 68.0842 15.5455 68.0842 20.3434C68.0842 26.101 73 28.0202 73 28.0202C73 28.2121 72.2437 30.7071 70.5421 33.3939C69.0295 35.697 67.3279 38 64.8699 38C62.412 38 61.6557 36.4646 58.8197 36.4646C55.9836 36.4646 55.0382 38 52.7694 38C50.3115 38 48.4208 35.5051 46.9082 33.202C43.694 28.404 41.2361 19.7677 44.6393 14.0101C46.1519 11.1313 49.177 9.21212 52.2022 9.21212C54.6601 9.21212 56.929 10.9394 58.2525 10.9394C59.576 10.9394 62.2229 9.0202 65.2481 9.21212Z"/>
                  </svg>}
                  
                  {this.state.alertVideo !== null && <div>
                    <br></br>
                    <iframe src={this.state.alertVideo} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                      
                  </div>}
                  <br></br>
                  <br></br>
                  <p className="subheader" style={{color: this.state.alertTextColor}}>{this.state.alertTextLineOne}</p>
                  <p className="subheader" style={{color: this.state.alertTextColor}}>{this.state.alertTextLineTwo}</p>

                
                </div>
                
                
            

                <br></br>
                <br></br>
              </div>}


              
            
            <p className="subheader">{this.state.headerLineOne}</p>
            <p className="subheader">{this.state.headerLineTwo} {textThatChanges}</p>
            <br></br>
              <div class="element">
                <p className="subheader"><input type="text" id="wordToSubmit" onKeyPress={e => this.submitWord(e)}/></p>
              </div>
            <div class="element">
              <div className="submitArrow">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" onClick={e => this.submitWordAlt(e)}>
                  <title/>
                  <path d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm6,12H8.41l2.29,2.29a1,1,0,1,1-1.41,1.41l-4-4a1,1,0,0,1,0-1.41l4-4a1,1,0,0,1,1.41,1.41L8.41,11H18a1,1,0,0,1,0,2Z"/>
                </svg>
              </div>
           
          </div>
            <br></br>
            
            <br></br>
            {this.state.homePageImage !== null && <img src={"https://drive.google.com/uc?export=view&id=" + this.state.homePageImage} alt="nickchase"></img>}
            <br></br>
            <br></br>
            {this.state.words.map(word => (word != "_____" && <div>
                  <p className="subheader">{word}</p>   
                </div>) )} 
          </center>
          <br></br>
          <center>
          <br></br>
            <br></br>
            <br></br>
          {/*<p className="subheader">
            <i>{this.state.mailingListHeader}</i>
            <br></br>
            </p>
            <br></br>
            <div class="element" style={{marginTop: '5px'}}>
                <p className="subheader"><input placeholder={this.state.mailingPlaceholder} type="text" id="mailingListInput" onKeyPress={e => this.submitMailingList(e)}/></p>
              </div>
            <div class="element">
              <div className="submitArrow">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" onClick={e => this.submitMailingListAlt(e)}>
                  <title/>
                  <path d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm6,12H8.41l2.29,2.29a1,1,0,1,1-1.41,1.41l-4-4a1,1,0,0,1,0-1.41l4-4a1,1,0,0,1,1.41,1.41L8.41,11H18a1,1,0,0,1,0,2Z"/>
                </svg>
              </div>
           
    </div>
            <br></br>
            <br></br>*/}
            <br></br>
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
            {this.state.videos.map((item, index) => <div>
              <iframe src={item} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <br></br>
                <br></br>
              </div>)}
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

          <iframe src={this.state.spotify} className="streaming" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
              <br></br>
              <br></br>
              <iframe src={this.state.appleMusic} className="streaming" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"></iframe>
              <br></br>
              <br></br>
              <iframe className="streaming" src={this.state.soundcloud}></iframe><div style={{fontSize: '10px', color: '#cccccc', lineBreak: 'anywhere', wordBreak: 'normal', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis', fontFamily: 'Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif', fontWeight: '100'}}></div>
           {/*} {this.state.musicProvider === "Spotify" && <div>
              
              </div>}
            {this.state.musicProvider === "Apple Music" && <div></div>}
        {this.state.musicProvider === "Soundcloud" && <div></div>}*/}
          </center>
          </div>}
        {this.state.page === "READING" && <div className="pageContainer">
          
        <Slider {...settings}>
          {this.state.books.map((item, index) => <div className="bookSlide">
            <img src={"https://drive.google.com/uc?export=view&id=" + item[0]}></img>
                  <br></br>
                  <center><p className="bookDescription">{item[1]}</p></center>
          </div>)}
        </Slider>
          </div>}

        <br></br>
        <br></br>
        <br></br>
        <center><p className="footer">{this.state.footer}</p></center>
        <br></br>
        </div>

      )
  }
}
export default Home;

