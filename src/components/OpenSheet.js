import React from 'react'
import OpenSheetMusicDisplay from 'opensheetmusicdisplay'

class OpenSheet extends React.Component {

    constructor() {
        super()
        this.state = {
            OSMDViewer: {},
            demoSheet: ''
        }
    }
    
    componentDidMount() {
        
    }


    render() {
        
        return (
            console.log(OpenSheetMusicDisplay.Arpeggio)
            // <OpenSheetMusicDisplay file="MuzioClementi_SonatinaOpus36No1_Part2.xml"/>
        )
    }

}

export default OpenSheet;