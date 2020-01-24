import React from 'react';
import axios from 'axios'
import {VideoList, SearchBar, VideoDetail} from './components'


class App extends React.Component {

  constructor() {
    super()
    this.state = {
      videos: [],
      selectedVideo: null
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  
  async handleSubmit(searchTerm) {
    const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
      params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: "AIzaSyCmAE5-qP5OCuD156muHHW_7w99NTNEJc0",
        q: searchTerm
      }
    })
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0]
    })
  }


  render() {
    const { videos, selectedVideo } = this.state

    return (
      <div className="App">
        <header className="App-header">
          <h1>Stackathon</h1>
          <SearchBar onFormSubmit={this.handleSubmit}/>
          {/* <ScoreList /> */}
          <VideoDetail selectedVideo={selectedVideo}/>
          <VideoList videos={videos}/>
        </header>
      </div>
    );
  }
}

export default App;
