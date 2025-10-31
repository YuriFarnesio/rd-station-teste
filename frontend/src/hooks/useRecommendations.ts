import { useState } from 'react'
import recommendationService from '../services/recommendation.service'
import { FormData, Product } from '../types'

function useRecommendations(products: Product[]) {
  const [recommendations, setRecommendations] = useState<Product[]>([])

  const getRecommendations = (formData: FormData) => {
    return recommendationService.getRecommendations(formData, products)
  }

  return { recommendations, getRecommendations, setRecommendations } as const
}

export default useRecommendations
