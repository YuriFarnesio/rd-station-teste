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
    <div className="flex flex-col gap-2">
      <div>
        <div className="flex items-center gap-2">
          <span className="text-lg sm:text-xl">⚙️</span>
          <h3 className="text-base sm:text-lg text-gray-900 font-semibold leading-tight">
            Funcionalidades
          </h3>
        </div>

        <p className="text-xs sm:text-sm text-gray-600">
          Selecione as funcionalidades que você gostaria de ter:
        </p>
      </div>

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
    </div>
  )
}
