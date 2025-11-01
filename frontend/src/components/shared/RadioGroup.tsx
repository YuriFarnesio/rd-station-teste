import { cn } from '@/lib/utils';

interface RadioGroupProps {
  name: string
  value: string
  options: Array<{ label: string; value: string }>
  onChange: (value: string) => void
}

export function RadioGroup({
  name,
  value,
  options,
  onChange,
}: RadioGroupProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-3">
      {options.map((option) => {
        const isSelected = value === option.value

        return (
          <div
            key={option.value}
            onClick={() => onChange(option.value)}
            className={cn(
              'bg-gray-900 hover:bg-gray-700 rounded-lg shadow-sm hover:shadow-lg p-0.5 cursor-pointer transition duration-300',
              isSelected &&
                'bg-linear-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-md',
            )}
          >
            <div
              className={cn(
                'flex items-center gap-2 sm:gap-3 bg-white rounded-md p-3 sm:p-4 transition duration-300',
                isSelected && 'bg-blue-50',
              )}
            >
              <div
                className={cn(
                  'size-4 sm:size-5 flex items-center justify-center border-2 border-gray-900 rounded-full transition duration-300 shrink-0',
                  isSelected && 'border-blue-500',
                )}
              >
                <div
                  className={cn(
                    'size-1.5 sm:size-2 scale-0 bg-blue-500 rounded-full transition',
                    isSelected && 'scale-100',
                  )}
                />
              </div>

              <input
                name={name}
                type="radio"
                value={option.value}
                checked={isSelected}
                className="sr-only"
                readOnly
              />

              <span className="flex-1 text-xs sm:text-sm text-gray-900 font-medium leading-tight min-w-0">
                {option.label}
              </span>

              <div
                className={cn(
                  'size-2 sm:size-2.5 bg-purple-500 opacity-0 rounded-full shrink-0',
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
