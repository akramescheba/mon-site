import { Link } from 'react-router-dom'
import '../Styles/App.css'

const Header = () => {
  return (
    <header className="App-header">
      <div className="Bienvenu">
        <p>Bienvenu sur mon site</p>
      </div>
      <div className="menu">
        <a   className="home" href='.'>
          <Link className="home" to="/">Accueil</Link>
        </a>
        <a   className="projets" href='.'>
          <Link className="projets" to="projets">Projets</Link>
        </a>
        <a  className="faq" href='.' >
          <Link className="faq" to="faq">Questions fréquentes</Link>
        </a>
        <a  className="contact"  href='.'>
          <Link className="contact" to="me-contacter">Me contacter</Link>
        </a>
        <a   className="blog" href="http://localhost:3001/projet">
          Server
        </a>
      </div>
    </header>
  )
}
export default Header
