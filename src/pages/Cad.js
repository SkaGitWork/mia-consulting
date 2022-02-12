import React from "react"
import Footer from "../components/footer/Footer"

import Header from "../components/header/Header"

class Home extends React.Component {
  render() {
    return (
      <>
        <Header nav_select={"cad"} />
<div className="cadGallery">
          <img src="images/Plan Cad/Plan1.jpg" alt="" />
          <img src="images/Plan Cad/Plan1.jpg" alt="" />
          <img src="images/Plan Cad/Plan1.jpg" alt="" />
          <img src="images/Plan Cad/Plan1.jpg" alt="" />
  
</div>        <Footer />
      </>
    )
  }
}

export default Home
