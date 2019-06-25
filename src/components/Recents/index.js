import React,{Component} from 'react'
import RecentItem from 'components/RecentItem'
import Modal from 'components/Modal'

class Recents extends Component{
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
            {id:1, title: 'Hotel Transit Kuala Lumpur' , image: require('assets/img/transitkl/trs1.jpg'), description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed venenatis pulvinar sodales. Aenean non ante suscipit, pellentesque justo tempor, consequat augue. Pellentesque ultrices augue sit amet enim auctor, in euismod nunc tincidunt. Proin auctor mi et metus fringilla efficitur. Curabitur et nibh vel tellus blandit bibendum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris interdum lectus rhoncus, ultrices ligula id, bibendum diam.Nullam quis elementum arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sit amet semper eros. Suspendisse tempus rhoncus arcu, sit amet vulputate erat fermentum ac. Donec mattis ultricies faucibus. Aenean bibendum ligula id dignissim finibus. Nulla quis diam eget risus consectetur gravida. Cras ac odio eros. Integer dapibus odio eget tortor elementum suscipit. Duis et placerat nunc. Vivamus feugiat massa vel dui eleifend, quis varius lectus rutrum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur faucibus felis id ullamcorper condimentum.',
            images:[
                {id:1, image: require('assets/img/transitkl/trs1.jpg')},
                {id:2, image: require('assets/img/transitkl/trs2.jpg')},
                {id:3, image: require('assets/img/transitkl/trs3.jpg')},
            ]},
            {id:2, title: 'Royale Chulan Bukit Bintang', image: require('assets/img/royalechulan/ryl1.jpg'), description: 'Nulla pharetra ut lectus id rutrum. In pharetra, ante quis convallis tristique, tellus sem convallis odio, nec ornare enim ligula lobortis sapien. Morbi euismod consequat convallis. Curabitur sollicitudin sit amet massa ut scelerisque. Vivamus vitae pulvinar ligula. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam tristique eget arcu in cursus. Sed porta sem tempor egestas dictum. Nam tristique vel massa eu imperdiet.',
            images:[
                {id:1, image: require('assets/img/royalechulan/ryl1.jpg')},
                {id:2, image: require('assets/img/royalechulan/ryl2.jpg')},
                {id:3, image: require('assets/img/royalechulan/ryl3.jpg')},
            ]},
        ]

        let {openModal, choosedItem} = this.state
        return(
            <div className='recents-wrapper'>
                <h1>Recently Viewed</h1>
                <div className="separator">
                {
                    items.map((item)=> {
                        return(
                            <RecentItem
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


export default Recents