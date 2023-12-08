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
              <div className="accordion-body">

              {/* ma presentation */}

              Bonjour  je m'appelle <b>Jordy AKRA MESCHEBA</b>, et je suis ravi de vous accueillir sur mon <code>portfolio</code> ! Actuellement, je suis étudiant en Master 2 de Développement Web, Big-Data & Intelligence Artificielle. Avec une passion débordante pour la technologie et l'innovation, je me suis engagé dans ce domaine fascinant pour explorer les multiples facettes du développement web et plonger dans les vastes domaines du Big Data et de l'IA.

Mon parcours académique et professionnel m'a offert une riche expérience dans le développement web, où j'ai pu appliquer mes connaissances théoriques pour créer des solutions concrètes et fonctionnelles. Mon engagement dans ce domaine remonte à deux ans, au cours desquels j'ai travaillé sur divers projets passionnants et appris à maîtriser les dernières technologies et tendances.

Mon approche du développement web va au-delà du simple codage. Je suis constamment à l'affût des dernières avancées et je m'efforce d'intégrer les meilleures pratiques pour créer des expériences utilisateur fluides et efficaces. Ma curiosité naturelle me pousse à explorer de nouvelles idées et à résoudre des problèmes complexes, contribuant ainsi à mon développement professionnel continu.

Dans le domaine du Big Data et de l'IA, je suis particulièrement intéressé par la manière dont ces technologies peuvent être utilisées pour résoudre des défis du monde réel. Mon parcours académique me permet d'acquérir une compréhension approfondie des concepts sous-jacents et de développer des compétences pratiques pour appliquer ces connaissances dans des projets concrets.

Que ce soit en codant une application web, en explorant des ensembles de données massifs ou en créant des solutions d'IA innovantes, je suis passionné par la possibilité de contribuer à façonner l'avenir numérique. Explorez mon portfolio pour découvrir certains de mes projets passés et actuels, ainsi que pour en savoir plus sur mes compétences et mon approche du développement web, du Big Data et de l'IA.

Je suis toujours ouvert aux nouvelles opportunités de collaboration et d'apprentissage, alors n'hésitez pas à me contacter si vous souhaitez discuter de projets, d'idées ou simplement échanger des expériences.

Merci de visiter mon portfolio, et j'ai hâte de partager davantage avec vous sur mon parcours et mes réalisations !


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
              <h3> Pourquoi me recruter  ?</h3>
              </button>
            </h2>
            <div
              id="flush-collapseOne"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingOne"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                Placeholder content for this accordion, which is intended to
                demonstrate the <code>.accordion-flush</code> className. This is
                the first item's accordion body.
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
              <h3>  Qu'est ce que je pourrais apporter à l'entreprise?</h3>
              </button>
            </h2>
            <div
              id="flush-collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingTwo"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                Placeholder content for this accordion, which is intended to
                demonstrate the <code>.accordion-flush</code> className. This is
                the second item's accordion body. Let's imagine this being
                filled with some actual content.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default FAQ
