import React from 'react';
import axios from 'axios'

const APIkey = "AIzaSyCmAE5-qP5OCuD156muHHW_7w99NTNEJc0"
const channelId = "UCx8Hvu3edWIwQhQZVvMT9aQ"
const result = 5
let finalURL = `https://www.googleapis.com/youtube/v3/search?key=${APIkey}&channelId=${channelId}&part=snippet,id&order=date&maxResults=${result}`

class VideoList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            videos: [],
            isLoaded: false
        }
    }

    async componentDidMount() {
        const res = await axios.get(`${finalURL}`)
        const videoData = res.data
        const videoLinks = videoData.items.map(link => "https://www.youtube.com/embed/" + link.id.videoId)
        // console.log("videoIdArray: ", videoLinks)
        this.setState({
            videos: videoLinks,
            isLoaded: true
        })

    }

    render() {
        const { isLoaded, videos } = this.state;
        if (!isLoaded) {
            return <div>Loading...</div>
        }

        return (
            <div>
                <ul>
                    <li>
                        {videos.map((video, i) => {
                            let frame = <div key={i}>
                                <iframe
                                    title="1"
                                    width="560"
                                    height="315"
                                    src={video}
                                    frameBorder="0"
                                    allowFullScreen>
                                </iframe>
                            </div>
                            return frame
                        })}
                    </li>
                </ul>
            </div>
        )
    }
}

export default VideoList