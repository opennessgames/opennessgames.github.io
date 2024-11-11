import { OptionsContext } from '../contexts/options.js'
import { useContext, createElement as e, ChangeEvent } from '../lib/react.js'
import { FileOptions } from '../options.js'

type Props<K extends keyof FileOptions> = {
  name: K
  accept?: string
}

export const File = <K extends keyof FileOptions>({
  name,
  accept
}: Props<K>) => {
  const { onChange } = useContext(OptionsContext)
  return e('input', {
    type: 'file',
    id: name,
    name,
    accept,
    onChange: (event: ChangeEvent<HTMLInputElement>) => {
      onChange(name, event.target.files?.[0] ?? null)
    }
  })
}
