var React = require('react');
// var ReactDOM = require('react-dom');
import style from './imageList.css';

class ImageList extends React.Component {
  constructor(props) {
    super(props);
}
  render() {
    console.log("props passed in", this.props);
    const ImageSlides = this.props.images.map((image) =>
      <div className={style.imageDiv}>
        <img onClick= {()=>this.props.clicker(image.id)} className={style.img} src={image.imageUrl} />
      </div>
    );
    return (

      <div id="row" className={style.row}>
        {ImageSlides}
      </div>

    );
  }
}
export default ImageList;


