import type { RecommendationsForm } from '@/schemas/recommendations-form.schema'
import type { Product } from './product.service'

export function getRecommendations(
  data: RecommendationsForm,
  products: Product[] = [],
): string[] {
  const { preferences, features, recommendationType } = data

  if (products.length === 0) return []

  const scored = products.map((product) => {
    const preferenceMatches = product.preferences.filter((p) =>
      preferences.includes(p),
    ).length

    const featureMatches = product.features.filter((f) =>
      features.includes(f),
    ).length

    const score = preferenceMatches + featureMatches

    return { product, score }
  })

  const maxScore = Math.max(...scored.map((s) => s.score))

  if (maxScore <= 0) return []

  const multiple = scored
    .filter((s) => s.score > 0)
    .sort((a, b) => b.score - a.score || b.product.id - a.product.id)
    .map((s) => s.product.name)

  if (!multiple.length) return []

  const isSingle = recommendationType === 'SingleProduct'
  return isSingle ? [multiple[0]!] : multiple
}
