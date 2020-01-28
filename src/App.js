import React from 'react';
import axios from 'axios'
import { VideoList, SearchBar, VideoDetail, OpenSheetMusicDisplay } from './components'

class App extends React.Component {

  constructor() {
    super()
    this.state = {
      videos: [],
      selectedVideo: null,
      file: "Frere Jacques.xml"
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleClick = this.handleClick.bind(this)
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

  handleClick(event) {
    event.persist();
    const file = event.target.value;
    this.setState({
      file: file
    })
    console.log("updated file")
  }

  render() {
    const { videos, selectedVideo } = this.state

    return (
      <div className="App">
        <header className="App-header">
          <h1>Stackathon</h1>
          <div className="youtube-search">
            <SearchBar onFormSubmit={this.handleSubmit} />
            <div className="video-view">
              <VideoDetail selectedVideo={selectedVideo} />
              <VideoList videos={videos} />
            </div>
          </div>
          {/* <ScoreList /> */}
          <div>
            <div className="dropdown-section">
              <h2>Select score</h2>
              <select onChange={this.handleClick} className="dropdown-menu">
                <option value="Frere Jacques.xml">Frere Jacques</option>
                <option value="Beethoven_AnDieFerneGeliebte.xml">Beethoven: An Die Ferne Geliebte</option>
                <option value="MuzioClementi_SonatinaOpus36No1_Part2.xml">Clementi: Sonatina Op. 36 No. 1</option>

              </select>
            </div>
            <OpenSheetMusicDisplay file={this.state.file} />
          </div>
        </header>
      </div>
    );
  }
}

export default App;
