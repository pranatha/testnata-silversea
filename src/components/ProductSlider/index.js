import React, {Component} from 'react'
import 'css/app.css'

function Image(props){
    return (
        <div className={`slide-item fade ${props.active ? 'active' : null}`}>
            <img className= "slider-img" src={props.image} alt=""/>
        </div>
    )
}


class ProductSlider extends Component{
    constructor(props, context){
        super(props, context)
        this.state = {
            nextIndex: 1
        }
    }

    handleSlides = (n) => {
        let {images} = this.props
        let ln = images.length
        let {nextIndex} = this.state
        let currentIndex = nextIndex +n
        
        currentIndex = currentIndex > ln && 1 ||  
                       currentIndex < 1 && images.length ||
                       currentIndex
        
        this.setState({
            nextIndex: currentIndex
        })
    }

    renderImages = () => {
        let {images} = this.props
        let {nextIndex} = this.state
        let view = null
        if(typeof images !== null || typeof images !== undefined){
            view = images.map((image, index) => {
                return (
                    <Image
                        key = {image.id}
                        {...image}
                        active = {index === nextIndex -1}
                    />
                )
            })
        }
        
        return view
    }

    renderBullets = () => {
        let {images} = this.props
        let {nextIndex} = this.state
        let view = null
        if(typeof images !== null || typeof images !== undefined){
            view = images.map((image, index) => {
                return (
                    <div key = {image.id} 
                        className={`bullet ${index === nextIndex -1 ? 'active' : null}`}
                    ></div>
                )
            })
        }
        
        return view
    }

    renderNavs = () => {
        return (
            <div className="slider-nav">
                <div className="nav left" onClick = {() => this.handleSlides(-1)}>
                    <i className="fa fa-angle-left"></i>
                </div>
                <div className="nav right" onClick = {() => this.handleSlides(1)}>
                    <i className="fa fa-angle-right"></i>
                </div>
            </div>
        )
    }

    render(){
        
        return (
            <div className="slider-wrapper">
                {
                    this.renderImages()
                }
                <div className="bullet-wrapper product">
                    {
                        this.renderBullets()
                    }
                </div>
                
                {
                    this.renderNavs()
                }
                
            </div>
        )
    }
}

export default ProductSlider