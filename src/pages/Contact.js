import React from "react"
import Footer from "../components/footer/Footer"

import Header from "../components/header/Header"

class Home extends React.Component {
  render() {
    return (
      <>
        <Header nav_select={"contact"} />
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="contact-page-map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12940.157244087897!2d10.6129693!3d35.8235112!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xae6f2747c81ea5ac!2sStade+olympique+de+Sousse!5e0!3m2!1sfr!2stn!4v1540136478684"
                  width={600}
                  height={450}
                  frameBorder={0}
                  style={{ border: 0 }}
                  allowFullScreen=""
                />{" "}
              </div>
              {/* map */}
            </div>
          </div>
        </div>

        <Footer />
      </>
    )
  }
}

export default Home

//  <div className="homepage-boxes">
//           <div className="container">
//             <div className="row">
//               <div className="col-12 col-md-6 col-lg-4">
//                 <div className="opening-hours">
//                   <h2 className="d-flex align-items-center">Horaires</h2>
//                   <ul className="p-0 m-0">
//                     <li>
//                       Lundi - Jeudi <span>8.00 - 19.00</span>
//                     </li>
//                     <li>
//                       Vendredi <span>8.00 - 18.30</span>
//                     </li>
//                     <li>
//                       Samedi <span>9.30 - 17.00</span>
//                     </li>
//                     <li>
//                       Dimanche <span>9.30 - 15.00</span>
//                     </li>
//                   </ul>
//                 </div>
//               </div>
//               <div className="col-12 col-md-6 col-lg-3 mt-5 mt-md-0">
//                 <div className="emergency-box">
//                   <h2 className="d-flex align-items-center">Numéro Tél</h2>
//                   <div className="call-btn button gradient-bg">
//                     <a
//                       className="d-flex justify-content-center align-items-center"
//                       href="#"
//                     >
//                       <img src="images/emergency-call.png" /> tél 00(216) 73
//                       203277/ GSM : 98 275 954
//                     </a>
//                   </div>
//                   <p>
//                     Contactez nous pour plus d'informations sur le numéro en
//                     dessus.
//                   </p>
//                 </div>
//               </div>
//               <div className="col-12 col-md-6 col-lg-5 mt-5 mt-lg-0">
//                 <div className="appointment-box">
//                   <h2 className="d-flex align-items-center">
//                     Demander un rendez-vous
//                   </h2>
//                   <form className="d-flex flex-wrap justify-content-between">
//                     <select className="select-department">
//                       <option value="value1">Demande de Consulting</option>
//                       <option value="value2">Demande de Formation</option>
//                       <option value="value3">Demande d'autres services</option>
//                     </select>
//                     <select className="select-doctor">
//                       <option>Lundi</option>
//                       <option>Mardi</option>
//                       <option>Mercredi</option>
//                       <option>Jeudi</option>
//                       <option>Vendredi</option>
//                       <option>Samedi</option>
//                     </select>
//                     <input type="text" placeholder="Nom et Prénom" />
//                     <input type="number" placeholder="Numéro Tél" />
//                     <input
//                       className="button gradient-bg"
//                       type="submit"
//                       defaultValue="Envoyer "
//                     />
//                   </form>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="contact-form">
//           <div className="container">
//             <div className="row">
//               <div className="col-12">
//                 <h2>Nous envoyer un message</h2>
//               </div>
//               <div className="col-12  col-md-4">
//                 <input type="text" placeholder="Nom et Prénom" />
//               </div>
//               {/* col-4 */}
//               <div className="col-12 col-md-4">
//                 <input type="email" placeholder="E-mail" />
//               </div>
//               {/* col-6 */}
//               <div className="col-12 col-md-4">
//                 <input type="text" placeholder="Sujet" />
//               </div>
//               <div className="col-12">
//                 <textarea
//                   name="name"
//                   rows={12}
//                   cols={80}
//                   placeholder="Message"
//                   defaultValue={""}
//                 />
//               </div>
//               <div className="col-12">
//                 <input
//                   type="submit"
//                   name=""
//                   defaultValue="Envoyer Message"
//                   className="button gradient-bg"
//                 />
//               </div>
//             </div>
//             {/* row */}
//           </div>
//         </div>
//         {/* contact-form */}

//         <div className="subscribe-banner">
//           <div className="container">
//             <div className="row">
//               <div className="col-12 col-lg-8 offset-lg-2">
//                 <h2>Recevez nos nouveautés</h2>
//                 <form>
//                   <input type="email" placeholder="Adresse E-mail " />
//                   <input
//                     className="button gradient-bg"
//                     type="submit"
//                     defaultValue="S'abonner"
//                   />
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
