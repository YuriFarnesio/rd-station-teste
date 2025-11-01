import { useRecommendationsFormContext } from '@/contexts/recommendations-form.context'
import { cn } from '@/lib/utils'
import type { Product } from '@/services/product.service'

const categoryIcons: Record<Product['category'], string> = {
  Vendas: '💼',
  Marketing: '📈',
  Omnichannel: '💬',
  'Uso de Inteligência Artificial': '🤖',
}

const categoryColors: Record<Product['category'], string> = {
  Vendas: 'from-green-500 to-emerald-600',
  Marketing: 'from-blue-500 to-cyan-600',
  Omnichannel: 'from-purple-500 to-violet-600',
  'Uso de Inteligência Artificial': 'from-orange-500 to-red-600',
}

const categoryBadgeColors: Record<Product['category'], string> = {
  Vendas: 'bg-green-100 text-green-800 border-green-200',
  Marketing: 'bg-blue-100 text-blue-800 border-blue-200',
  Omnichannel: 'bg-purple-100 text-purple-800 border-purple-200',
  'Uso de Inteligência Artificial':
    'bg-orange-100 text-orange-800 border-orange-200',
}

export function RecommendationList() {
  const { recommendations } = useRecommendationsFormContext()

  return (
    <div className="flex flex-col gap-4 sm:gap-6 bg-white border border-gray-200 rounded-xl shadow-sm p-4 sm:p-6">
      <div className="flex flex-col gap-1">
        <div className="flex items-end gap-2">
          <span className="text-xl sm:text-2xl">🎯</span>
          <h3 className="text-lg sm:text-xl text-gray-900 font-semibold leading-snug">
            Suas Recomendações
          </h3>
        </div>

        <p className="text-xs sm:text-sm text-gray-600">
          {!recommendations.length
            ? 'Preencha o formulário para receber recomendações personalizadas'
            : `Encontramos ${recommendations.length} produto(s) ideal(is) para você:`}
        </p>
      </div>

      {!recommendations.length ? (
        <div className="text-center py-8 sm:py-12">
          <p className="text-4xl sm:text-6xl mb-4 animate-bounce">🔍</p>

          <h4 className="text-base sm:text-lg text-gray-900 font-medium mb-2">
            Aguardando suas preferências
          </h4>

          <p className="text-sm sm:text-base text-gray-600 px-2">
            Complete o formulário ao lado para descobrir os produtos RD Station
            perfeitos para seu negócio
          </p>
        </div>
      ) : (
        <div className="flex flex-col gap-3 sm:gap-4">
          {recommendations.map((product, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-xl hover:shadow-lg transform hover:-translate-y-1 p-4 sm:p-6 transition-all duration-300"
            >
              <div className="flex items-start gap-3 sm:gap-4">
                <div
                  title={`Categoria: ${product.category}`}
                  className={cn(
                    'shrink-0 size-10 sm:size-12 flex items-center justify-center bg-linear-to-br rounded-xl text-xl sm:text-2xl shadow-lg',
                    categoryColors[product.category],
                  )}
                >
                  {categoryIcons[product.category]}
                </div>

                <div className="flex-1 flex flex-col gap-2 min-w-0">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-2">
                    <h4 className="text-base sm:text-lg text-gray-900 font-semibold wrap-break-word">
                      {product.name}
                    </h4>

                    <span
                      className={cn(
                        'text-xs font-medium border rounded-full py-1 px-3 self-start sm:ml-2 whitespace-nowrap',
                        categoryBadgeColors[product.category],
                      )}
                    >
                      {product.category}
                    </span>
                  </div>

                  <div className="flex flex-col gap-2 sm:gap-3">
                    <div>
                      <h5 className="flex items-center gap-1 text-xs sm:text-sm font-medium text-gray-700 mb-2">
                        <span>✨</span>
                        Principais Recursos:
                      </h5>

                      <ul className="list-disc ml-4 sm:ml-5 text-xs sm:text-sm text-gray-600 space-y-1 list-green-marker">
                        {product.features.map((feature, featureIndex) => (
                          <li key={featureIndex}>{feature}</li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h5 className="text-xs sm:text-sm font-medium text-gray-700 mb-2 flex items-center gap-1">
                        <span>🎯</span>
                        Preferências:
                      </h5>

                      <ul className="list-disc ml-4 sm:ml-5 text-xs sm:text-sm text-gray-600 space-y-1 list-blue-marker">
                        {product.preferences.map(
                          (preference, preferenceIndex) => (
                            <li key={preferenceIndex}>{preference}</li>
                          ),
                        )}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {recommendations.length > 0 && (
            <div className="bg-linear-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-xl p-3 sm:p-4 mt-2">
              <div className="flex items-start gap-2">
                <span className="text-xl sm:text-2xl">💡</span>

                <div className="flex flex-col gap-1 mt-1">
                  <h5 className="text-xs sm:text-sm text-gray-900 font-semibold">
                    Próximos Passos
                  </h5>
                  <p className="text-xs sm:text-sm text-gray-700">
                    Entre em contato com nossa equipe para saber mais sobre
                    estes produtos e como eles podem transformar seu negócio!
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
