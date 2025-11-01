import { Controller, useFormContext } from 'react-hook-form'

import type { RecommendationsForm } from '@/schemas/recommendations-form.schema'

import { RadioGroup } from '@/components/shared/RadioGroup'

const recommendationTypeOptions: {
  label: string
  value: RecommendationsForm['recommendationType']
}[] = [
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
    <div className="flex flex-col gap-2">
      <div>
        <div className="flex items-end gap-2">
          <span className="text-2xl">🎯</span>
          <h3 className="text-lg text-gray-900 font-semibold">
            Tipo de Recomendação
          </h3>
        </div>

        <p className="text-sm text-gray-600">
          Você deseja uma recomendação específica ou múltiplas opções?
        </p>
      </div>

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
  )
}
