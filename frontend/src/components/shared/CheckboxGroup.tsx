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
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const checkedValue = event.target.value
    const isChecked = event.target.checked

    let newValue: string[]

    if (isChecked) {
      if (!value.includes(checkedValue)) {
        newValue = [...value, checkedValue]
      } else {
        newValue = value
      }
    } else {
      newValue = value.filter((val) => val !== checkedValue)
    }

    onChange(newValue)
  }

  return (
    <div className="flex flex-col gap-2">
      {options.map((option) => {
        const isChecked = value.includes(option.value)

        return (
          <div key={option.value} className="flex items-center gap-2">
            <input
              id={`${name}-${option.value}`}
              name={name}
              type="checkbox"
              value={option.value}
              checked={isChecked}
              onChange={handleChange}
              className="size-5 text-blue"
            />

            <label htmlFor={`${name}-${option.value}`}>{option.label}</label>
          </div>
        )
      })}
    </div>
  )
}
