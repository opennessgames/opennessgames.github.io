import { OptionsContext } from '../contexts/options.js'
import { createElement as e, ChangeEvent, useContext } from '../lib/react.js'
import { BooleanOptions } from '../options.js'

type Props<K extends keyof BooleanOptions> = {
  name: K
}

export const Checkbox = <K extends keyof BooleanOptions>({
  name
}: Props<K>) => {
  const { options, onChange } = useContext(OptionsContext)
  return e('input', {
    type: 'checkbox',
    id: name,
    name,
    checked: options[name],
    onChange: (event: ChangeEvent<HTMLInputElement>) => {
      onChange(name, event.target.checked)
    }
  })
}
