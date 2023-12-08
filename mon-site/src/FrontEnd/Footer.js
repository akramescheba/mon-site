import React from 'react'
import '../Styles/Footer.css'

const Footer = () => {
  return (
    <footer>
      <div className="Footer">

        <div className="row">

          <div className="col-md-4">
          <p>
          <hr/>
          Adresse :<a href=' https://www.google.com/maps/dir/48.7905268,2.3310221/C,+68+Rue+Camille+Desmoulins,+94230+Cachan/@48.79051,2.3284319,17z/data=!3m1!4b1!4m19!1m8!3m7!1s0x47e6713b9b293959:0x8cca9470321081bd!2sC,+68+Rue+Camille+Desmoulins,+94230+Cachan!3b1!8m2!3d48.7904966!4d2.3311061!16s%2Fg%2F11g_0gzwq!4m9!1m1!4e1!1m5!1m1!1s0x47e6713b9b293959:0x8cca9470321081bd!2m2!1d2.3311061!2d48.7904966!3e3?authuser=0&entry=ttu'
            target="_blank">
          68 rue Camille Desmoulins, 94230, Cachan
          </a>
            </p>
          <p>
          Tél:<a href='tel: +33652852906'>
          +33652852906
          </a>
            </p>
            
          <p>
          E-mail: <a href='mailto: meschebajordy@gmail.com'>
          meschebajordy@gmail.com
          </a>
          </p>  
          </div>

          <div className="col-md-4">

            <p>
            <hr/>
            <a href='https://github.com/akramescheba'>
            GitHub
          </a>
          
            </p>
            <p>
            <a href='https://www.linkedin.com/in/jordy-akra-mescheba/'>
            Linkedin
          </a>
            </p>
          </div>

          <div className="col-md-4">
            <p>
            <hr/>
              <i class="fa fa-phone"></i> +1 508-397-6284
            </p>
            <p>
          
              <i class="fa fa-envelope"></i> info@bostonbrewingcooperative.org
            </p>
          </div>
        </div>

      </div>
    </footer>
  )
}
export default Footer
