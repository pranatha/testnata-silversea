import React from 'react'
import 'css/app.css'

function CityPicker(props){
    let {label, icon} = props
    return(
        <button className="pick-selector">
            <p className="picker-title">{label}</p>
            <i className={`fa ${icon} picker-icon`}></i>
        </button>
    )
}

export default CityPicker