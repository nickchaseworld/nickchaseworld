import React from 'react';
import {Navbar, Nav, Container, DropdownButton, Dropdown} from 'react-bootstrap'
import { GoogleSpreadsheet } from "google-spreadsheet";
import Clock from 'react-live-clock';
import Slider from 'react-slick'
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import loadingImage from './media/loadingImage.jpg'

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
      page: "DEFAULT",
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
      showPage: false,
      imagesAllLoaded: null,
      one: null,
      two: null,
      three: null,
      four: null,
      five: null,
    };

    this.submitWord = this.submitWord.bind(this)
    this.submitWordAlt = this.submitWordAlt.bind(this)

    this.submitMailingList = this.submitMailingList.bind(this)
    this.submitMailingListAlt = this.submitMailingListAlt.bind(this)
    
  } 

  submitMailingList = (wordInput) => {
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

        var sheet = doc.sheetsById["1972155988"];
        var row = sheet.getRows();
    
        var pagesSheet = []
        //rows for home page
        row.then((value) => {
          for(var i = 0; i < value.length; i++)
          {
            pagesSheet.push(String(value[i]['_rawData'][0]))
            
          }
          return pagesSheet
          
        }).then((finalArray) => {this.setState({one: finalArray[0], two: finalArray[1], three: finalArray[2], four: finalArray[3], five: finalArray[4]})});
        
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
            this.setState({alertTextLineOne: finalArray[15], alertTextLineTwo: finalArray[16], alertTextColor: finalArray[17]})    
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

    setTimeout(() => {
      this.setState({showPage: true});
  }, 5000);

    //console.log(sheetsToStates().then((values) => {console.log(values)}))
    //this.setState({words: sheetsToStates})
    //this.setState({showPage: true})
    
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
      
    

    return this.state.showPage === true ? (   
      <div className="contentContainer"> {/* DO NOT REMOVE THIS DIV COMPONENT*/}
        <br></br>
        <br></br>
        <center><h1>NICK CHASE</h1></center>
        <br></br>

        <Navbar bg="white" variant="light">
        <Container className="navBarContainer">
          <Nav onClick={e => e.preventDefault()} defaultActiveKey="HOME">
            &emsp;&emsp;<Nav.Link href="STREAM" onClick={e => this.pageSelect(e)}>{this.state.one}</Nav.Link>&emsp;&emsp;
            &emsp;&emsp;<Nav.Link href="VIDEOS" onClick={e => this.pageSelect(e)}>{this.state.two}</Nav.Link>&emsp;&emsp;
            &emsp;&emsp;<Nav.Link href="HOME" onClick={e => this.pageSelect(e)} >{this.state.three}</Nav.Link>&emsp;&emsp;
            &emsp;&emsp;<Nav.Link href="INTAKE" onClick={e => this.pageSelect(e)}>{this.state.four}</Nav.Link>&emsp;&emsp;
            &emsp;&emsp;<Nav.Link href="READING" onClick={e => this.pageSelect(e)}>{this.state.five}</Nav.Link>&emsp;&emsp;
          </Nav>
        </Container>
      </Navbar> {/**/}
      <br></br>

      {((this.state.page === this.state.three) || (this.state.page === "DEFAULT")) && <div className="pageContainer">
          <center> 
          

          {//FULL SCREEN ERROR LOAD, LOCALLY LOADED
          this.state.imagesAllLoaded === false && <h1>TRY RELOADING THE PAGE</h1>
          }
            {((this.state.alertSongImage !== null) && (((this.state.alertSongSpotify !== null) && (this.state.alertSongAppleMusic !== null))|| (this.state.alertSongSoundcloud !== null))) && <div>

              <img src={"https://drive.google.com/uc?export=view&id=" + this.state.alertSongImage} className="alertImage" alt="nickchase" onLoad={() => this.setState({imagesAllLoaded: true})} onError={() => this.setState({imagesAllLoaded: false})} ></img>
              
              
              <br></br>
              
                <div style={{marginTop: '10px'}}>
                  
                  {((this.state.alertSongSpotify !== null) && (this.state.alertSongAppleMusic !== null) && (this.state.alertSongSoundcloud === null)) && <svg width="73" height="40" viewBox="0 0 73 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill={this.state.alertTextColor} onClick={() => window.open(this.state.alertSongSpotify, '_blank').focus()} d="M30.7788 18.2895C24.5828 14.6098 14.3627 14.2716 8.44785 16.0667C7.49776 16.3549 6.49344 15.8188 6.20578 14.8689C5.91795 13.9185 6.4535 12.9147 7.40394 12.626C14.194 10.565 25.4809 10.963 32.6139 15.1972C33.4685 15.7045 33.7484 16.8078 33.2421 17.6607C32.7353 18.515 31.631 18.7968 30.7786 18.2895H30.7788ZM30.5759 23.7394C30.1412 24.4449 29.2188 24.6661 28.5144 24.233C23.349 21.0578 15.472 20.1379 9.36075 21.993C8.56835 22.2322 7.73119 21.7857 7.49053 20.9945C7.3758 20.6142 7.41657 20.2038 7.6039 19.8535C7.79123 19.5032 8.10983 19.2414 8.48985 19.1256C15.471 17.007 24.1499 18.033 30.0828 21.6791C30.7873 22.1129 31.009 23.0357 30.5759 23.7394ZM28.2238 28.9734C28.1419 29.1079 28.0343 29.2249 27.9072 29.3177C27.7801 29.4106 27.6359 29.4774 27.4828 29.5145C27.3298 29.5515 27.171 29.558 27.0155 29.5336C26.86 29.5091 26.7108 29.4543 26.5765 29.3721C22.0628 26.6134 16.3813 25.9904 9.69042 27.5188C9.53711 27.5538 9.37839 27.5583 9.22334 27.532C9.06828 27.5057 8.91993 27.4492 8.78675 27.3655C8.65356 27.2819 8.53816 27.1728 8.44714 27.0446C8.35611 26.9163 8.29125 26.7714 8.25624 26.6181C8.22099 26.4647 8.21634 26.3059 8.24256 26.1507C8.26878 25.9956 8.32535 25.8471 8.40903 25.7138C8.49271 25.5806 8.60186 25.4651 8.73022 25.3741C8.85859 25.2831 9.00365 25.2183 9.1571 25.1834C16.4791 23.5098 22.7598 24.23 27.8263 27.326C27.9606 27.408 28.0774 27.5157 28.1701 27.6429C28.2628 27.7701 28.3295 27.9143 28.3664 28.0673C28.4034 28.2203 28.4098 28.3791 28.3853 28.5345C28.3609 28.69 28.3061 28.8391 28.224 28.9734H28.2238ZM19.4082 1.24902C8.79283 1.24902 0.186768 9.85474 0.186768 20.4705C0.186768 31.0872 8.79283 39.6926 19.4084 39.6926C30.0245 39.6926 38.6304 31.0872 38.6304 20.4705C38.6304 9.85492 30.0246 1.24902 19.4084 1.24902"/>
                    <path fill={this.state.alertTextColor} onClick={() => window.open(this.state.alertSongAppleMusic, '_blank').focus()} d="M63.3574 6.14141C62.0339 7.67677 59.9541 9.0202 57.8743 8.82828C57.4962 6.52525 58.6306 4.22222 59.765 2.87879C61.0885 1.15152 63.3574 0 65.2481 0C65.4372 2.11111 64.6809 4.41414 63.3574 6.14141ZM65.2481 9.21212C66.3825 9.21212 69.7858 9.59596 72.0546 13.0505C71.8656 13.2424 68.0842 15.5455 68.0842 20.3434C68.0842 26.101 73 28.0202 73 28.0202C73 28.2121 72.2437 30.7071 70.5421 33.3939C69.0295 35.697 67.3279 38 64.8699 38C62.412 38 61.6557 36.4646 58.8197 36.4646C55.9836 36.4646 55.0382 38 52.7694 38C50.3115 38 48.4208 35.5051 46.9082 33.202C43.694 28.404 41.2361 19.7677 44.6393 14.0101C46.1519 11.1313 49.177 9.21212 52.2022 9.21212C54.6601 9.21212 56.929 10.9394 58.2525 10.9394C59.576 10.9394 62.2229 9.0202 65.2481 9.21212Z"/>
                  </svg>}

                  {((this.state.alertSongSpotify !== null) && (this.state.alertSongAppleMusic !== null) && (this.state.alertSongSoundcloud !== null)) && 
                    <svg width="145" height="40" viewBox="0 0 145 40" fill="none" xmlns="http://www.w3.org/2000/svg" style={{marginLeft: '20px'}}>
                    <path fill={this.state.alertTextColor} onClick={() => window.open(this.state.alertSongSpotify, '_blank').focus()} d="M30.5921 18.2895C24.3961 14.6098 14.1759 14.2716 8.26108 16.0667C7.31099 16.3549 6.30667 15.8188 6.01901 14.8689C5.73118 13.9185 6.26673 12.9147 7.21717 12.626C14.0072 10.565 25.2942 10.963 32.4272 15.1972C33.2817 15.7045 33.5616 16.8078 33.0553 17.6607C32.5485 18.515 31.4442 18.7968 30.5919 18.2895H30.5921ZM30.3891 23.7394C29.9544 24.4449 29.032 24.6661 28.3276 24.233C23.1623 21.0578 15.2853 20.1379 9.17398 21.993C8.38158 22.2322 7.54442 21.7857 7.30376 20.9945C7.18903 20.6142 7.2298 20.2038 7.41713 19.8535C7.60446 19.5032 7.92306 19.2414 8.30308 19.1256C15.2842 17.007 23.9631 18.033 29.8961 21.6791C30.6005 22.1129 30.8222 23.0357 30.3891 23.7394ZM28.037 28.9734C27.9552 29.1079 27.8476 29.2249 27.7204 29.3177C27.5933 29.4106 27.4491 29.4774 27.2961 29.5145C27.1431 29.5515 26.9842 29.558 26.8287 29.5336C26.6732 29.5091 26.524 29.4543 26.3897 29.3721C21.876 26.6134 16.1946 25.9904 9.50365 27.5188C9.35034 27.5538 9.19162 27.5583 9.03657 27.532C8.88151 27.5057 8.73316 27.4492 8.59998 27.3655C8.46679 27.2819 8.3514 27.1728 8.26037 27.0446C8.16935 26.9163 8.10448 26.7714 8.06948 26.6181C8.03423 26.4647 8.02958 26.3059 8.05579 26.1507C8.08201 25.9956 8.13858 25.8471 8.22226 25.7138C8.30594 25.5806 8.41509 25.4651 8.54346 25.3741C8.67182 25.2831 8.81688 25.2183 8.97033 25.1834C16.2923 23.5098 22.573 24.23 27.6395 27.326C27.7738 27.408 27.8907 27.5157 27.9833 27.6429C28.076 27.7701 28.1427 27.9143 28.1797 28.0673C28.2166 28.2203 28.223 28.3791 28.1986 28.5345C28.1741 28.69 28.1193 28.8391 28.0372 28.9734H28.037ZM19.2215 1.24902C8.60606 1.24902 0 9.85474 0 20.4705C0 31.0872 8.60606 39.6926 19.2216 39.6926C29.8377 39.6926 38.4436 31.0872 38.4436 20.4705C38.4436 9.85492 29.8379 1.24902 19.2216 1.24902"/>
                    <path fill={this.state.alertTextColor} onClick={() => window.open(this.state.alertSongAppleMusic, '_blank').focus()} d="M63.1706 6.14141C61.8471 7.67677 59.7673 9.0202 57.6875 8.82828C57.3094 6.52525 58.4438 4.22222 59.5783 2.87879C60.9018 1.15152 63.1706 0 65.0613 0C65.2504 2.11111 64.4941 4.41414 63.1706 6.14141ZM65.0613 9.21212C66.1957 9.21212 69.599 9.59596 71.8679 13.0505C71.6788 13.2424 67.8974 15.5455 67.8974 20.3434C67.8974 26.101 72.8132 28.0202 72.8132 28.0202C72.8132 28.2121 72.0569 30.7071 70.3553 33.3939C68.8427 35.697 67.1411 38 64.6832 38C62.2253 38 61.469 36.4646 58.6329 36.4646C55.7968 36.4646 54.8515 38 52.5826 38C50.1247 38 48.234 35.5051 46.7214 33.202C43.5072 28.404 41.0493 19.7677 44.4526 14.0101C45.9651 11.1313 48.9903 9.21212 52.0154 9.21212C54.4733 9.21212 56.7422 10.9394 58.0657 10.9394C59.3892 10.9394 62.0362 9.0202 65.0613 9.21212Z"/>
                    <g clip-path="url(#clip0)">
                    <path fill={this.state.alertTextColor} onClick={() => window.open(this.state.alertSongSoundcloud, '_blank').focus()} d="M78.7624 18.3146C78.6227 18.3146 78.5117 18.4222 78.4936 18.5755L78.0037 22.2783L78.4936 25.9174C78.5117 26.0707 78.6226 26.1776 78.7624 26.1776C78.8978 26.1776 79.0081 26.0715 79.0297 25.9187V25.918V25.9187L79.6104 22.2783L79.0297 18.5748C79.0088 18.4221 78.8972 18.3146 78.7624 18.3146ZM81.5175 16.2915C81.4945 16.1324 81.3799 16.0227 81.2387 16.0227C81.0968 16.0227 80.9793 16.136 80.9599 16.2915C80.9599 16.2929 80.3013 22.2783 80.3013 22.2783L80.9599 28.1326C80.9786 28.2896 81.0961 28.4029 81.2387 28.4029C81.3792 28.4029 81.4938 28.2925 81.5168 28.134L82.266 22.2783L81.5175 16.2915V16.2915ZM91.8954 10.7692C91.6252 10.7692 91.4018 10.9893 91.3889 11.2689L90.8644 22.2833L91.3889 29.4014C91.4026 29.6796 91.6252 29.8989 91.8954 29.8989C92.1642 29.8989 92.3868 29.6788 92.4026 29.4V29.4022L92.9956 22.2833L92.4026 11.2689C92.3867 10.9893 92.1641 10.7692 91.8954 10.7692V10.7692ZM86.5242 14.5975C86.3167 14.5975 86.1474 14.7624 86.1307 14.9824L85.54 22.2804L86.1307 29.3412C86.1466 29.5598 86.3166 29.7247 86.5242 29.7247C86.7295 29.7247 86.8988 29.5598 86.9169 29.3412L87.5883 22.2804L86.9169 14.9809C86.8988 14.7624 86.7295 14.5975 86.5242 14.5975ZM97.3538 29.8983C97.6888 29.8983 97.9612 29.6294 97.9749 29.2852L98.4893 22.2869L97.9756 7.62269C97.9619 7.27856 97.6895 7.00974 97.3546 7.00974C97.0166 7.00974 96.7436 7.2793 96.7327 7.62343L96.2767 22.2862L96.7327 29.2874C96.7436 29.6287 97.0166 29.8983 97.3538 29.8983V29.8983ZM108.529 29.9313C108.99 29.9313 109.37 29.5535 109.379 29.0889V29.0939V29.0889L109.738 22.2912L109.379 5.35516C109.371 4.89133 108.99 4.51285 108.528 4.51285C108.067 4.51285 107.686 4.89066 107.678 5.3559L107.358 22.2855C107.358 22.2963 107.678 29.0931 107.678 29.0931C107.686 29.5534 108.067 29.9313 108.529 29.9313V29.9313ZM102.899 29.9047C103.3 29.9047 103.623 29.5842 103.634 29.1757V29.1806L104.071 22.2884L103.634 7.51808C103.623 7.10942 103.299 6.78974 102.898 6.78974C102.494 6.78974 102.17 7.10949 102.162 7.51808L101.773 22.2891L102.162 29.18C102.171 29.5842 102.494 29.9047 102.899 29.9047V29.9047ZM89.1993 29.8402C89.4378 29.8402 89.631 29.6502 89.649 29.4L90.2816 22.2805L89.649 15.5079C89.6317 15.2578 89.4386 15.0692 89.1993 15.0692C88.9573 15.0692 88.7642 15.2591 88.7491 15.5108L88.1921 22.2805L88.7491 29.3994C88.7649 29.6502 88.9573 29.8402 89.1993 29.8402ZM83.8707 29.4502C84.045 29.4502 84.1862 29.3133 84.2064 29.124L84.9168 22.279L84.2071 15.176C84.1861 14.9861 84.0449 14.849 83.8706 14.849C83.6941 14.849 83.5529 14.9867 83.5348 15.176L82.9095 22.279L83.5348 29.1226C83.5522 29.3125 83.6934 29.4502 83.8707 29.4502V29.4502ZM105.703 7.27216C105.267 7.27216 104.917 7.61703 104.909 8.05863L104.554 22.2898L104.909 29.1376C104.917 29.5735 105.266 29.9183 105.703 29.9183C106.138 29.9183 106.485 29.5742 106.495 29.1326V29.1383L106.893 22.2905L106.495 8.05715C106.485 7.61703 106.138 7.27216 105.703 7.27216V7.27216ZM94.6145 29.9126C94.9157 29.9126 95.1642 29.6681 95.1787 29.3562L95.732 22.2854L95.1787 8.75181C95.1635 8.4392 94.9157 8.1955 94.6145 8.1955C94.3105 8.1955 94.0626 8.43994 94.0496 8.75181L93.5597 22.2854L94.0504 29.3591C94.0626 29.6681 94.3104 29.9126 94.6145 29.9126ZM100.793 29.2452V29.2415L101.269 22.2876L100.793 7.1295C100.782 6.75317 100.484 6.4578 100.115 6.4578C99.745 6.4578 99.4467 6.75243 99.4367 7.1295L99.0145 22.2869L99.4374 29.2444C99.4475 29.6172 99.7458 29.9118 100.115 29.9118C100.484 29.9118 100.781 29.6172 100.793 29.2423V29.2452H100.793ZM136.758 13.55C135.629 13.55 134.552 13.7773 133.571 14.1866C132.915 6.79688 126.688 1 119.091 1C117.232 1 115.42 1.3642 113.82 1.97999C113.198 2.21945 113.032 2.46604 113.026 2.94422V28.9677C113.033 29.4695 113.424 29.8874 113.916 29.9369C113.937 29.9391 136.611 29.9505 136.758 29.9505C141.308 29.9505 144.998 26.2793 144.998 21.7507C144.998 17.222 141.309 13.55 136.758 13.55V13.55ZM111.342 2.92132C110.847 2.92132 110.441 3.32566 110.433 3.82243L110.062 22.2934L110.434 28.9971C110.441 29.4868 110.847 29.8904 111.342 29.8904C111.835 29.8904 112.242 29.4868 112.249 28.99V28.9978L112.653 22.2934L112.249 3.82101C112.242 3.32566 111.835 2.92132 111.342 2.92132V2.92132ZM84.6582 35.1632C83.6834 34.9352 83.4196 34.8133 83.4196 34.429C83.4196 34.1581 83.6394 33.8778 84.2979 33.8778C84.8606 33.8778 85.3001 34.105 85.695 34.5072L86.5819 33.6512C86.002 33.0483 85.2994 32.6898 84.3426 32.6898C83.1294 32.6898 82.1459 33.3716 82.1459 34.4821C82.1459 35.6879 82.937 36.0464 84.0696 36.308C85.2288 36.5697 85.44 36.7453 85.44 37.1389C85.44 37.6021 85.0963 37.8035 84.3686 37.8035C83.78 37.8035 83.2266 37.6027 82.7958 37.1031L81.9088 37.8903C82.3742 38.5721 83.2712 39.0001 84.2978 39.0001C85.9766 39.0001 86.7143 38.2136 86.7143 37.0515C86.7144 35.7224 85.6337 35.3904 84.6582 35.1632V35.1632ZM90.3168 32.6898C88.6395 32.6898 87.6474 33.9832 87.6474 35.845C87.6474 37.7068 88.6394 38.9993 90.3168 38.9993C91.9941 38.9993 92.9876 37.7068 92.9876 35.845C92.9876 33.9832 91.9941 32.6898 90.3168 32.6898V32.6898ZM90.3168 37.7856C89.3247 37.7856 88.9111 36.9375 88.9111 35.8456C88.9111 34.7531 89.3246 33.905 90.3168 33.905C91.3103 33.905 91.7224 34.7531 91.7224 35.8456C91.7224 36.9375 91.3103 37.7856 90.3168 37.7856ZM97.9511 36.2213C97.9511 37.1999 97.4669 37.8035 96.6859 37.8035C95.9042 37.8035 95.4301 37.1826 95.4301 36.2041V32.7852H94.1995V36.2214C94.1995 38.0036 95.2017 39.0001 96.6859 39.0001C98.2494 39.0001 99.1809 37.977 99.1809 36.2042V32.7852H97.9511V36.2213ZM104.486 35.3733C104.486 35.7145 104.503 36.483 104.503 36.7103C104.424 36.5526 104.222 36.2472 104.073 36.0192L101.894 32.7846H100.717V38.9041H101.93V36.2113C101.93 35.8702 101.912 35.1015 101.912 34.8743C101.991 35.0313 102.194 35.3374 102.342 35.5654L104.6 38.904H105.698V32.7845H104.486V35.3733H104.486V35.3733ZM109.203 32.7852H107.279V38.9047H109.114C110.696 38.9047 112.26 37.995 112.26 35.845C112.26 33.6068 110.959 32.7852 109.203 32.7852V32.7852ZM109.114 37.716H108.509V33.9746H109.159C110.459 33.9746 110.996 34.5947 110.996 35.845C110.995 36.964 110.406 37.716 109.114 37.716ZM116.063 33.9043C116.617 33.9043 116.968 34.1495 117.188 34.5689L118.33 34.0448C117.943 33.2497 117.24 32.6898 116.081 32.6898C114.475 32.6898 113.349 33.9832 113.349 35.845C113.349 37.7763 114.429 38.9993 116.037 38.9993C117.153 38.9993 117.89 38.4839 118.312 37.6186L117.276 37.0063C116.951 37.549 116.625 37.7849 116.072 37.7849C115.15 37.7849 114.614 36.9454 114.614 35.845C114.613 34.7094 115.142 33.9043 116.063 33.9043V33.9043ZM120.625 32.7852H119.395V38.9047H123.091V37.6974H120.625V32.7852V32.7852ZM126.331 32.6898C124.652 32.6898 123.66 33.9832 123.66 35.845C123.66 37.7068 124.652 38.9993 126.331 38.9993C128.008 38.9993 129.001 37.7068 129.001 35.845C129.001 33.9832 128.008 32.6898 126.331 32.6898V32.6898ZM126.331 37.7856C125.337 37.7856 124.925 36.9375 124.925 35.8456C124.925 34.7531 125.337 33.905 126.331 33.905C127.322 33.905 127.735 34.7531 127.735 35.8456C127.735 36.9375 127.322 37.7856 126.331 37.7856ZM133.964 36.2213C133.964 37.1999 133.482 37.8035 132.7 37.8035C131.917 37.8035 131.443 37.1826 131.443 36.2041V32.7852H130.214V36.2214C130.214 38.0036 131.215 39.0001 132.7 39.0001C134.264 39.0001 135.194 37.977 135.194 36.2042V32.7852H133.964V36.2213V36.2213ZM138.655 32.7852H136.732V38.9047H138.567C140.149 38.9047 141.712 37.995 141.712 35.845C141.712 33.6068 140.412 32.7852 138.655 32.7852V32.7852ZM138.567 37.716H137.961V33.9746H138.612C139.911 33.9746 140.447 34.5947 140.447 35.845C140.447 36.964 139.858 37.716 138.567 37.716V37.716Z"/>
                    </g>
                    <defs>
                    <clipPath id="clip0">
                    <rect width="67" height="38" fill="white" transform="translate(78 1)"/>
                    </clipPath>
                    </defs>
                  </svg>}

                  {((this.state.alertSongSpotify === null) && (this.state.alertSongAppleMusic === null) && (this.state.alertSongSoundcloud !== null)) && 
                    <svg width="67" height="38" viewBox="0 0 67 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0)">
                    <path fill={this.state.alertTextColor} onClick={() => window.open(this.state.alertSongSoundcloud, '_blank').focus()} d="M0.762444 17.3146C0.622655 17.3146 0.511704 17.4222 0.493629 17.5755L0.00372314 21.2783L0.493629 24.9174C0.511704 25.0707 0.622587 25.1776 0.762444 25.1776C0.897834 25.1776 1.00811 25.0715 1.0297 24.9187V24.918V24.9187L1.61039 21.2783L1.0297 17.5748C1.00879 17.4221 0.897157 17.3146 0.762444 17.3146ZM3.51755 15.2915C3.49446 15.1324 3.37992 15.0227 3.23871 15.0227C3.09676 15.0227 2.97931 15.136 2.95988 15.2915C2.95988 15.2929 2.30135 21.2783 2.30135 21.2783L2.95988 27.1326C2.97863 27.2896 3.09608 27.4029 3.23871 27.4029C3.37918 27.4029 3.49379 27.2925 3.5168 27.134L4.26605 21.2783L3.51755 15.2915V15.2915ZM13.8954 9.76925C13.6252 9.76925 13.4018 9.9893 13.3889 10.2689L12.8644 21.2833L13.3889 28.4014C13.4026 28.6796 13.6252 28.8989 13.8954 28.8989C14.1642 28.8989 14.3868 28.6788 14.4026 28.4V28.4022L14.9956 21.2833L14.4026 10.2689C14.3867 9.9893 14.1641 9.76925 13.8954 9.76925V9.76925ZM8.52417 13.5975C8.31669 13.5975 8.14739 13.7624 8.13073 13.9824L7.53996 21.2804L8.13073 28.3412C8.14657 28.5598 8.31662 28.7247 8.52417 28.7247C8.72949 28.7247 8.8988 28.5598 8.91687 28.3412L9.58833 21.2804L8.91687 13.9809C8.8988 13.7624 8.72949 13.5975 8.52417 13.5975ZM19.3538 28.8983C19.6888 28.8983 19.9612 28.6294 19.9749 28.2852L20.4893 21.2869L19.9756 6.62269C19.9619 6.27856 19.6895 6.00974 19.3546 6.00974C19.0166 6.00974 18.7436 6.2793 18.7327 6.62343L18.2767 21.2862L18.7327 28.2874C18.7436 28.6287 19.0166 28.8983 19.3538 28.8983V28.8983ZM30.5285 28.9313C30.9896 28.9313 31.3701 28.5535 31.3787 28.0889V28.0939V28.0889L31.7375 21.2912L31.3786 4.35516C31.3707 3.89133 30.9896 3.51285 30.5284 3.51285C30.0666 3.51285 29.6855 3.89066 29.6783 4.3559L29.3577 21.2855C29.3577 21.2963 29.6783 28.0931 29.6783 28.0931C29.6856 28.5534 30.0674 28.9313 30.5285 28.9313V28.9313ZM24.8986 28.9047C25.3 28.9047 25.6234 28.5842 25.6343 28.1757V28.1806L26.0708 21.2884L25.6335 6.51808C25.6227 6.10942 25.2992 5.78974 24.8979 5.78974C24.4937 5.78974 24.1702 6.10949 24.1616 6.51808L23.7733 21.2891L24.1623 28.18C24.171 28.5842 24.4944 28.9047 24.8986 28.9047V28.9047ZM11.1993 28.8402C11.4378 28.8402 11.631 28.6502 11.649 28.4L12.2816 21.2805L11.649 14.5079C11.6317 14.2578 11.4386 14.0692 11.1993 14.0692C10.9573 14.0692 10.7642 14.2591 10.7491 14.5108L10.1921 21.2805L10.7491 28.3994C10.7649 28.6502 10.9573 28.8402 11.1993 28.8402ZM5.87068 28.4502C6.04499 28.4502 6.1862 28.3133 6.20638 28.124L6.91677 21.279L6.20706 14.176C6.18614 13.9861 6.04493 13.849 5.87061 13.849C5.69407 13.849 5.55285 13.9867 5.53485 14.176L4.90948 21.279L5.53485 28.1226C5.55218 28.3125 5.69339 28.4502 5.87068 28.4502V28.4502ZM27.7028 6.27216C27.2669 6.27216 26.9174 6.61703 26.9088 7.05863L26.5544 21.2898L26.9088 28.1376C26.9175 28.5735 27.2662 28.9183 27.7028 28.9183C28.1379 28.9183 28.4853 28.5742 28.4953 28.1326V28.1383L28.893 21.2905L28.4953 7.05715C28.4852 6.61703 28.1379 6.27216 27.7028 6.27216V6.27216ZM16.6145 28.9126C16.9157 28.9126 17.1642 28.6681 17.1787 28.3562L17.732 21.2854L17.1787 7.75181C17.1635 7.4392 16.9157 7.1955 16.6145 7.1955C16.3105 7.1955 16.0626 7.43994 16.0496 7.75181L15.5597 21.2854L16.0504 28.3591C16.0626 28.6681 16.3104 28.9126 16.6145 28.9126ZM22.7934 28.2452V28.2415L23.2689 21.2876L22.7934 6.1295C22.7818 5.75317 22.4835 5.4578 22.1154 5.4578C21.745 5.4578 21.4467 5.75243 21.4367 6.1295L21.0145 21.2869L21.4374 28.2444C21.4475 28.6172 21.7458 28.9118 22.1154 28.9118C22.4843 28.9118 22.7811 28.6172 22.7935 28.2423V28.2452H22.7934ZM58.7585 12.55C57.6294 12.55 56.5524 12.7773 55.5711 13.1866C54.9154 5.79688 48.6875 0 41.0908 0C39.2319 0 37.4199 0.364204 35.8197 0.979989C35.198 1.21945 35.0322 1.46604 35.0265 1.94422V27.9677C35.033 28.4695 35.4242 28.8874 35.9163 28.9369C35.9372 28.9391 58.6108 28.9505 58.7578 28.9505C63.3084 28.9505 66.998 25.2793 66.998 20.7507C66.998 16.222 63.3091 12.55 58.7585 12.55V12.55ZM33.342 1.92132C32.847 1.92132 32.4407 2.32566 32.4334 2.82243L32.0617 21.2934L32.4342 27.9971C32.4407 28.4868 32.8471 28.8904 33.342 28.8904C33.8355 28.8904 34.2418 28.4868 34.249 27.99V27.9978L34.6532 21.2934L34.249 2.82101C34.2418 2.32566 33.8355 1.92132 33.342 1.92132V1.92132ZM6.65817 34.1632C5.68337 33.9352 5.41963 33.8133 5.41963 33.429C5.41963 33.1581 5.63937 32.8778 6.2979 32.8778C6.86058 32.8778 7.30012 33.105 7.69498 33.5072L8.58192 32.6512C8.00198 32.0483 7.29944 31.6898 6.34265 31.6898C5.12936 31.6898 4.14589 32.3716 4.14589 33.4821C4.14589 34.6879 4.93704 35.0464 6.06964 35.308C7.22884 35.5697 7.43998 35.7453 7.43998 36.1389C7.43998 36.6021 7.09629 36.8035 6.36857 36.8035C5.77997 36.8035 5.22663 36.6027 4.79583 36.1031L3.90875 36.8903C4.37416 37.5721 5.27118 38.0001 6.29783 38.0001C7.97659 38.0001 8.71433 37.2136 8.71433 36.0515C8.7144 34.7224 7.63365 34.3904 6.65817 34.1632V34.1632ZM12.3168 31.6898C10.6395 31.6898 9.64736 32.9832 9.64736 34.845C9.64736 36.7068 10.6394 37.9993 12.3168 37.9993C13.9941 37.9993 14.9876 36.7068 14.9876 34.845C14.9876 32.9832 13.9941 31.6898 12.3168 31.6898V31.6898ZM12.3168 36.7856C11.3247 36.7856 10.9111 35.9375 10.9111 34.8456C10.9111 33.7531 11.3246 32.905 12.3168 32.905C13.3103 32.905 13.7224 33.7531 13.7224 34.8456C13.7224 35.9375 13.3103 36.7856 12.3168 36.7856ZM19.9511 35.2213C19.9511 36.1999 19.4669 36.8035 18.6859 36.8035C17.9042 36.8035 17.4301 36.1826 17.4301 35.2041V31.7852H16.1995V35.2214C16.1995 37.0036 17.2017 38.0001 18.6859 38.0001C20.2494 38.0001 21.1809 36.977 21.1809 35.2042V31.7852H19.9511V35.2213ZM26.4859 34.3733C26.4859 34.7145 26.5031 35.483 26.5031 35.7103C26.4239 35.5526 26.2222 35.2472 26.073 35.0192L23.8936 31.7846H22.717V37.9041H23.9296V35.2113C23.9296 34.8702 23.9122 34.1015 23.9122 33.8743C23.9908 34.0313 24.1939 34.3374 24.3424 34.5654L26.6003 37.904H27.6983V31.7845H26.4858V34.3733H26.4859V34.3733ZM31.2029 31.7852H29.2792V37.9047H31.1142C32.6957 37.9047 34.2599 36.995 34.2599 34.845C34.2599 32.6068 32.9594 31.7852 31.2029 31.7852V31.7852ZM31.1142 36.716H30.5091V32.9746H31.159C32.4594 32.9746 32.9955 33.5947 32.9955 34.845C32.9954 35.964 32.4061 36.716 31.1142 36.716ZM38.0633 32.9043C38.6167 32.9043 38.9682 33.1495 39.1879 33.5689L40.3299 33.0448C39.943 32.2497 39.2398 31.6898 38.0805 31.6898C36.4745 31.6898 35.3491 32.9832 35.3491 34.845C35.3491 36.7763 36.4291 37.9993 38.0365 37.9993C39.1525 37.9993 39.8903 37.4839 40.3118 36.6186L39.2757 36.0063C38.9507 36.549 38.6251 36.7849 38.0718 36.7849C37.1496 36.7849 36.6136 35.9454 36.6136 34.845C36.613 33.7094 37.1418 32.9043 38.0633 32.9043V32.9043ZM42.6247 31.7852H41.3948V37.9047H45.0909V36.6974H42.6247V31.7852V31.7852ZM48.3309 31.6898C46.6522 31.6898 45.6601 32.9832 45.6601 34.845C45.6601 36.7068 46.6522 37.9993 48.3309 37.9993C50.0082 37.9993 51.001 36.7068 51.001 34.845C51.0011 32.9832 50.0082 31.6898 48.3309 31.6898V31.6898ZM48.3309 36.7856C47.3374 36.7856 46.9252 35.9375 46.9252 34.8456C46.9252 33.7531 47.3374 32.905 48.3309 32.905C49.3224 32.905 49.7351 33.7531 49.7351 34.8456C49.7351 35.9375 49.3224 36.7856 48.3309 36.7856ZM55.9638 35.2213C55.9638 36.1999 55.4818 36.8035 54.7 36.8035C53.9169 36.8035 53.4435 36.1826 53.4435 35.2041V31.7852H52.2137V35.2214C52.2137 37.0036 53.2151 38.0001 54.7 38.0001C56.2635 38.0001 57.1944 36.977 57.1944 35.2042V31.7852H55.9638V35.2213V35.2213ZM60.6549 31.7852H58.7319V37.9047H60.5669C62.1491 37.9047 63.7118 36.995 63.7118 34.845C63.7118 32.6068 62.4121 31.7852 60.6549 31.7852V31.7852ZM60.5669 36.716H59.961V32.9746H60.6116C61.9106 32.9746 62.4466 33.5947 62.4466 34.845C62.4467 35.964 61.858 36.716 60.5669 36.716V36.716Z"/>
                    </g>
                    <defs>
                    <clipPath id="clip0">
                    <rect width="67" height="38" fill="white"/>
                    </clipPath>
                    </defs>
                    </svg>
                    
                    }
                    
                  <br></br>
                  <br></br>
                  <p className="subheader" style={{color: this.state.alertTextColor}}>{this.state.alertTextLineOne}</p>
                  <p className="subheader" style={{color: this.state.alertTextColor}}>{this.state.alertTextLineTwo}</p>
                </div>

                {this.state.alertVideo !== null && <div>
                    <br></br>
                    <iframe src={this.state.alertVideo} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                      
                  </div>}
                
                
            

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
            {this.state.homePageImage !== null && <img src={"https://drive.google.com/uc?export=view&id=" + this.state.homePageImage} alt="nickchase" onLoad={() => this.setState({imagesAllLoaded: true})} onError={() => this.setState({imagesAllLoaded: false})} ></img>}
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
            <br></br>
            <br></br>
            <br></br>
            <Clock format={'dddd'} ticking={true} timezone={'US/Eastern'} className="dayOfWeek" /> 
            <br></br>
            <Clock format={'hh:mm a'} ticking={true} timezone={'US/Eastern'} />
            <h1 className="atl">ATLANTA</h1>
          </center>
        </div>}
        
        {this.state.page === this.state.two && <div className="pageContainer">
            <center>
            {this.state.videos.map((item, index) => <div>
              <iframe src={item} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <br></br>
                <br></br>
              </div>)}
              <br></br>
            </center>
          </div>}
        {this.state.page === this.state.four && <div className="pageContainer">
          <div className="row">

            {this.state.images.map(item => (
              item[0] === '1' ? 
                <div className="column1">
                  <center>
                    <img src={"https://drive.google.com/uc?export=view&id=" + item.slice(1)} style={{width: '100%'}} onLoad={() => this.setState({imagesAllLoaded: true})} onError={() => this.setState({imagesAllLoaded: false})} ></img>
                    <br></br>
                    <br></br>
                  </center>
                </div> 
              : item[0] === '2' ? 
                  <div className="column2">
                    <center>
                      <img src={"https://drive.google.com/uc?export=view&id=" + item.slice(1)} style={{width: '100%'}} onLoad={() => this.setState({imagesAllLoaded: true})} onError={() => this.setState({imagesAllLoaded: false})} ></img>
                      <br></br>
                    <br></br>
                    </center>
                  </div> 
              : item[0] === '3' ? 
                <div className="column3">
                  <center>
                    <img src={"https://drive.google.com/uc?export=view&id=" + item.slice(1)} style={{width: '100%'}} onLoad={() => this.setState({imagesAllLoaded: true})} onError={() => this.setState({imagesAllLoaded: false})} ></img>
                    <br></br>
                    <br></br>
                    </center>
                </div> 
              : <div><h1>error</h1></div>)  )}
              </div>
          </div>}

        {this.state.page === this.state.one && <div className="pageContainer">
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
        {this.state.page === this.state.five && <div className="pageContainer">
          
        <Slider {...settings}>
          {this.state.books.map((item, index) => <div className="bookSlide">
            <img src={"https://drive.google.com/uc?export=view&id=" + item[0]} onLoad={() => this.setState({imagesAllLoaded: true})} onError={() => this.setState({imagesAllLoaded: false})} ></img>
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

      ) : (<div className="loadingDiv"><img src={loadingImage} className="loadingScreen"></img></div>)
  }
}
export default Home;

