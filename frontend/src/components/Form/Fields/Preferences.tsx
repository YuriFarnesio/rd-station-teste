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
    <div className="mb-4">
      <h2 className="text-lg font-bold mb-2">Preferências:</h2>
      <ul>
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
      </ul>
    </div>
  )
}
