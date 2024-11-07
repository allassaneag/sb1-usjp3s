import React from 'react'
import ConceptCard from './ConceptCard'

function TradingConcepts() {
  const concepts = [
    {
      title: "Analyse Technique",
      description: "Utilisation des graphiques et indicateurs pour prédire les mouvements de prix futurs."
    },
    {
      title: "Analyse Fondamentale",
      description: "Évaluation de la valeur intrinsèque basée sur les données économiques et financières."
    },
    {
      title: "Mean Reversion",
      description: "Stratégie basée sur le retour des prix à leur moyenne historique."
    },
    {
      title: "Momentum Trading",
      description: "Exploitation des tendances de prix fortes et continues."
    },
    {
      title: "Machine Learning",
      description: "Utilisation d'algorithmes d'apprentissage pour identifier les opportunités de trading."
    }
  ]

  return (
    <div className="max-w-2xl mx-auto">
      {concepts.map((concept, index) => (
        <ConceptCard 
          key={index}
          title={concept.title}
          description={concept.description}
        />
      ))}
    </div>
  )
}

export default TradingConcepts