import React from "react";
import axios from "axios";
import {
  VideoList,
  SearchBar,
  VideoDisplay,
  OpenSheetMusicDisplay,
  Cursor,
} from "./components";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      videos: [],
      videoDisplay: null,
      file: "MuzioClementi_SonatinaOpus36No1_Part2.xml",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleScoreSelection = this.handleScoreSelection.bind(this);
    this.handleVideoSelection = this.handleVideoSelection.bind(this);
  }

  async handleSubmit(searchTerm) {
    const response = await axios.get(
      "https://www.googleapis.com/youtube/v3/search",
      {
        params: {
          part: "snippet",
          type: "video",
          maxResults: 10,
          key: process.env.REACT_APP_YOUTUBE_API_KEY,
          q: searchTerm,
        },
      }
    );
    this.setState({
      videos: response.data.items,
      videoDisplay: response.data.items[0],
    });
  }

  handleScoreSelection(event) {
    event.persist();
    const selectedScore = event.target.value;
    this.setState({
      file: selectedScore,
    });
    console.log("updated file");
  }

  handleVideoSelection(event) {
    console.log("video selected: ", event.target.value);
  }

  render() {
    const { videos, videoDisplay } = this.state;

    return (
      <div>
        <nav>
          <h1>Cadenza</h1>
        </nav>
        <div className="app-container">
          <div className="youtube-search">
            <SearchBar onFormSubmit={this.handleSubmit} />
            <div className="video-view">
              <VideoDisplay videoDisplay={videoDisplay} />
              <VideoList
                onClick={this.handleVideoSelection}
                videos={videos}
                videoDisplay={videoDisplay}
              />
            </div>
          </div>
          <div className="score-container">
            <Cursor />
            <div className="dropdown-section">
              <select
                onChange={this.handleScoreSelection}
                className="dropdown-menu"
              >
                <option value="MuzioClementi_SonatinaOpus36No1_Part2.xml">
                  Clementi: Sonatina Op. 36 No. 1
                </option>
                <option value="Beethoven_AnDieFerneGeliebte.xml">
                  Beethoven: An Die Ferne Geliebte
                </option>
                <option value="Frere Jacques.xml">Frere Jacques</option>
              </select>
            </div>
            <OpenSheetMusicDisplay file={this.state.file} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
