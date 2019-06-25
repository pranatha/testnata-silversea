import React, {Component} from 'react'
import 'css/app.css'
const logo_img = require('assets/img/tr_logo.png')

function Logo(){
    return (
        <div className ="logo-wrapper">
            <img className="logo" src={logo_img} alt=""/>
        </div>
    )
}

class Navigation extends Component{
    state = {
        toggle: false
    }

    handleToggle = () => {
        !this.state.toggle ? document.body.classList.add('modal-open') 
        : document.body.classList.remove('modal-open')
        this.setState({
            toggle: !this.state.toggle
        })
    }

    render(){
        return(
            <div className="nav-wrapper">
                <Logo/>
                <navigation>
                    <ul className ={`mobile ${this.state.toggle && 'active' || null}`}>
                        <li><a href="#">Recently Added <i className='far fa-clock'></i></a></li>
                        <li><a href="#">Popular Hotels <i className='fa fa-star'></i></a></li>
                        <li><a href="#">Locations <i className='fa fa-caret-down'></i></a></li>
                    </ul>
                    <toggle 
                        onClick = {this.handleToggle}
                    >
                        <div className ={`line ${this.state.toggle && 'active' || null}`}></div>
                        <div className ={`line ${this.state.toggle && 'active' || null}`}></div>
                    </toggle>
                </navigation>
            </div>
        )
    }
}

export default Navigation