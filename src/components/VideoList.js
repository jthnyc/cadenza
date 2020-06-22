import React from "react";

const VideoList = (props) => {
  console.log("PROPS: ", props);
  const { onClick, videos, videoDisplay } = props;

  // needs to update per chosen video instead of just slice(1)
  const videoList = videos.filter(
    (video) => video.id.videoId !== videoDisplay.id.videoId
  );

  console.log("VIDEO LIST: ", videoList);

  // const videoLink = "www.youtube.com/watch?v=";

  // create handleClick

  return (
    <div className="video-player-list">
      <div className="video-list">
        {videoList.map((video, id) => {
          return (
            <a
              key={id}
              href={id.videoId}
              className="individual-videos"
              onClick={onClick}
            >
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
                <p>{id.videoId}</p>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default VideoList;
