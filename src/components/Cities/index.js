import React,{Component} from 'react'
import CityItem from 'components/CityItem'
import Modal from 'components/Modal'

class Cities extends Component{
    constructor(props, context){
        super(props, context)
        this.state = {
            openModal  : false,
            choosedItem: null,
        }
    }

    openModal = (item) => {
        document.body.classList.add('modal-open')
        this.setState({
            openModal  : true,
            choosedItem: item
        })
    }
    
    closeModal = () => {
        document.body.classList.remove('modal-open')
        this.setState({
            openModal  : false,
            choosedItem: null
        })
    }

    render(){
        let items = [
            {id:1, title: 'Kuala Lumpur' , image: require('assets/img/kualalumpur/kl1.jpg'), description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed venenatis pulvinar sodales. Aenean non ante suscipit, pellentesque justo tempor, consequat augue. Pellentesque ultrices augue sit amet enim auctor, in euismod nunc tincidunt. Proin auctor mi et metus fringilla efficitur. Curabitur et nibh vel tellus blandit bibendum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris interdum lectus rhoncus, ultrices ligula id, bibendum diam.Nullam quis elementum arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sit amet semper eros. Suspendisse tempus rhoncus arcu, sit amet vulputate erat fermentum ac. Donec mattis ultricies faucibus. Aenean bibendum ligula id dignissim finibus. Nulla quis diam eget risus consectetur gravida. Cras ac odio eros. Integer dapibus odio eget tortor elementum suscipit. Duis et placerat nunc. Vivamus feugiat massa vel dui eleifend, quis varius lectus rutrum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur faucibus felis id ullamcorper condimentum.',
            images: [
                {id:1, image: require('assets/img/kualalumpur/kl1.jpg')},
                {id:2, image: require('assets/img/kualalumpur/kl2.jpg')},
                {id:3, image: require('assets/img/kualalumpur/kl3.jpg')},
            ]},
            {id:2, title: 'Malacca', image: require('assets/img/malacca/mlc1.jpg'), description: 'In hac habitasse platea dictumst. Cras sit amet ex euismod, sodales erat eget, gravida neque. Duis maximus diam vitae iaculis dignissim. Ut dictum lorem nec justo interdum aliquet. Morbi volutpat lorem eleifend, aliquam tortor at, convallis diam. In hac habitasse platea dictumst. Nullam hendrerit velit elit, quis sodales sapien gravida sed. Suspendisse consectetur eu ex et imperdiet. Vivamus volutpat velit ac tempor placerat. Nunc iaculis enim vel urna tincidunt, nec ultrices dui blandit.',
            images: [
                {id:1, image: require('assets/img/malacca/mlc1.jpg')},
                {id:2, image: require('assets/img/malacca/mlc2.jpg')},
                {id:3, image: require('assets/img/malacca/mlc3.jpg')},
            ]},
            {id:3, title: 'George Town', image: require('assets/img/georgetown/grg1.jpg'), description: 'Aliquam nec velit sit amet metus efficitur feugiat eu sit amet mauris. Pellentesque pharetra metus enim, eu egestas massa faucibus ac. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla nec tortor at ante efficitur rhoncus. Proin nunc augue, dignissim a facilisis scelerisque, efficitur nec sem. Cras non sem a lacus porttitor suscipit non nec libero. Proin malesuada ex dui, quis imperdiet ante finibus vitae. Aliquam hendrerit, mi at pulvinar vehicula, metus nisi lacinia enim, et faucibus elit urna ut ex. Maecenas sagittis diam sit amet justo congue laoreet porta at dolor.',
            images: [
                {id:1, image: require('assets/img/georgetown/grg1.jpg')},
                {id:2, image: require('assets/img/georgetown/grg2.jpg')},
                {id:3, image: require('assets/img/georgetown/grg3.jpg')},
            ]},
        ]

        let {openModal, choosedItem} = this.state
        
        return (
            <div className='cities-wrapper'>
                <h1>Where do you want to stay?</h1>
                <div className="separator">
                {
                    items.map((item)=> {
                        return(
                            <CityItem
                                {...item}
                                onClick = {() => this.openModal(item)}
                            />
                        )
                    })
                }
                </div>

                {
                    openModal && 
                    <Modal 
                        handleClose ={this.closeModal}
                        item = {choosedItem}
                    />
                    || null
                }
            </div>
        )
    }
}

export default Cities