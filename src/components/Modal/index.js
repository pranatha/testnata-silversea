import React, {Component} from 'react'
import ProductSlider from 'components/ProductSlider'
import 'css/app.css'

class Modal extends Component {

    handleWrapperClick = () => {
        let {handleClose} = this.props
        if(typeof handleClose === 'function'){
            handleClose()
        }
    }

    handleContainerClick = (e) => {
        e.stopPropagation()
    }

    render(){
        let {item} = this.props
        let {images} = item
        return(
            <div className='modal-wrapper' onClick = {this.handleWrapperClick}>
                <div className="container" onClick = {this.handleContainerClick}>
                    <div className="banner">
                        <ProductSlider
                            images = {images}
                        />
                    </div>
                    <div className="description">
                        <h1 className = 'title'>{item && item.title && item.title.toUpperCase()}</h1>
                        <p className = 'desc-content'>{item && item.description}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Modal