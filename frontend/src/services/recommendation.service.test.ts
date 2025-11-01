import type { RecommendationsForm } from '@/schemas/recommendations-form.schema'
import { mockProducts } from '../mocks/products'
import { getRecommendations } from './recommendation.service'

describe('recommendationService', () => {
  test('Retorna recomendação correta para SingleProduct com base nas preferências selecionadas', () => {
    const formData: RecommendationsForm = {
      preferences: ['Integração com chatbots'],
      features: ['Chat ao vivo e mensagens automatizadas'],
      recommendationType: 'SingleProduct',
    }

    const recommendations = getRecommendations(formData, mockProducts)

    expect(recommendations).toHaveLength(1)
    expect(recommendations[0].name).toBe('RD Conversas')
  })

  test('Retorna recomendações corretas para MultipleProducts com base nas preferências selecionadas', () => {
    const formData: RecommendationsForm = {
      preferences: [
        'Integração fácil com ferramentas de e-mail',
        'Personalização de funis de vendas',
        'Automação de marketing',
      ],
      features: [
        'Rastreamento de interações com clientes',
        'Rastreamento de comportamento do usuário',
      ],
      recommendationType: 'MultipleProducts',
    }

    const recommendations = getRecommendations(formData, mockProducts)

    expect(recommendations).toHaveLength(2)
    expect(recommendations.map((product) => product.name)).toEqual([
      'RD Station CRM',
      'RD Station Marketing',
    ])
  })

  test('Retorna apenas um produto para SingleProduct com mais de um produto de match', () => {
    const formData: RecommendationsForm = {
      preferences: [
        'Integração fácil com ferramentas de e-mail',
        'Automação de marketing',
      ],
      features: [
        'Rastreamento de interações com clientes',
        'Rastreamento de comportamento do usuário',
      ],
      recommendationType: 'SingleProduct',
    }

    const recommendations = getRecommendations(formData, mockProducts)

    expect(recommendations).toHaveLength(1)
    expect(recommendations[0].name).toBe('RD Station Marketing')
  })

  test('Retorna o último match em caso de empate para SingleProduct', () => {
    const formData: RecommendationsForm = {
      preferences: ['Automação de marketing', 'Integração com chatbots'],
      features: [],
      recommendationType: 'SingleProduct',
    }

    const recommendations = getRecommendations(formData, mockProducts)

    expect(recommendations).toHaveLength(1)
    expect(recommendations[0].name).toBe('RD Conversas')
  })
})
