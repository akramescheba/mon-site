import React from 'react'
import '../Styles/Projets.css'

const Projets = () => {
  const jsonData = require('../BD/liste.json')

  return (
    <div className="Projets">
      {jsonData.map((projet, index) => (
        <div key={index} className="card-projet">
          <a href={projet.url} target="_blank" rel="noopener noreferrer">
            <img src={projet.image} className="card-img-top" alt={projet.alt} />
          </a>
          <div className="card-body">
            <h5 className="card-title">
              <a href={projet.url} target="_blank" rel="noopener noreferrer">
                {projet.title}
              </a>
            </h5>
            <p className="card-text"> {projet.contexte}</p>
            <p className="card-text"> {projet.description}</p>
            <p className="card-text">
              <small className="text-muted">{projet.lastUpdated}</small>
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Projets
