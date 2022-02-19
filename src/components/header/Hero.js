import React, { Component } from "react"

export class Hero extends Component {
  render() {
    return (
      <div
        className="swiper-slide hero-content-wrap"
        style={{
          backgroundImage: this.props.src,
        }}
      >
        <div className="hero-content-overlay position-absolute w-100 h-100">
          <div className="container h-100">
            <div className="row h-100">
              <div className="col-12 col-lg-6 d-flex flex-column justify-content-center align-items-start">
                <div className="Ctext">
                  <div className="entry-header">
                    <br />
                    <br />
                    <br />
                    <h1>{this.props.title}</h1>
                  </div>

                  <div className="entry-content mt-4">
                    <p>
                      {this.props.text}
                    </p>
                  </div>
                </div>

                <div className="entry-footer d-flex flex-wrap align-items-center mt-4">
                  {/* <a href="#" className="button gradient-bg">
                          à propos de nous
                        </a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Hero
