import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
  type Dispatch,
  type SetStateAction,
} from 'react'

import { getProducts, type Product } from '@/services/product.service'

interface RecommendationsFormContextType {
  products: Product[]
  preferences: string[]
  features: string[]
  recommendations: Product[]
  isLoadingProducts: boolean
  setRecommendations: Dispatch<SetStateAction<Product[]>>
}

const RecommendationsFormContext = createContext(
  {} as RecommendationsFormContextType,
)

interface RecommendationsFormProviderProps {
  children: ReactNode
}

export function RecommendationsFormProvider({
  children,
}: RecommendationsFormProviderProps) {
  const [products, setProducts] = useState<Product[]>([])
  const [preferences, setPreferences] = useState<string[]>([])
  const [features, setFeatures] = useState<string[]>([])
  const [recommendations, setRecommendations] = useState<string[]>([])

  const [isLoadingProducts, setIsLoadingProducts] = useState(true)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setIsLoadingProducts(true)

        const productsData = await getProducts()
        setProducts(productsData)

        const allPreferences = new Set<string>()
        const allFeatures = new Set<string>()

        productsData.forEach((product) => {
          product.preferences.forEach((pref) => allPreferences.add(pref))
          product.features.forEach((feature) => allFeatures.add(feature))
        })

        setPreferences(Array.from(allPreferences))
        setFeatures(Array.from(allFeatures))
      } catch (err) {
        console.error('Error fetching products:', err)
      } finally {
        setIsLoadingProducts(false)
      }
    }

    fetchProducts()
  }, [])

  return (
    <RecommendationsFormContext.Provider
      value={{
        products,
        preferences,
        features,
        recommendations,
        isLoadingProducts,
        setRecommendations,
      }}
    >
      {children}
    </RecommendationsFormContext.Provider>
  )
}

export function useRecommendationsFormContext() {
  const context = useContext(RecommendationsFormContext)

  if (!context) {
    throw new Error(
      'useRecommendationsFormContext must be used within a RecommendationsFormProvider',
    )
  }

  return context
}
