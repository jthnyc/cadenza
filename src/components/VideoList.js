import React from "react";

const VideoList = (props) => {
  console.log("PROPS: ", props);
  const { videos, videoDisplay } = props;

  // needs to update per chosen video instead of just slice(1)
  const videoList = videos.filter(
    (video) => video.id.videoId !== videoDisplay.id.videoId
  );

  // const videoLink = "www.youtube.com/watch?v="+

  // create handleClick

  return (
    <div className="video-player-list">
      <div className="video-list">
        {videoList.map((video, id) => {
          return (
            <div key={id} className="individual-videos">
              {/* <a href=+{}> */}
              <img
                alt="pics"
                src={video.snippet.thumbnails.default.url}
                width="280"
                height="170"
              />
              {/* </a> */}
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
