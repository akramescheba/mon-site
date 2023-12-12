import { Link } from 'react-router-dom'
import '../Styles/Header.css'

const Header = () => {
  return (
    <header className="conteneur-header">
      <div className="Bienvenu">
      <a   className="logo-link" href='.'>
          <Link className="logo-link" to="/">akréa </Link>
        </a>
       
      </div>
      
      <div className="menu">
     
        <a   className="projets" href='.'>
          <Link className="projets" to="projets">Projets</Link>
        </a>
        <a  className="faq" href='.' >
          <Link className="faq" to="faq">Faq </Link>
        </a>
        <a  className="contact"  href='.'>
          <Link className="contact" to="me-contacter">contacts</Link>
        </a>
        {/* <a   className="blog" href="http://localhost:3001/projet">
          Server
        </a> */}
      </div>
    </header>
  )
}
export default Header
