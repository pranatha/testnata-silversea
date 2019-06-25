import React, {Component} from 'react'
import 'css/app.css'

function Image(props){
    return (
        <div className={`slide-item fade ${props.active ? 'active' : null}`}>
            <img className= "slider-img" src={props.image} alt=""/>
            <div className="info">
                <h1>{props.title}</h1>
                <button>
                    VISIT 4D TOUR
                </button>
            </div>
        </div>
    )
}


class Slider extends Component{
    constructor(props, context){
        super(props, context)
        this.state = {
            nextIndex: 4
        }
    }

    componentDidMount(){
        this.handleSlides()
    }

    handleSlides = () => {
        setInterval(() => {
            let {images} = this.props
            let ln = images.length
            let {nextIndex} = this.state
            let currentIndex = nextIndex +1
            currentIndex = currentIndex > ln && 1 || currentIndex
            
            this.setState({
                nextIndex: currentIndex
            })
        },3000)
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

    render(){
        
        return (
            <div className="slider-wrapper">
                {
                    this.renderImages()
                }
                <div className="bullet-wrapper">
                    {
                        this.renderBullets()
                    }
                </div>
            </div>
        )
    }
}

export default Slider