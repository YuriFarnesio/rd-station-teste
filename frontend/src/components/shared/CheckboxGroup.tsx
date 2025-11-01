import { CheckIcon } from '@phosphor-icons/react'

import { cn } from '@/lib/utils'

interface CheckboxGroupProps {
  name: string
  value: string[]
  options: Array<{ label: string; value: string }>
  onChange: (value: string[]) => void
}

export function CheckboxGroup({
  name,
  value,
  options,
  onChange,
}: CheckboxGroupProps) {
  const handleChange = (checked: string) => {
    let newValue: string[]

    if (value.includes(checked)) {
      newValue = value.filter((v) => v !== checked)
    } else {
      newValue = [...value, checked]
    }

    onChange(newValue)
  }

  return (
    <div className="flex flex-col gap-3">
      {options.map((option) => {
        const isSelected = value.includes(option.value)

        return (
          <div
            key={option.value}
            onClick={() => handleChange(option.value)}
            className={cn(
              'bg-gray-200 hover:bg-gray-300 rounded-lg hover:shadow-sm p-0.5 cursor-pointer transition duration-300',
              isSelected &&
                'bg-linear-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-sm hover:shadow-md',
            )}
          >
            <div
              className={cn(
                'flex items-center gap-3 bg-white rounded-md p-4 transition duration-300',
                isSelected && 'bg-blue-50',
              )}
            >
              <div
                className={cn(
                  'size-5 flex items-center justify-center border-2 border-gray-900 rounded-sm transition duration-300',
                  isSelected && 'border-blue-500',
                )}
              >
                <div
                  className={cn(
                    'size-2 scale-0 bg-blue-500 rounded-xs transition',
                    isSelected && 'scale-100',
                  )}
                />
              </div>

              <input
                name={name}
                type="checkbox"
                value={option.value}
                checked={isSelected}
                className="sr-only"
              />

              <span className="flex-1 text-sm text-gray-900 font-medium">
                {option.label}
              </span>

              <CheckIcon
                weight="bold"
                className={cn(
                  'size-4 text-purple-500 opacity-0',
                  isSelected && 'opacity-100',
                )}
              />
            </div>
          </div>
        )
      })}
    </div>
  )
}
