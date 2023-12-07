
import '../styles/Header.css';

export default function Header() {
    return (
        <header className="conteneur-header">
            <div className='conteneur-accueil'>
                Accueil
            </div>
            <div className='conteneur-projet'>
                Projets
            </div>
            <div className='conteneur-faq'>
                Questions-reponses
            </div>
            <div className='conteneur-apropos'>
                à propos de moi
            </div>
        </header>
    )
}