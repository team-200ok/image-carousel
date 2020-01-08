import axios from 'axios';
import React from 'react';
import ReactDOM from 'react-dom';
import ImageList from './components/ImageList.jsx';
import Popup from './components/Popup.jsx';
import RightIcon from './components/RightIcon.jsx';
import LeftIcon from './components/LeftIcon.jsx';
import style from './components/button.css';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      popUpId: 0,
      showPopup: false,
      images: [
        // {
        //   id: 0,
        //   imageUrl: "https://gpksingh.s3.us-east-2.amazonaws.com/0.jpg",
        // },
        // {
        //   id: 1,
        //   imageUrl: "https://gpksingh.s3.us-east-2.amazonaws.com/1.jpg",
        // },
        // {
        //   id: 2,
        //   imageUrl: "https://gpksingh.s3.us-east-2.amazonaws.com/2.jpg",
        // },
        // {
        //   id: 3,
        //   imageUrl: "https://gpksingh.s3.us-east-2.amazonaws.com/3.jpg",
        // },
        // {
        //   id: 4,
        //   imageUrl: "https://gpksingh.s3.us-east-2.amazonaws.com/4.jpg",
        // },
        // {
        //   id: 5,
        //   imageUrl: "https://gpksingh.s3.us-east-2.amazonaws.com/5.jpg",
        // },
        // {
        //   id: 6,
        //   imageUrl: "https://gpksingh.s3.us-east-2.amazonaws.com/6.jpg",
        // },
        // {
        //   id: 7,
        //   imageUrl: "https://gpksingh.s3.us-east-2.amazonaws.com/7.jpg",
        // },
        // {
        //   id: 8,
        //   imageUrl: "https://gpksingh.s3.us-east-2.amazonaws.com/8.jpg",
        // },
        // {
        //   id: 9,
        //   imageUrl: "https://gpksingh.s3.us-east-2.amazonaws.com/9.jpg",
        // },
        // {
        //   id: 10,
        //   imageUrl: "https://gpksingh.s3.us-east-2.amazonaws.com/10.jpg",
        // }
      ]
    };
    this.togglePopup = this.togglePopup.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleScrollRight = this.handleScrollRight.bind(this);
    this.handleScrollLeft = this.handleScrollLeft.bind(this);
  }
  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }
  handleClick(id) {
    console.log("I got an id", id);
    this.state.popUpId = id;

    this.setState({
      showPopup: !this.state.showPopup
    });
  }
  handleScrollRight() {
    document.getElementById("row").scrollLeft += 600;
  }
  handleScrollLeft() {
    document.getElementById("row").scrollLeft -= 600;
  }
  componentDidMount() {

    let endpoint = window.location.pathname.split('/')[1];
    if (endpoint.length === 0) {
      endpoint = 1;
    };

    axios.get(`/api/carousel/${endpoint}`)
      .then((data) => {
        console.log(data)
        let imageArr = [];
        for (let i = 0; i < data.data.rows.length; i++) {
          let imageObj = {
            imageUrl : data.data.rows[i].image_url
          }
          imageArr.push(imageObj)
        }
        this.setState({ images: imageArr });

      });
  }

  render() {

    return (
      <div>
        <div>
          <div>

            <ImageList clicker={this.handleClick} images={this.state.images} />
            {this.state.showPopup ? <Popup clicker={this.handleClick} id={this.state.popUpId} images={this.state.images} closePopup={this.togglePopup.bind(this)} /> : null}

            <button className={style.leftButton} onClick={() => this.handleScrollLeft()}>
              <LeftIcon width={48} fill="white" ></LeftIcon>
            </button>

            <button className={style.rightButton} onClick={() => this.handleScrollRight()}>
              <RightIcon width={48} fill="white" ></RightIcon>
            </button>



          </div>
        </div>


      </div>

    );

  }
}
ReactDOM.render(<App />, document.getElementById('photos'));