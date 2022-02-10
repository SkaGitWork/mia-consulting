import React from "react"

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-widgets">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-4">
              <div className="foot-about">
                <h2>
                  <a href="#">
                    <img src="images/logo.png" alt="" />
                  </a>
                </h2>

                <p>
                  MIAC est un bureau d’études et de formation spécialisé dans le
                  domaine de l’environnement et la sécurité des risques
                  industriels
                </p>

                <p className="copyright">
                  Copyright © 2022 Tout droit réservé MIAConsulting
                </p>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-4 mt-5 mt-md-0">
              <div className="foot-contact">
                <h2>Contact</h2>

                <ul className="p-0 m-0">
                  <li>
                    <span>Addresse:</span> Boulevard du Stade Olympique Rue
                    Nassen 4000 Sousse{" "}
                  </li>
                  <li>
                    <span>Numéros:</span> tél 00(216) 73 203277/ GSM : 98 275
                    954
                  </li>
                  <li>
                    <span>Email:</span> ds@miaconsulting.com.tn
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-4 mt-5 mt-md-0">
              <div className="foot-links">
                <h2>Liens utiles</h2>

                <ul className="p-0 m-0">
                  <li>
                    <a href="/">Accueil</a>
                  </li>
                  <li>
                    <a href="/about">à Propos</a>
                  </li>
                  <li>
                    <a href="/services">Nos Services</a>
                  </li>
                  <li>
                    <a href="/news">Nos formations</a>
                  </li>
                  <li>
                    <a href="/contact">Contact et infos</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
