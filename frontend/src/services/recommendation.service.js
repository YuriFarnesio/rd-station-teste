const getRecommendations = (
  formData = { selectedPreferences: [], selectedFeatures: [], selectedRecommendationType: '' },
  products = []
) => {
  const { selectedPreferences = [], selectedFeatures = [], selectedRecommendationType = '' } = formData || {};

  if (products.length === 0) return [];

  const scored = products.map((product) => {
    const preferenceMatches = product.preferences.filter((p) => selectedPreferences.includes(p)).length;
    const featureMatches = product.features.filter((f) => selectedFeatures.includes(f)).length;

    const score = preferenceMatches + featureMatches;

    return { product, score };
  });

  const maxScore = Math.max(...scored.map((s) => s.score));

  if (maxScore <= 0) return [];

  if (selectedRecommendationType === 'SingleProduct') {
    const maxMatches = scored.filter((s) => s.score === maxScore);
    const last = maxMatches.reduce((acc, cur) => (cur.product.id >= acc.product.id ? cur : acc), maxMatches[0]);

    return [last.product];
  }

  const multiple = scored
    .filter((s) => s.score > 0)
    .sort((a, b) => b.score - a.score || b.product.id - a.product.id)
    .map((s) => s.product);

  return multiple;
};

export default { getRecommendations };
