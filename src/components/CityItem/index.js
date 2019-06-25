import React,{Component} from 'react'

class CityItem extends Component{

    handleClick = () => {
        let {onClick} = this.props

        if(typeof onClick === 'function'){
            onClick()
        }
    }

    render(){
        let {image, title} = this.props
        return(
            <div className='city-item' onClick = {this.handleClick}>
                <img src={image} alt=""/>
                <div className="description">
                    <h2>{title}</h2>
                </div>
            </div>
        )
    }
}

export default CityItem