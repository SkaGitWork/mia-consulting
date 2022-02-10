import React from "react"
import "./header.css"

class Header extends React.Component {
  render() {
    return (
      <header className="site-header">
        {/* Nav */}
        <div className="nav-bar">
          <div className="container">
            <div className="row">
              <div className="col-12 d-flex flex-wrap justify-content-between align-items-center">
                <div className="site-branding d-flex align-items-center">
                  <a className="d-block" href="/" rel="home">
                    <img className="d-block" src="images/logo.png" alt="logo" />
                  </a>
                </div>

                <nav className="site-navigation d-flex justify-content-end align-items-center">
                  <ul className="d-flex flex-column flex-lg-row justify-content-lg-end align-items-center">
                    <li className="current-menu-item">
                      <a href="/">Accueil</a>
                    </li>
                    <li>
                      <a href="/about">A propos</a>
                    </li>
                    <li>
                      <a href="/services">Nos Services</a>
                    </li>
                    <li>
                      <a href="/formation">Nos formations</a>
                    </li>
                    <li>
                      <a href="/contact">Contact et infos</a>
                    </li>

                    <li className="call-btn button gradient-bg mt-3 mt-md-0">
                      <span
                        className="d-flex justify-content-center align-items-center"
                        href="#"
                      >
                        <img src="images/emergency-call.png" /> 98 275 954
                      </span>
                    </li>
                  </ul>
                </nav>

                <div className="hamburger-menu d-lg-none" id="ham">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sliders */}
        <div className="swiper-container hero-slider">
          <div className="swiper-wrapper">
            {/* Slider 1 */}
            <div
              className="swiper-slide hero-content-wrap"
              style={{
                backgroundImage: `url("images/hero.jpg")`,
              }}
            >
              <div className="hero-content-overlay position-absolute w-100 h-100">
                <div className="container h-100">
                  <div className="row h-100">
                    <div className="col-12 col-lg-6 d-flex flex-column justify-content-center align-items-start">
                      <div className="entry-header">
                        <br />
                        <br />
                        <br />

                        <h1>
                          Management <br />
                          Ingénierie <br /> Assistance <br /> et Conseils (MIAC)
                        </h1>
                      </div>

                      <div className="entry-content mt-4">
                        <p>
                          {" "}
                          MIAC est un bureau d’études et de formation spécialisé
                          dans le domaine de l’environnement et la sécurité des
                          risques industriels … 
                        </p>
                      </div>

                      <div className="entry-footer d-flex flex-wrap align-items-center mt-4">
                        <a href="#" className="button gradient-bg">
                          à propos de nous
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Slider 2 */}
            <div
              className="swiper-slide hero-content-wrap"
              style={{
                backgroundImage: `url("images/plan_autocad.png")`,
              }}
            >
              <div className="hero-content-overlay position-absolute w-100 h-100">
                <div className="container h-100">
                  <div className="row h-100">
                    <div className="col-12 col-lg-6 d-flex flex-column justify-content-center align-items-start">
                      <div className="entry-header">
                        <br />
                        <br />
                        <br />

                        <h1>
                          Création <br />
                          de plan <br /> d'évacuation
                        </h1>
                      </div>

                      <div className="entry-content mt-4">
                        <p>
                          {" "}
                          MIAC est un bureau d’études et de formation spécialisé
                          dans le domaine de l’environnement et la sécurité des
                          risques industriels … 
                        </p>
                      </div>

                      <div className="entry-footer d-flex flex-wrap align-items-center mt-4">
                        <a href="#" className="button gradient-bg">
                          à propos de nous
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Index */}
          <div className="pagination-wrap position-absolute w-100">
            <div className="swiper-pagination d-flex flex-row flex-md-column"></div>
          </div>
        </div>
      </header>
    )
  }
}

export default Header
