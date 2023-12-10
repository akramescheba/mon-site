import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import '../Styles/Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="Footer">

        <div className="row">

          <div className="col-md-4">
            <p className='text-footer'>
              <hr />
              Adresse :<a href=' https://www.google.com/maps/dir/48.7905268,2.3310221/C,+68+Rue+Camille+Desmoulins,+94230+Cachan/@48.79051,2.3284319,17z/data=!3m1!4b1!4m19!1m8!3m7!1s0x47e6713b9b293959:0x8cca9470321081bd!2sC,+68+Rue+Camille+Desmoulins,+94230+Cachan!3b1!8m2!3d48.7904966!4d2.3311061!16s%2Fg%2F11g_0gzwq!4m9!1m1!4e1!1m5!1m1!1s0x47e6713b9b293959:0x8cca9470321081bd!2m2!1d2.3311061!2d48.7904966!3e3?authuser=0&entry=ttu'
                target="_blank">
                68 rue Camille Desmoulins, 94230, Cachan
              </a>
            </p>
            <p className='text-footer'>
              Tél:<a href='tel: +33652852906'>
                +33652852906
              </a>
            </p>

            <p className='text-footer'>
              E-mail: <a href='mailto: meschebajordy@gmail.com'>
                meschebajordy@gmail.com
              </a>
            </p>
          </div>
          
          <div className="col-md-4">
            <hr />
            <h5 className='titre-formulaire'>Vos commentaires sont les bienvenus</h5>
            <div className='formulaire'>
              <input className=' saisie-nom' type='text' placeholder='saisir votre nom' required />
              <input className='saisie-email' type='email' placeholder='saisir votre mail*' required />
              <input className='saisie-numéro' type='number' placeholder='saisir numéro*' required />
              <input className='saisie-message' type='text' placeholder='saisir message*' required />
            </div>
        
            <button className='button-formulaire'>
              Envoyer
              <FontAwesomeIcon icon={faPaperPlane} size='2x' />
            </button>
    
          </div>
          <hr />

          <div className='icon-reseaux'>

            <a href='https://github.com/akramescheba' target="_blank" rel="noopener noreferrer" className="social-icon" >
              <FontAwesomeIcon icon={faGithub} color='#F1F0EA' size='3x' />
            </a>
            <a href='https://www.linkedin.com/in/jordy-akra-mescheba/' target="_blank" rel="noopener noreferrer" className="social-icon" >
              <FontAwesomeIcon icon={faLinkedinIn} color='#F1F0EA' size='3x' />
            </a>
          </div>

        </div>

      </div>

    </footer>
  )
}
export default Footer
