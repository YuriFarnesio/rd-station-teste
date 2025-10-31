import { useState } from 'react'

const useForm = <T extends Record<string, unknown>>(initialState: T) => {
  const [formData, setFormData] = useState<T>(initialState)

  const handleChange = <K extends keyof T>(field: K, value: T[K]) => {
    setFormData({ ...formData, [field]: value })
  }

  return { formData, handleChange } as const
}

export default useForm
