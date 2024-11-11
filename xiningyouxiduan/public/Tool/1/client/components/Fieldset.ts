import { createElement as e, ReactNode } from '../lib/react.js'

type Props = {
  title: ReactNode
  children?: ReactNode
}

export const Fieldset = ({ title, children }: Props) => {
  return e(
    'fieldset',
    { className: 'fieldset' },
    e('legend', { className: 'legend' }, title),
    children
  )
}
