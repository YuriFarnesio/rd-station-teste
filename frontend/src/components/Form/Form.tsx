import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useForm } from 'react-hook-form'

import { useRecommendationsFormContext } from '@/contexts/recommendations-form.context'
import {
  recommendationsFormSchema,
  type RecommendationsForm,
} from '@/schemas/recommendations-form.schema'
import { getRecommendations } from '@/services/recommendation.service'

import { Features, Preferences, RecommendationType } from './Fields'

export function Form() {
  const { products, setRecommendations } = useRecommendationsFormContext()

  const formMethods = useForm<RecommendationsForm>({
    resolver: zodResolver(recommendationsFormSchema),
    defaultValues: {
      preferences: [],
      features: [],
      recommendationType: 'SingleProduct',
    },
  })

  const onSubmit = (data: RecommendationsForm) => {
    const recommendedProducts = getRecommendations(data, products)
    setRecommendations(recommendedProducts)
  }

  return (
    <FormProvider {...formMethods}>
      <form
        onSubmit={formMethods.handleSubmit(onSubmit)}
        className="flex flex-col gap-4 sm:gap-6 bg-white border border-gray-200 rounded-xl shadow-sm p-4 sm:p-6"
      >
        <div className="flex flex-col gap-1">
          <div className="flex items-end gap-2">
            <span className="text-xl sm:text-2xl">📋</span>
            <h3 className="text-lg sm:text-xl text-gray-900 font-semibold">
              Configure suas preferências
            </h3>
          </div>

          <p className="text-xs sm:text-sm text-gray-600">
            Selecione as opções que melhor descrevem suas necessidades
          </p>
        </div>

        <div className="flex flex-col gap-4 sm:gap-6">
          <Preferences />
          <Features />
          <RecommendationType />
        </div>

        <hr className="border-gray-200 -mb-2" />

        <button
          type="submit"
          className="w-full hover:scale-102 active:scale-95 bg-linear-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-1 cursor-pointer py-2.5 sm:py-3 px-4 sm:px-6 transition-all duration-300"
        >
          <span className="flex items-center justify-center gap-2">
            <span className="text-sm sm:text-base">Obter recomendação</span>
            <span className="text-base sm:text-lg">🚀</span>
          </span>
        </button>
      </form>
    </FormProvider>
  )
}
