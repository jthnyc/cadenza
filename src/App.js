import React from "react";
import axios from "axios";
import {
  VideoList,
  SearchBar,
  VideoDetail,
  OpenSheetMusicDisplay,
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
    this.handleClick = this.handleClick.bind(this);
  }

  async handleSubmit(searchTerm) {
    const response = await axios.get(
      "https://www.googleapis.com/youtube/v3/search",
      {
        params: {
          part: "snippet",
          type: "video",
          maxResults: 5,
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

  handleClick(event) {
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
        <div>
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
                <option value="MuzioClementi_SonatinaOpus36No1_Part2.xml">
                  Clementi: Sonatina Op. 36 No. 1
                </option>
                <option value="Beethoven_AnDieFerneGeliebte.xml">
                  Beethoven: An Die Ferne Geliebte
                </option>
                {/* <option value="Frere Jacques.xml">Frere Jacques</option> */}
              </select>
            </div>
            {/* <ScoreList /> */}
            <OpenSheetMusicDisplay file={this.state.file} />
            <iframe
              src="https://flat.io/embed/58e4fafd4bc8aa3c5840dfb9?appId=5ed003fb8a438e1461b9bfd7&sharingKey=da09e27ea7ed2ace6f73b2c2dae9f87c923e93bf60d5728c6a8b02507cb08f2a8d7fb7c0ba8075fe1667d95ce38e2a585af004e509bebebf368b4f82e845ac59"
              height="450"
              width="100%"
              frameBorder="0"
              allowfullscreen
              allow="midi"
              title="flat"
            ></iframe>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
