// import React from 'react';
// import axios from 'axios'

// class ScoreList extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             scores: [],
//             isLoaded: false
//         }
//     }

//     async componentDidMount() {
//         const res = await axios.get("https://imslp.org/imslpscripts/API.ISCR.php?account=worklist/disclaimer=accepted/sort=id/type=2/start=0")
//         const scoreData = res.data
//         console.log(scoreData)
//         // const videoLinks = videoData.items.map(link => "https://www.youtube.com/embed/" + link.id.videoId)
//         // console.log("videoIdArray: ", videoLinks)
//         // this.setState({
//         //     videos: videoLinks,
//         //     isLoaded: true
//         // })

//     }

//     render() {
//         // const { isLoaded, videos } = this.state;
//         // if (!isLoaded) {
//         //     return <div>Loading...</div>
//         // }

//         return (
//             <div>
//                 {/* <ul>
//                     <li>
//                         {videos.map((video, i) => {
//                             let frame = <div key={i}>
//                                 <iframe
//                                     title="1"
//                                     width="560"
//                                     height="315"
//                                     src={video}
//                                     frameBorder="0"
//                                     allowFullScreen>
//                                 </iframe>
//                             </div>
//                             return frame
//                         })}
//                     </li>
//                 </ul> */}
//             </div>
//         )
//     }
// }

// export default ScoreList