import React, { Component } from "react"
import ImageGallery from "react-image-gallery"
import Lightbox from "react-image-lightbox"
import "react-image-lightbox/style.css" // This only needs to be imported once in your app


const images = [
  "images/Plan Cad/Plan1.jpg",
  "images/Plan Cad/1-1.jpg",
  "images/Plan Cad/2-1.jpg",
]

var images2 = []

 for (let i = 0; i < images.length; i++) {
   const element = images[i]
   images2.push({
     original: element,
     thumbnail: element,
   })
 }

export default class LightboxExample extends Component {
  constructor(props) {
    super(props)

    this.state = {
      photoIndex: 0,
      isOpen: false,
    }
  }

  

  render() {
    const { photoIndex, isOpen } = this.state


    return (
      <div>
        <ImageGallery
          items={images2}
          onClick={() => this.setState({ isOpen: true })}
          showFullscreenButton={false}
          showPlayButton={false}
        />

        {isOpen && (
          <Lightbox
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + images.length - 1) % images.length,
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % images.length,
              })
            }
          />
        )}
      </div>
    )
  }
}
