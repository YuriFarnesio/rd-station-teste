import { useEffect, useState } from 'react'
import getProducts, { Product } from '../services/product.service'

const useProducts = () => {
  const [preferences, setPreferences] = useState<string[]>([])
  const [features, setFeatures] = useState<string[]>([])
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productsData = await getProducts()
        const allPreferences: string[] = []
        const allFeatures: string[] = []

        setProducts(productsData)

        productsData.forEach((product) => {
          const productPreferences = product.preferences
          allPreferences.push(...productPreferences)

          const productFeatures = product.features
          allFeatures.push(...productFeatures)
        })

        setPreferences(allPreferences)
        setFeatures(allFeatures)
      } catch (error) {
        console.error('Erro ao obter os produtos:', error)
      }
    }

    fetchData()
  }, [])

  return { preferences, features, products } as const
}

export default useProducts
