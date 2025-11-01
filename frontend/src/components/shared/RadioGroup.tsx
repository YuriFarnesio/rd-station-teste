interface RadioCardGroupProps {
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
}: RadioCardGroupProps) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value)
  }

  return (
    <div className="flex flex-col gap-2">
      {options.map((option) => (
        <div key={option.value} className="flex items-center gap-2">
          <input
            id={`${name}-${option.value}`}
            name={name}
            type="radio"
            value={option.value}
            checked={value === option.value}
            onChange={handleChange}
            className="size-5 text-blue"
          />

          <label htmlFor={`${name}-${option.value}`}>{option.label}</label>
        </div>
      ))}
    </div>
  )
}
