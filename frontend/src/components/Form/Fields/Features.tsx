import { useState } from 'react'
import { FeaturesProps } from '../../../types'
import Checkbox from '../../shared/Checkbox'

interface Props extends FeaturesProps {
  selectedFeatures?: string[]
}

function Features({ features, selectedFeatures = [], onFeatureChange }: Props) {
  const [currentFeatures, setCurrentFeatures] =
    useState<string[]>(selectedFeatures)

  const handleFeatureChange = (feature: string) => {
    const updatedFeatures = currentFeatures.includes(feature)
      ? currentFeatures.filter((pref) => pref !== feature)
      : [...currentFeatures, feature]

    setCurrentFeatures(updatedFeatures)
    onFeatureChange(updatedFeatures)
  }

  return (
    <div className="mb-4">
      <h2 className="text-lg font-bold mb-2">Funcionalidades:</h2>
      <ul>
        {features.map((feature, index) => (
          <li key={index} className="mb-2">
            <Checkbox
              value={feature}
              checked={currentFeatures.includes(feature)}
              onChange={() => handleFeatureChange(feature)}
              className="text-green-500"
            >
              {feature}
            </Checkbox>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Features
