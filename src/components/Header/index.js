import React from 'react'
import 'css/app.css'
import Navigation from 'components/Navigation'
import Slider from 'components/Slider'

function Header(){

    let slideImages = [
        {id:1, image: require('assets/img/bongthom1.jpg'), title: 'BONG THOM FOREST LODGE'},
        {id:2, image: require('assets/img/homeslides/renaissance.jpg'), title: 'RENAISSANCE KUALA LUMPUR'},
        {id:3, image: require('assets/img/homeslides/furama.jpg'), title: 'FURAMA BUKIT BINTANG'},
        {id:4, image: require('assets/img/homeslides/istana.jpg'), title: 'HOTEL ISTANA KUALA LUMPUR'}
    ]
    return (
        <header>
            <Navigation/>
            <Slider images = {slideImages}/>
        </header>
    )
}

export default Header