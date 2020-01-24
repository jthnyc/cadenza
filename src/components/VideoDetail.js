import React from 'react'

const VideoDetail = (props) => {

    if (!props.selectedVideo) {
        return <div>Loading Video Details...</div>
    }

    console.log(props)

    const videoSrc = `https://www.youtube.com/embed/${props.selectedVideo.id.videoId}`

    return (
        <div>
            <div>
                <iframe
                    title="videoDetail"
                    width="560"
                    height="315"
                    src={videoSrc}
                    frameBorder="0"
                    allowFullScreen>
                </iframe>
            </div>
        </div>
    )
}

export default VideoDetail;