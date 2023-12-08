import React from 'react'
import '../Styles/Contact.css'

const Contact = () => {
  return (
    <div className="Contact">
      <div id='contact' className="row">
        <div className="col">
          {/* <img src={contact} className="card" alt="img" /> */}
        </div>
        <div className="col">
          <h3>
            Bonjour,<br/> je suis <b>Jordy AKRA MESCSHEBA</b>.<br/> Un Développeur full
            stack
          </h3>
          Le Lorem Ipsum est simplement du faux texte employé dans la
          composition et la mise en page avant impression. Le Lorem Ipsum est le
          faux texte standard de l'imprimerie depuis les années 1500, quand un
          imprimeur anonyme assembla ensemble des morceaux de texte pour
          réaliser un livre spécimen de polices de texte.
          <button className='download-cv'>Télécharger mon cv</button>
        </div>
        <hr />
      </div>
    
    </div>
  )
}

export default Contact
