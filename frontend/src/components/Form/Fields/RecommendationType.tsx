import { Controller, useFormContext } from 'react-hook-form'

import type { RecommendationsForm } from '@/schemas/recommendations-form.schema'

import { RadioGroup } from '@/components/shared/RadioGroup'

const recommendationTypeOptions = [
  {
    label: 'Produto Único',
    value: 'SingleProduct',
  },
  {
    label: 'Múltiplos Produtos',
    value: 'MultipleProducts',
  },
]

export function RecommendationType() {
  const { control } = useFormContext<RecommendationsForm>()

  return (
    <div className="mb-4">
      <h2 className="text-lg font-bold mb-2">Tipo de Recomendação:</h2>
      <div className="flex items-center">
        <Controller
          name="recommendationType"
          control={control}
          render={({ field: { name, value, onChange } }) => (
            <RadioGroup
              name={name}
              value={value}
              options={recommendationTypeOptions}
              onChange={onChange}
            />
          )}
        />
      </div>
    </div>
  )
}
