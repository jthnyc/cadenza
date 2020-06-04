import React from "react";
import axios from "axios";
import {
  VideoList,
  SearchBar,
  VideoDetail,
  OpenSheetMusicDisplay,
  Cursor,
} from "./components";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      videos: [],
      selectedVideo: null,
      file: "MuzioClementi_SonatinaOpus36No1_Part2.xml",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleScoreSelection = this.handleScoreSelection.bind(this);
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
      selectedVideo: response.data.items[0],
    });
  }

  handleScoreSelection(event) {
    event.persist();
    const file = event.target.value;
    this.setState({
      file: file,
    });
    console.log("updated file");
  }

  render() {
    const { videos, selectedVideo } = this.state;

    return (
      <div>
        <nav>
          <h1>Cadenza</h1>
        </nav>
        <div className="app-container">
          <div className="youtube-search">
            <SearchBar onFormSubmit={this.handleSubmit} />
            <div className="video-view">
              <VideoDetail selectedVideo={selectedVideo} />
              <VideoList videos={videos} />
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
