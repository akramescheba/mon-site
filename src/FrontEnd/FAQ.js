import React from 'react'
import '../Styles/FAQ.css'

const FAQ = () => {
  return (
    <>
      <div className="FAQ">
        {/* Accodeon */}
        <div className="accordion accordion-flush" id="accordionFlushExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseThree"
                aria-expanded="false"
                aria-controls="flush-collapseThree"
              >
                <h3>Qui suis-je</h3>
              </button>
            </h2>
            <div
              id="flush-collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingThree"
              data-bs-parent="#accordionFlushExample"
            >
              {/* ma presentation */}
              <div className="accordion-body">
             
              <p className='text-faq'>
              je suis <b>Jordy AKRA MESCHEBA</b>, actuellement étudiant en Master 2 d'Experte en Ingénieurie logicielle à l'ISCOD.
              </p>

                  <p className='text-faq'>
                  Ma passion débordante pour la technologie et l'innovation s'est concrétisée au cours de mes deux années d'expérience dans le domaine du Developpement web.
                  </p>

                  <p className='text-faq'>     
                    Mon dernier stage s'est déroulé au sein d'un atelier de <b>tailleurs sur-mesure</b>  à Paris, où j'ai collaboré avec des experts en développement web, SEO et SEA, où j'ai pu travaillé sur la migration d'un site en préproduction vers le site existant de l'entreprise, acquérant ainsi des compétences significatives en SEO et SEA et d'approfondire mes compétencesen developpement web.
                    </p>
                  <p className='text-faq'>
                  Mon parcours inclut également une variété de projets, allant de réalisations personnelles à des missions en freelance.
                  </p>
                  
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingOne">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne"
                aria-expanded="false"
                aria-controls="flush-collapseOne"
              >
                <h3> Pourquoi me recruter ?</h3>
              </button>
            </h2>
            <div
              id="flush-collapseOne"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingOne"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                <p className='text-faq'>
                  Si vous me donnez l'opportunité de rejoindre votre équipe, je mettrai à votre disposition mes compétences regroupées sous l'acronyme DRP, englobant le <b>Développement</b> de sites web et d'applications mobiles.
                </p>

                <p className='text-faq'>
                  Mon approche se distingue par une écriture de code claire et élaborée, agrémentée de commentaires pour faciliter la compréhension des autres développeurs. Je m'attache également à organiser l'arborescence par composant, favorisant ainsi une meilleure gestion du projet. En ce qui concerne le <b>Référencement</b>, je m'appuie sur des pratiques exemplaires telles que l'utilisation de métadonnées, l'optimisation des titres H1, H2, H3, et l'exploitation d'outils puissants tels que le SEO in One de Google pour éviter tout risque de sous-référencement ou de sur-référencement.

                </p>

                <p className='text-faq'>
                  En matière de <b>Publicité</b>, mon expertise s'étend au SEA, où je développe des stratégies efficaces telles que l'utilisation d'e-mails ciblés pour les clients existants, l'analyse approfondie des avis clients pour comprendre leurs retours, l'interaction proactive avec les clients en répondant à leurs avis, ainsi que la proposition de promotions attrayantes. Ces compétences ont été affinées grâce à mes expériences en marketing chez Metro et Ikea, notamment dans le domaine du Service Relation Clients .

                </p>
                <p className='text-faq'> Mon engagement est de contribuer activement au succès de votre entreprise en mettant en œuvre ces techniques avancées et en tirant parti de mes antécédents en marketing et en développement web.
                </p>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseTwo"
                aria-expanded="false"
                aria-controls="flush-collapseTwo"
              >
                <h3>Ce que j'attend de vous</h3>
              </button>
            </h2>
            <div
              id="flush-collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingTwo"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                <p className='text-faq'>
                  Je recherche un environnement dynamique, au sein d'une entreprise stimulante qui propose des défis favorisant le développement de mes compétences. L'idéal serait de rejoindre une équipe collaborative prête à m'accompagner dans l'évolution de ma carrière. Je suis particulièrement attiré par un cadre de travail où règne une atmosphère propice à l'épanouissement professionnel, et où les opportunités d'évolution sont encouragées dans un esprit startup.

                </p>

              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseTree"
                aria-expanded="false"
                aria-controls="flush-collapseTwo"
              >
                <h3>Vos avantages </h3>
              </button>
            </h2>
            <div
              id="flush-collapseTree"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingTree"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                <p className='text-faq'>
                  Une formation adaptée aux temps forts de l'entreprise, me permettant d'acquérir de nouvelles compétences opérationnelles afin de mener à bien les missions que vous voudrez bien me confier. Cette formation en alternance se déroule en ligne selon les modalités suivantes :
                </p>
                <p className='text-faq'>
                  - Des rentrées toute l'année (pas de date fixe de rentrée)
                </p>

                <p className='text-faq'>
                  - Un rythme d'alternance optimisé : 4 jours en entreprise / 1 jour en formation, adapté aux temps forts d'activité de votre entreprise
                </p>
                <p className='text-faq'>
                  - Un programme de formation à la carte : vous déterminez l'ordre des modules à suivre en fonction des missions que vous serez amené à me confier.
                </p>
                <p className='text-faq'> De plus, pour toute embauche en alternance vous bénéficiez d'une prime de 6000€ grâce au plan "1 jeune, 1 solution", et si vous êtes éligible, votre OPCO se chargera de payer les frais de ma formation ce qui diminue considérablement le coût lié à mon embauche.
                </p>
                <p className='text-faq'>
                  Vous trouverez ci-joint mon CV ainsi que la brochure de présentation de l'ISCOD.

                  Etant dans la perspective de collaborer avec vous, j'espere avoir un  entretien afin de discuter de mon parcours.

                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}
export default FAQ
