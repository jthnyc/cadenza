import React from "react";

const VideoDetail = (props) => {
  if (!props.selectedVideo) {
    return <div>Search Result</div>;
  }

  console.log(props.selectedVideo);

  const videoSrc = `https://www.youtube.com/embed/${props.selectedVideo.id.videoId}`;

  return (
    <div className="video-container">
      {props.selectedVideo ? (
        <div>
          <div className="selected-video">
            <iframe
              className="video-player"
              title="videoDetail"
              width="800"
              height="500"
              src={videoSrc}
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="selected-video-title">
            <h3>{props.selectedVideo.snippet.title}</h3>
          </div>
        </div>
      ) : (
        <div>Loading Video Details...</div>
      )}
    </div>
  );
};

export default VideoDetail;
