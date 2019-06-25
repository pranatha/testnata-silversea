import React from 'react'
import CityPicker from 'components/CityPicker'
import 'css/app.css'

function Picker(){
    return (
        <div className="picker-wrapper"> 
            <div className="container">
                <CityPicker 
                    icon = 'fa-map-marker-alt'
                    label = 'Where do you want to stay?'
                />
                <div className="separator">
                    <div className="split">
                        <CityPicker 
                            icon = 'fa-calendar-alt'
                            label = 'Check In'
                        />
                    </div>
                    <div className="split">
                        <CityPicker 
                            icon = 'fa-moon'
                            label = 'Staying Duration'
                        />
                    </div>
                </div>
                <div className="separator">
                    <div className="split">
                        <CityPicker 
                            icon = 'fa-users'
                            label = 'Number of Guest'
                        />
                    </div>
                    <div className="split">
                        <CityPicker     
                            icon = 'fa-bed'
                            label = 'Number of Rooms'
                        />
                    </div>
                </div>
                <button className='search-hotel'>
                    SEARCH HOTEL
                </button>
            </div>
        </div>
    )
}

export default Picker