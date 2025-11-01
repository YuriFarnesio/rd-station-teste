import { Controller, useFormContext } from 'react-hook-form'

import { useRecommendationsFormContext } from '@/contexts/recommendations-form.context'
import type { RecommendationsForm } from '@/schemas/recommendations-form.schema'

import { CheckboxGroup } from '@/components/shared/CheckboxGroup'

export function Preferences() {
  const { preferences } = useRecommendationsFormContext()

  const { control } = useFormContext<RecommendationsForm>()

  const preferenceOptions = preferences.map((preference) => ({
    label: preference,
    value: preference,
  }))

  return (
    <div className="flex flex-col gap-2">
      <div>
        <div className="flex items-end gap-2">
          <span className="text-lg sm:text-xl">💼</span>
          <h3 className="text-base sm:text-lg text-gray-900 font-semibold leading-tight">
            Preferências
          </h3>
        </div>

        <p className="text-xs sm:text-sm text-gray-600">
          Que tipo de recursos são mais importantes para você?
        </p>
      </div>

      <Controller
        name="preferences"
        control={control}
        render={({ field: { name, value, onChange } }) => (
          <CheckboxGroup
            name={name}
            value={value}
            options={preferenceOptions}
            onChange={onChange}
          />
        )}
      />
    </div>
  )
}
