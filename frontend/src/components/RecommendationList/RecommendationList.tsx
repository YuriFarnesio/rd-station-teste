import { useRecommendationsFormContext } from '@/contexts/recommendations-form.context'

export function RecommendationList() {
  const { recommendations } = useRecommendationsFormContext()

  return (
    <div>
      <h2 className="text-lg font-bold mb-4">Lista de Recomendações:</h2>

      {!recommendations.length ? (
        <p>Nenhuma recomendação encontrada.</p>
      ) : (
        <ul>
          {recommendations.map((recommendation, index) => (
            <li key={index} className="mb-2">
              {recommendation}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
