import React from "react";

const VideoList = (props) => {
  console.log("PROPS in VIDEOLIST: ", props.videos);

  return (
    <div className="video-player-list">
      <div className="video-list">
        {props.videos.map((video, id) => {
          return (
            <div key={id} className="individual-videos">
              <img
                alt="pics"
                src={video.snippet.thumbnails.default.url}
                width="150"
                height="110"
              />
              <p className="video-title">{video.snippet.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default VideoList;
