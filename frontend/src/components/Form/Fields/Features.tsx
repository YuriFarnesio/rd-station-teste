import { Controller, useFormContext } from 'react-hook-form'

import { useRecommendationsFormContext } from '@/contexts/recommendations-form.context'
import type { RecommendationsForm } from '@/schemas/recommendations-form.schema'

import { CheckboxGroup } from '@/components/shared/CheckboxGroup'

export function Features() {
  const { features } = useRecommendationsFormContext()

  const { control } = useFormContext<RecommendationsForm>()

  const featureOptions = features.map((feature) => ({
    label: feature,
    value: feature,
  }))

  return (
    <div className="mb-4">
      <h2 className="text-lg font-bold mb-2">Funcionalidades:</h2>
      <ul>
        <Controller
          name="features"
          control={control}
          render={({ field: { name, value, onChange } }) => (
            <CheckboxGroup
              name={name}
              value={value}
              options={featureOptions}
              onChange={onChange}
            />
          )}
        />
      </ul>
    </div>
  )
}
