import logo from './logo.svg';
import React from 'react';
import './Home.css';

class Home extends React.Component { 

  //the states of emotion and source will be set to null initially until the user had filled out the form.
  constructor() {
    super();
    this.state = {
      songs: [],
      videos: [],
      
    };
    
  }

  componentDidMount()
  {
    let self = this;
    //https://docs.google.com/spreadsheets/d/e/2PACX-1vQuQwutdx61wWhjjxKdqmrGjNJehXMkm3yw4JuUjG_BMA5wR3eToT0MNqHpvB_vTWVLNELVtVy1-mMw/pubhtml
    //https://docs.google.com/spreadsheets/d/e/2PACX-1vRdzkHeWN1mVZnxNp3e27VL6sIAhizWlIObdVtikVeYM-JXMQ-HjVzh6cIYpSCWSrO-wVrFRFozbQRx/pubhtml
    //https://docs.google.com/spreadsheets/d/1DmARxqQPHH6q1l7JxpuhjW98CMGBEh5673vfBrqyV1g/edit?usp=sharing
    fetch('https://spreadsheets.google.com/feeds/cells/1DmARxqQPHH6q1l7JxpuhjW98CMGBEh5673vfBrqyV1g/1/public/full?alt=json').then(res => 
    res.json()).then(data => {
      
      var songsArr = [];
      var videosArr = []
      for(var i = 0; i < data['feed']['entry'].length; i+=1)
      {
        //skips over first row [metadata/column names]
        if(data['feed']['entry'][i]['gs$cell']['row'] === "1")
        {
          continue;
        }
        //pushes input value of cell to temp array 
        
        var type = data['feed']['entry'][i]['gs$cell']['inputValue'];
        if(type.toLowerCase() === 'song')
        {
          var name = data['feed']['entry'][i + 1]['gs$cell']['inputValue']
          var link = data['feed']['entry'][i + 2]['gs$cell']['inputValue']
          var coverArt = data['feed']['entry'][i + 3]['gs$cell']['inputValue']
          var description = data['feed']['entry'][i + 4]['gs$cell']['inputValue']
          songsArr.push([name, link, coverArt, description])
          i+=4
          //check if you need to offset or not.

        }
        else if((type.toLowerCase() === 'video'))
        {
          var name = data['feed']['entry'][i + 1]['gs$cell']['inputValue']
          var link = data['feed']['entry'][i + 2]['gs$cell']['inputValue']
          var description = data['feed']['entry'][i + 2]['gs$cell']['inputValue']
          
          videosArr.push([name, link, description])
          
        }
      }

      this.setState({songs: songsArr})
      this.setState({videos: videosArr})
    })  
  }
  
  render()
  {  

    return (   
      <div className="contentWrapper"> {/* DO NOT REMOVE THIS DIV COMPONENT*/}
        <h1>Music</h1>
          {this.state.songs.map((songStruct) => 
          <div>
            <h2>{songStruct[0]}</h2>
            <a href={songStruct[1]} target="_blank">
            <img src={songStruct[2]} style={{width: '400px'}}></img>
            </a>
            <p>{songStruct[3]}</p>

            <br></br>
          </div>
          )}
          {this.state.videos.map((videoStruct) => 
          <div>
            <h2>{videoStruct[0]}</h2>
            <iframe width="560" height="315" src={videoStruct[2]} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <p>{videoStruct[3]}</p>
            <br></br>
            <br></br>
            


          
            
            <br></br>
          </div>
          )}
        <h1>Visuals</h1>
        <h1>Writing</h1>
        <h1>Friends</h1>
      </div>

      )
  }
}
export default Home;

