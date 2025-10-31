import useForm from '../../hooks/useForm';
import useProducts from '../../hooks/useProducts';
import useRecommendations from '../../hooks/useRecommendations';
import { Features, Preferences, RecommendationType } from './Fields';
import { SubmitButton } from './SubmitButton';

function Form({ onRecommendationsChange }) {
  const { preferences, features, products } = useProducts();
  const { formData, handleChange } = useForm({
    selectedPreferences: [],
    selectedFeatures: [],
    selectedRecommendationType: '',
  });

  const { getRecommendations } = useRecommendations(products);

  const handleSubmit = (e) => {
    e.preventDefault();
    const dataRecommendations = getRecommendations(formData);

    if (typeof onRecommendationsChange === 'function') {
      onRecommendationsChange(dataRecommendations);
    }
  };

  return (
    <form
      className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-md"
      onSubmit={handleSubmit}
    >
      <Preferences
        preferences={preferences}
        onPreferenceChange={(selected) =>
          handleChange('selectedPreferences', selected)
        }
      />
      <Features
        features={features}
        onFeatureChange={(selected) =>
          handleChange('selectedFeatures', selected)
        }
      />
      <RecommendationType
        onRecommendationTypeChange={(selected) =>
          handleChange('selectedRecommendationType', selected)
        }
      />
      <SubmitButton text="Obter recomendação" />
    </form>
  );
}

export default Form;
