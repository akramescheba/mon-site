import React from 'react'

import contact from '../asset/contact.png'
import Curriculum from '../BD/Curriculum-developpeur-fullstack-iscod.pdf'
import '../Styles/Contact.css'

const Contact = () => {

 const telechargerPDF = () => {
      // Remplacez "lien_vers_votre_pdf.pdf" par le chemin vers votre fichier PDF
      const lienPDF = Curriculum;
  
      // Créez un élément <a> (lien) invisible
      const lien = document.createElement('a');
      lien.style.display = 'none';
  
      // Définissez l'URL du lien vers le fichier PDF
      lien.href = lienPDF;
  
      // Définissez l'attribut "download" avec le nom que vous souhaitez pour le fichier téléchargé
      lien.download = "Curriculum";
  
      // Ajoutez le lien à la page
      document.body.appendChild(lien);
  
      // Simulez un clic sur le lien pour déclencher le téléchargement
      lien.click();
  
      // Supprimez le lien de la page une fois le téléchargement terminé
      document.body.removeChild(lien);
    };

 
  

  
  return (
    <div className="contact-content">
      <div className="card-content">

        <div className="content-image">

          <img src={contact} className="image-taille" alt="img" />
        </div>
        <div className="col">
      
          <p className='description-contact'>
          Bonjour,
            <br />
            je suis <b className='mon-nom'>Jordy AKRA MESCSHEBA</b>.<br /> Développeur full
            stack
            Le Lorem Ipsum est simplement du faux texte employé dans la
            composition et la mise en page avant impression. Le Lorem Ipsum est le
            faux texte standard de l'imprimerie depuis les années 1500, quand un
            imprimeur anonyme assembla ensemble des morceaux de texte pour
            réaliser un livre spécimen de polices de texte.
          </p>
          <button className='download-cv' onClick={telechargerPDF}>Télécharger mon cv</button>
          <button className='download-brochure'>Télécharger ma brochure</button>
        </div>

      </div>

    </div>
  )
}

export default Contact;
