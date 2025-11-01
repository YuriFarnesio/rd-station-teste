import z from 'zod'

export const recommendationsFormSchema = z.object({
  preferences: z.array(z.string()).min(1, 'Select at least one preference'),
  features: z.array(z.string()).min(1, 'Select at least one feature'),
  recommendationType: z.enum(['SingleProduct', 'MultipleProducts']),
})

export type RecommendationsForm = z.infer<typeof recommendationsFormSchema>
