import { FormData, Product } from '../types'

export type { Product } from '../types'

export function getRecommendations(
  formData: FormData = {
    selectedPreferences: [],
    selectedFeatures: [],
    selectedRecommendationType: '',
  },
  products: Product[] = [],
): Product[] {
  const {
    selectedPreferences = [],
    selectedFeatures = [],
    selectedRecommendationType = '',
  } = formData

  if (products.length === 0) return []

  const scored = products.map((product) => {
    const preferenceMatches = product.preferences.filter((p) =>
      selectedPreferences.includes(p),
    ).length

    const featureMatches = product.features.filter((f) =>
      selectedFeatures.includes(f),
    ).length

    const score = preferenceMatches + featureMatches

    return { product, score }
  })

  const maxScore = Math.max(...scored.map((s) => s.score))

  if (maxScore <= 0) return []

  const multiple = scored
    .filter((s) => s.score > 0)
    .sort((a, b) => b.score - a.score || b.product.id - a.product.id)
    .map((s) => s.product)

  if (!multiple.length) return []

  const isSingle = selectedRecommendationType === 'SingleProduct'
  return isSingle ? [multiple[0]!] : multiple
}

export default { getRecommendations }
