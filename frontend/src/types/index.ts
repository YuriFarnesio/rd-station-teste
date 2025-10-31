export interface Product {
  id: number
  name: string
  category?: string
  preferences: string[]
  features: string[]
}

export interface FormData extends Record<string, unknown> {
  selectedPreferences: string[]
  selectedFeatures: string[]
  selectedRecommendationType: 'SingleProduct' | 'MultipleProducts' | ''
}

export interface FormProps {
  onRecommendationsChange?: (recommendations: Product[]) => void
}

export interface PreferencesProps {
  preferences: string[]
  onPreferenceChange: (selected: string[]) => void
}

export interface FeaturesProps {
  features: string[]
  onFeatureChange: (selected: string[]) => void
}

export interface RecommendationTypeProps {
  onRecommendationTypeChange: (
    selected: 'SingleProduct' | 'MultipleProducts',
  ) => void
}

export interface RecommendationListProps {
  recommendations: Product[]
}

export interface SubmitButtonProps {
  text: string
}

export interface CheckboxProps {
  label: string
  checked: boolean
  onChange: (checked: boolean) => void
}
