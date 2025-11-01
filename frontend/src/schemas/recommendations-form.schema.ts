import z from 'zod'

export const recommendationsFormSchema = z.object({
  preferences: z.array(z.string()),
  features: z.array(z.string()),
  recommendationType: z.enum(['SingleProduct', 'MultipleProducts']),
})

export type RecommendationsForm = z.infer<typeof recommendationsFormSchema>
