import React from 'react'
import Picker from 'components/Picker'
import Recents from 'components/Recents'
import Cities from 'components/Cities'
import 'css/app.css'

function Content(){
    return(
        <content>
            <div className="content-wrapper">
                <Picker/>
                <Recents/>
                <Cities/>
            </div>
        </content>
    )
}

export default Content