// deno bundle --no-check --import-map import-map.json client/index.ts | terser > index.bundle.min.js

import { createElement as e, StrictMode } from './lib/react.js'
import { render } from './lib/react-dom.js'
import { App } from './App.js'

render(e(StrictMode, null, e(App)), document.getElementById('root'))
