import { api } from '@/lib/axios'

export interface Product {
  id: number
  name: string
  category:
    | 'Vendas'
    | 'Marketing'
    | 'Omnichannel'
    | 'Uso de Inteligência Artificial'
  preferences: string[]
  features: string[]
}

export const getProducts = async (): Promise<Product[]> => {
  try {
    const response = await api.get('/products')

    return response.data
  } catch (error) {
    console.error('Error fetching products:', error)
    throw error
  }
}
