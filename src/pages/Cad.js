
import Footer from "../components/footer/Footer"
import Carousel from "./Carousel"

import Header from "../components/header/Header"

import React, { Component } from 'react'

export class Cad extends Component {
  render() {
    return (
    <>
        <Header />
        <div className="m-5 border border-dark">
          <Carousel />
        </div>
        <Footer />
    </>
    )
  }
}



// function onMouseOver(event) {
//   const img = event.target
//   const topOffset = img.offsetTop
//   const leftOffset = img.offsetLeft
//   const height = img.height
//   const width = img.width

//   img.style.transformOrigin =
//     ((event.pageX - leftOffset) / width) * 50 +
//     "% " +
//     ((event.pageY - topOffset) / height) * 50 +
//     "%"
// }

// function Cad() {

//   let [isFullScreen, setIsFullScreen] = useState(false);
//   let [hasRegistered, setHasRegistered] = useState(false);

//   let image = useRef(null);
//   function onScreenChange(fullScreenElem) {
//     if (fullScreenElem) {
//       setIsFullScreen(true)
//       image.current.style.cursor = "zoom-in"
//     } else {
//       setIsFullScreen(false)
//       image.current.style.transform = "scale(1)"
//       image.current.style.cursor = "auto"
//       image.current.removeEventListener("mousemove", onMouseOver)
//     }
//   }

//   function handleClick(event) {
//       console.log(isFullScreen)
//       if (!isFullScreen) {
//         return
//       }
//       const img = event.target
//       image.current = img

//       img.className = "tile"
//       if (img.style.transform === "scale(2.5)") {
//         // here we are zooming out
//         img.style.transform = "scale(1)"
//         img.style.cursor = "zoom-in"
//         img.removeEventListener("mousemove", onMouseOver)
//         setHasRegistered(false)
//         return
//       }
//       // here we are zooming in
//       img.style.transform = "scale(2.5)"
//       img.style.cursor = "zoom-out"
//       if (!hasRegistered) {
//           img.addEventListener("mousemove", onMouseOver)
//           setHasRegistered(true)
//         }
//       }
//     return (
//       <>
//         <Header nav_select={"cad"} />

//         <ImageGallery
//           items={images}
//           onClick={handleClick}
//           onScreenChange={onScreenChange}
//         />
//         <Footer />
//       </>
//     )
// }

export default Cad
