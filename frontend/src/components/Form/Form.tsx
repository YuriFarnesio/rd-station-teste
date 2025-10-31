import React from 'react'
import useForm from '../../hooks/useForm'
import useProducts from '../../hooks/useProducts'
import useRecommendations from '../../hooks/useRecommendations'
import { FormData, FormProps } from '../../types'
import { Features, Preferences, RecommendationType } from './Fields'
import SubmitButton from './SubmitButton'

function Form({ onRecommendationsChange }: FormProps) {
  const { preferences, features, products } = useProducts()
  const { formData, handleChange } = useForm<FormData>({
    selectedPreferences: [],
    selectedFeatures: [],
    selectedRecommendationType: '',
  })

  const { getRecommendations } = useRecommendations(products)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const dataRecommendations = getRecommendations(formData)

    // Atualiza a lista de recomendações no componente pai (App) quando fornecido
    if (onRecommendationsChange) {
      onRecommendationsChange(dataRecommendations)
    }
  }

  return (
    <form
      className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-md"
      onSubmit={handleSubmit}
    >
      <Preferences
        preferences={preferences}
        onPreferenceChange={(selected) =>
          handleChange('selectedPreferences', selected)
        }
      />
      <Features
        features={features}
        onFeatureChange={(selected) =>
          handleChange('selectedFeatures', selected)
        }
      />
      <RecommendationType
        onRecommendationTypeChange={(selected) =>
          handleChange('selectedRecommendationType', selected)
        }
      />
      <SubmitButton text="Obter recomendação" />
    </form>
  )
}

export default Form
