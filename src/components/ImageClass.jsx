import {Component} from 'react';

class ImageClass extends Component {
    render() {
        return <img src={this.props.imageSrc} alt={this.props.altText} />
    }
}

export default ImageClass ;