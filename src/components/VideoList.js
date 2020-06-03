import React from "react";

const VideoList = (props) => {
  console.log("PROPS in VIDEOLIST: ", props.videos);
  //
  // needs to update per chosen video instead of just slice(1)
  const videoList = props.videos.slice(1);

  // create handleClick

  return (
    <div className="video-player-list">
      <div className="video-list">
        {videoList.map((video, id) => {
          return (
            <div key={id} className="individual-videos">
              <img
                alt="pics"
                src={video.snippet.thumbnails.default.url}
                width="280"
                height="170"
              />
              <br />
              <div className="detail-container">
                <h4 className="video-title">{video.snippet.title}</h4>
                <p>{video.snippet.channelTitle}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default VideoList;
