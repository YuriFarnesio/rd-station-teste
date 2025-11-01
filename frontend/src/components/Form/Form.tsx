import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useForm } from 'react-hook-form'

import { useRecommendationsFormContext } from '@/contexts/recommendations-form.context'
import {
  recommendationsFormSchema,
  type RecommendationsForm,
} from '@/schemas/recommendations-form.schema'
import { getRecommendations } from '@/services/recommendation.service'

import { Features, Preferences, RecommendationType } from './Fields'
import { SubmitButton } from './SubmitButton'

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
        className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-md"
        onSubmit={formMethods.handleSubmit(onSubmit)}
      >
        <Preferences />
        <Features />
        <RecommendationType />
        <SubmitButton text="Obter recomendação" />
      </form>
    </FormProvider>
  )
}
