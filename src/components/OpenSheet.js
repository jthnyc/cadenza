import React from 'react'
import { OpenSheetMusicDisplay } from 'opensheetmusicdisplay'

class OpenSheet extends React.Component {


    render() {
        const openSheet = new OpenSheetMusicDisplay();
        return (
            <OpenSheetMusicDisplay file="MuzioClementi_SonatinaOpus36No1_Part2.xml"/>
        )
    }

}

export default OpenSheet;