import { createContext, ReactNode } from '../lib/react.js'

type ContextValue = {
  footnotes: Map<string, ReactNode>
}

export const FootnotesContext = createContext<ContextValue>({
  footnotes: new Map()
})
