import { createContext } from '../lib/react.js'
import {
  ConversionOptions,
  defaultOptions,
  OnOptionChange
} from '../options.js'

type ContextValue = {
  options: ConversionOptions
  onChange: OnOptionChange
}

export const OptionsContext = createContext<ContextValue>({
  options: defaultOptions,
  onChange: () => { throw new Error('The onChange handler was not set.') }
})
