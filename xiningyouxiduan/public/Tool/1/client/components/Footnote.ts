import { FootnotesContext } from '../contexts/footnotes.js'
import {
  createElement as e,
  ReactNode,
  useContext,
  useEffect
} from '../lib/react.js'

type Props = {
  id: string
  children?: ReactNode
}

export const Footnote = ({ id, children }: Props) => {
  const { footnotes } = useContext(FootnotesContext)
  footnotes.set(id, children)
  useEffect(() => {
    return () => {
      footnotes.delete(id)
    }
  }, [])

  return e(
    'a',
    { id: `ref-${id}`, href: `#note-${id}` },
    e('sup', { className: 'footnote' }, '[Footnote]')
  )
}
