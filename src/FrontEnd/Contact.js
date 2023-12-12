import React from 'react';
import call from '../IconeReseaux/phone.svg';
import discord from '../IconeReseaux/discord.svg';
import whatsapp from '../IconeReseaux/whatsapp.svg';
import twitter from '../IconeReseaux/twitter.svg';
import contact from '../asset/contact.png';
import Curriculum from '../BD/Developpeur-full-stack.pdf';
import '../Styles/Contact.css';
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

          <div className='description-contact'>

            <br />
            <b className='mon-nom'>Jordy AKRA MESCHEBA</b>
            <br />
            <h1 className='conteneur-titre-contact'>Développeur full stack</h1>
            <br />
            <h2 className='text-titre'>Ce que je recherche</h2>
            <p className='conteneur-paragraphe'>
              Je suis une personne autonome,travailleur et 
              rigoureux, doté d'une forte éthique professionnelle.
              <br/>
              Ma nature sociable et mon esprit d'équipe me permettent de collaborer
              efficacement au sein d'une équipe .
              <br/>
           Je recherche activement une opportunité
        d'alternance de 12 mois afin de poursuivre mon M2 d'Expert en Ingénierie Logicielle.
        </p>
          </div>
          <div className='groupe-button'>
            <button className='download-cv'onClick={telechargerPDF} > mon cv</button>
            <button className='download-brochure'>Brochure</button>
          </div>
          <div className='groupe-icon'>
            <a  href='tel:+33652852906'>
              <img src={call} className='contact-call' alt="call"/>
              </a>
              <a  href='/'>
              <img src={discord}  className='contact-discord' alt="discord" />
              </a>
              <a  href='whatsapp:+33652852906'>
              <img src={whatsapp}  className='contact-whatsapp' alt="whatsapp" />
              </a>
              <a  href='/'>
              <img src={twitter}  className='contact-twitter' alt="twitter" />

              </a>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Contact;
