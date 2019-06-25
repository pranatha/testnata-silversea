import React,{Component} from 'react'

class RecentItem extends Component{

    handleClick = () => {
        let {onClick} = this.props

        if(typeof onClick === 'function'){
            onClick()
        }
    }

    render(){
        let {image, title} = this.props
        return(
            <div className='recent-item' onClick = {this.handleClick}>
                <img src={image} alt=""/>
                <div className="description">
                    <h2>{title}</h2>
                </div>
            </div>
        )
    }
}

export default RecentItem