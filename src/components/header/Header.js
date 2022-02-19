import React from "react"
import Hero from "./Hero"
import "./header.css"

class Header extends React.Component {
  render() {
    return (
      <header className={"site-header " + this.props.nav_select}>
        {/* Nav */}
        <div className="nav-bar">
          <div className="container">
            <div className="row">
              <div className="col-12 d-flex flex-wrap justify-content-between align-items-center ">
                <div className="site-branding d-flex align-items-center">
                  <a className="d-block" href="/" rel="home">
                    <img className="d-block" src="images/logo.png" alt="logo" />
                  </a>
                </div>

                <nav className="site-navigation d-flex justify-content-end align-items-center ">
                  <ul className="d-flex flex-column flex-lg-row justify-content-lg-end align-items-center Cnav">
                    <li>
                      <a href="/">Accueil</a>
                    </li>
                    <li>
                      <a href="/services">Nos Services</a>
                    </li>
                    <li>
                      <a href="/formation">Nos formations</a>
                    </li>
                    <li>
                      <a href="/contact">Contact</a>
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
            <Hero
              src="var(--hero1)"
              title={
                <>
                  Management <br /> Ingénierie <br /> Assistance <br /> et
                  Conseils (MIAC){" "}
                </>
              }
              text={
                <>
                  <strong>MIAC </strong>
                  est un bureau d’études et de formation spécialisé dans le
                  domaine de l’environnement et la sécurité des risques
                  industriels...
                </>
              }
            />
            {/* Slider 2 */}
            <Hero
              src="var(--plan_autocad)"
              title={
                <>
                  Elaboration <br />
                  de plan <br /> d'évacuation
                </>
              }
              text={
                <>
                  <strong>MIAC </strong>
                  Elabore des plans d'évacuation pour votre entreprise, voir{" "}
                  {<a href="/services#cad"> Nos services</a>} pour plus de
                  détails.
                </>
              }
            />
            {/* Slider 3 */}

            <Hero
              src="var(--tracage)"
              title={
                <>
                  Traçage au sol <br />
                  et séparation
                  <br /> des voies de circulation
                </>
              }
              text={
                <>
                  <strong>MIAC </strong>
                  vous aide à la réalisation du traçage au sol et la séparation
                  des voies de circulation.
                </>
              }
            />
            {/* Slider 4 */}
            <Hero
              src="var(--signal)"
              title={
                <>
                  Assistance pour <br />
                  la mise en place <br />
                  de la signalisation <br />
                  au sein de l'entreprise.
                </>
              }
              text={
                <>
                  <strong>MIAC </strong>
                  vous aide à la mise en place de la signalisation au sein de
                  l'entreprise.
                </>
              }
            />
          </div>
          {/* Index */}
          <div className="pagination-wrap position-absolute w-100 Cindex">
            <div className="swiper-pagination d-flex flex-column"></div>
          </div>
        </div>
      </header>
    )
  }
}

export default Header
